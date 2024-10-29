import path from 'path';
import fs from 'fs';

import Fastify from 'fastify'
import fastifyView from '@fastify/view'
import fastifyStatic from '@fastify/static';
import fastifyCompress from '@fastify/compress';

import nunjucks from 'nunjucks';

import products from './data/products.js';
import logger from './utils/logger.js';

import 'dotenv/config'

const addDelay = (delay = 500) => () => new Promise((resolve) => setTimeout(() => resolve('done'), delay));

const fastifyConfiguration = {
    loggerInstance: logger,
}

if (process.env.ENABLE_SSL === "true") {
    try {
        const key = fs.readFileSync(path.join(process.cwd(), "server/certificates/localhost.key"));
        const cert = fs.readFileSync(path.join(process.cwd(), "server/certificates/localhost.crt"));
        fastifyConfiguration.https = {
            key,
            cert
        }
        fastifyConfiguration.http2 = process.env.ENABLE_HTTP2 === "true"
    } catch (err) {
        logger.warn("Impossible to configure SSL, will fallback on default HTTP");
    }
}

if (process.env.ENABLE_HTTP2 === "true" && process.env.ENABLE_SSL !== "true") {
    logger.warn("HTTP/2 needs SSL to be activated, will fallback on HTTP/1.1");
}

const fastify = Fastify(fastifyConfiguration)

fastify.register(fastifyCompress)

fastify.register(fastifyStatic, {
    root: path.join(process.cwd(), "public")
})

fastify.register(fastifyView, {
    engine: { nunjucks },
    templates: [
        "server/views",
        "server/partials"
    ],
});

fastify.get('/', (request, reply) => {
    reply.view("home.njk")
})

fastify.get('/category/:id', (request, reply) => {
    reply.view("category.njk")
})

fastify.get('/product/:id', { preHandler: [addDelay()] }, (request, reply) => {
    const product = products.find(p => p.id === request.params.id);
    reply.view("product.njk", { product })
})

fastify.get('/product/:id/conversion', { preHandler: [addDelay(2000)] }, (request, reply) => {
    const product = products.find(p => p.id === request.params.id);
    const hasStock = product?.colors.some(c => c.availableQuantity > 0)
    if (hasStock) {
        reply.view("conversion-stock.njk", { product });
        return;
    }

    reply.view("conversion-outofstock.njk", { product });
})


fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})