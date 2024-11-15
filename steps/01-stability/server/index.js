import path from 'path';
import fs from 'fs';

import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import fastifyCompress from '@fastify/compress';

import nunjucks from 'nunjucks';

import products from './data/products.js';
import logger from './utils/logger.js';

import 'dotenv/config';

const addDelay =
  (delay = 500) =>
  () =>
    new Promise((resolve) => setTimeout(() => resolve('done'), delay));

const fastifyConfiguration = {
  loggerInstance: logger,
};

if (process.env.ENABLE_SSL === 'true') {
  try {
    const key = fs.readFileSync(path.join(process.cwd(), 'server/certificates/localhost.key'));
    const cert = fs.readFileSync(path.join(process.cwd(), 'server/certificates/localhost.crt'));
    fastifyConfiguration.https = {
      key,
      cert,
    };
    fastifyConfiguration.http2 = process.env.ENABLE_HTTP2 === 'true';
  } catch (err) {
    logger.warn('Impossible to configure SSL, will fallback on default HTTP');
  }
}

if (process.env.ENABLE_HTTP2 === 'true' && process.env.ENABLE_SSL !== 'true') {
  logger.warn('HTTP/2 needs SSL to be activated, will fallback on HTTP/1.1');
}

const fastify = Fastify(fastifyConfiguration);

fastify.register(fastifyCompress);

fastify.register(fastifyStatic, {
  root: path.join(process.cwd(), 'public'),
});

fastify.addHook('onRequest', async (request, reply) => {
  if (request.url.startsWith('/images')) {
    await addDelay(800)();
  }

  if (request.url.startsWith('/styles')) {
    await addDelay(250)();
  }
});

fastify.register(fastifyView, {
  engine: { nunjucks },
  templates: ['server/views', 'server/partials'],
});

fastify.get('/', (_, reply) => {
  const product = products[0];
  reply.redirect(`/product/${product.id}`);
});

fastify.get('/product/:id', { preHandler: [addDelay()] }, (request, reply) => {
  const product = products.find((p) => p.id === request.params.id);
  reply.view('pages/product.njk', { product });
});

fastify.get('/product/:id/conversion', { preHandler: [addDelay(3000)] }, (request, reply) => {
  const product = products.find((p) => p.id === request.params.id);
  const hasStock = product?.sizes.some((c) => c.availableQuantity > 0);
  if (hasStock) {
    reply.view('partials/conversion-stock.njk', { product });
    return;
  }

  reply.view('partials/conversion-outofstock.njk', { product });
});

fastify.get('/product/:id/ad', { preHandler: [addDelay(2000)] }, (request, reply) => {
  reply.view('partials/header-ad.njk');
});

fastify.get('/product/:id/video', { preHandler: [addDelay(3000)] }, (request, reply) => {
  const product = products.find((p) => p.id === request.params.id);

  reply.view('partials/video.njk', { product });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
