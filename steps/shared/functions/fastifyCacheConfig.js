export const cacheConfigHook = (request, reply, payload, done) => {
  // Static assets
  if (request.url.endsWith('.js') || request.url.endsWith('.css') || request.url.endsWith('.woff2')) {
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
  reply.header('Cache-Control', 'no-cache');
  return done(null, payload);
};
