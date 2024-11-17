import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import fastifyCompress from '@fastify/compress';

import nunjucks from 'nunjucks';
import Logger from 'pino';

import { product as productDb, merch as merchDb } from 'shared/db/index.js';

import 'dotenv/config';

/**
 * Utils
 */

const logger = Logger({ level: 'info', transport: { target: 'pino-pretty' } });

const addDelay =
  (delay = 500) =>
  () =>
    new Promise((resolve) => setTimeout(() => resolve('done'), delay));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certificatesPath = path.resolve(__dirname, '../../shared/certificates/');

const fastifyConfiguration = {
  loggerInstance: logger,
};

/**
 * SSL / HTTP2
 */
if (process.env.ENABLE_SSL === 'true') {
  try {
    const key = fs.readFileSync(path.join(certificatesPath, 'localhost.key'));
    const cert = fs.readFileSync(path.join(certificatesPath, 'localhost.crt'));
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

/**
 * Statics
 */
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
});

fastify.addHook('onRequest', async (request, reply) => {
  if (request.url.startsWith('/images')) {
    await addDelay(800)();
  }

  if (request.url.startsWith('/styles')) {
    await addDelay(250)();
  }
});

/**
 * Views
 */
fastify.register(fastifyView, {
  engine: { nunjucks },
  templates: ['server/views', 'server/partials'],
});

fastify.get('/', (_, reply) => {
  return reply.redirect(`/product/${productDb.first().id}`);
});

/**
 * Product page
 */

fastify.get('/product/:id', async (request, reply) => {
  const productId = request.params.id;
  const [productData, reviewsData] = await Promise.all([
    productDb.findOne(productId), //
    productDb.getReviews(productId),
  ]);
  return reply.view('pages/product.njk', { product: productData, userReviews: reviewsData });
});

fastify.get('/partials/product/:id/conversion', async (request, reply) => {
  const sizesData = await productDb.getSizes(request.params.id);
  const hasStock = sizesData?.some((c) => c.availableQuantity > 0);
  if (hasStock) {
    return reply.view('partials/conversion-stock.njk', { sizes: sizesData });
  }
  return reply.view('partials/conversion-outofstock.njk');
});

fastify.get('/partials/product/:id/reviews', async (request, reply) => {
  const reviewsData = await productDb.getReviews(request.params.id);
  return reply.view('partials/reviews.njk', { userReviews: reviewsData });
});

/**
 * Layout
 */
fastify.get('/partials/banner-ad', async (request, reply) => {
  const adData = await merchDb.getAdBanner();
  return reply.view('partials/header-ad.njk', { ad: adData });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
