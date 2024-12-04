import path from 'path';
import { fileURLToPath } from 'url';

import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';

import nunjucks from 'nunjucks';

import { product as productDb, merch as merchDb, cart as cartDb } from 'shared/db/index.js';
import { promiseDelay, getFastifyConfiguration, imageTransformerHook } from 'shared/functions/index.js';

import 'dotenv/config';

const BUILD_ID = process.env.BUILD_ID || '1234';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify(getFastifyConfiguration());

// Add default delay to simulate real server latency
fastify.addHook('onRequest', async () => {
  await promiseDelay(300);
});

fastify.addHook('onSend', (request, reply, payload, done) => {
  if ([request.url, request.headers?.referer]?.some((url) => url?.includes('product/200'))) {
    reply.header('Cache-Control', 'public, max-age=30');
    return done(null, payload);
  }

  if ([request.url, request.headers?.referer]?.some((url) => url?.includes('product/300'))) {
    reply.header('Cache-Control', 'no-cache');
    return done(null, payload);
  }

  if ([request.url, request.headers?.referer]?.some((url) => url?.includes('product/400'))) {
    reply.header('Cache-Control', 'no-store');
    return done(null, payload);
  }

  if ([request.url, request.headers?.referer]?.some((url) => url?.includes('product/500'))) {
    reply.header('Cache-Control', 'max-age=30, immutable');
    return done(null, payload);
  }

  if ([request.url, request.headers?.referer]?.some((url) => url?.includes('product/600'))) {
    // Static assets
    if (request.url.includes('.js?v=') || request.url.includes('.css?v=') || request.url.includes('.woff2?v=')) {
      reply.header('Cache-Control', 'public, max-age=31536000, immutable');
      return done(null, payload);
    }

    // Images
    if (request.url.startsWith('/images')) {
      reply.header('Cache-Control', 'public, max-age=3600');
      return done(null, payload);
    }

    // Page
    if (request.url.startsWith('/product')) {
      reply.header('Cache-Control', 'public, max-age=300');
      return done(null, payload);
    }

    // The rest
    reply.header('Cache-Control', 'private, no-cache');
    return done(null, payload);
  }
});

/**
 * Statics
 */
fastify.register(fastifyStatic, {
  root: [path.join(__dirname, '../public'), path.join(__dirname, '../../shared/public')],
});

fastify.addHook('onRequest', imageTransformerHook);

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
  return reply.view('pages/home.njk');
});

/**
 * Product page
 */

fastify.get('/product/600', async (request, reply) => {
  const [productData, reviewsData] = await Promise.all([
    productDb.findOne('600'), //
    productDb.getReviews('600'),
  ]);
  return reply.view('pages/product-build.njk', { product: productData, userReviews: reviewsData, buildId: BUILD_ID });
});

fastify.get('/product/:id', async (request, reply) => {
  const productId = request.params.id;
  const [productData, reviewsData, relatedProductsData] = await Promise.all([
    productDb.findOne(productId), //
    productDb.getReviews(productId),
    productDb.getRelatedProducts(productId),
  ]);
  return reply.view('pages/product.njk', {
    product: productData,
    userReviews: reviewsData,
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
