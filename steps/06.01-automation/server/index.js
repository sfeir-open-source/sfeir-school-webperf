import path from 'path';
import { fileURLToPath } from 'url';

import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';

import nunjucks from 'nunjucks';

import { product as productDb, merch as merchDb, cart as cartDb } from 'shared/db/index.js';
import {
  promiseDelay,
  getFastifyConfiguration,
  imageTransformerHook,
  cacheConfigHook,
} from 'shared/functions/index.js';

import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify(getFastifyConfiguration());

// Add default delay to simulate real server latency
fastify.addHook('onRequest', async () => {
  await promiseDelay(300);
});

/**
 * Statics
 */
fastify.register(fastifyStatic, {
  root: [path.join(__dirname, '../public'), path.join(__dirname, '../../shared/public')],
});

fastify.addHook('onRequest', imageTransformerHook);
fastify.addHook('onSend', cacheConfigHook);

/**
 * Views
 */
fastify.register(fastifyView, {
  engine: { nunjucks },
  templates: ['server/views', 'server/partials'],
});

/**
 * Homepage
 */
fastify.get('/', async (_, reply) => {
  return reply.redirect(`/product/${(await productDb.first()).id}`);
});

/**
 * Product page
 */

fastify.get('/product/:id', async (request, reply) => {
  const productId = request.params.id;
  const [productData, relatedProductsData] = await Promise.all([
    productDb.findOne(productId), //
    productDb.getRelatedProducts(productId),
  ]);
  return reply.view('pages/product.njk', {
    product: productData,
    relatedProducts: relatedProductsData,
  });
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

fastify.get('/partials/product/:id/relatedProduct', async (request, reply) => {
  const relatedProductsData = await productDb.getRelatedProducts(request.params.id);
  return reply.view('partials/related-products.njk', { getRelatedProducts: relatedProductsData });
});

/**
 * Layout
 */
fastify.get('/partials/banner-ad', async (request, reply) => {
  const adData = await merchDb.getAdBanner();
  return reply.view('partials/header-ad.njk', { ad: adData });
});

/**
 * Global
 */
fastify.post('/addtocart', async (request, reply) => {
  await cartDb.addItem();
  return reply.status(200).send({ status: 'success' });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
