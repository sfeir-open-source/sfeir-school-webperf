<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

##--##

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

- <strong>Sur le serveur</strong>

##--##

<div style="margin-top: 205px;">

Fastify :

```js
import Fastify from 'fastify';
import fastifyCompress from '@fastify/compress';

const fastify = Fastify();
fastify.register(fastifyCompress);
```

Express :

```js
import compression from 'compression';
import express from 'express';

const app = express();
app.use(compression());
```

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

- Sur le serveur
- <strong>Sur un reverse proxy</strong>

##--##

<div style="margin-top: 205px;">

nginx.conf :

```
#gzip
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

#brotli
brotli on;
brotli_comp_level 6;
brotli_types text/xml image/svg+xml application/x-font-ttf image/vnd.microsoft.icon application/x-font-opentype application/json font/eot application/vnd.ms-fontobject application/javascript font/otf application/xml application/xhtml+xml text/javascript application/x-javascript text/plain application/x-font-truetype application/xml+rss image/x-icon font/opentype text/css image/x-win-bitmap;
```

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

- Sur le serveur
- Sur un reverse proxy
- <strong>Sur un CDN</strong>

##--##

<div style="margin-top: 100px;">

Fastly :
<img src="./assets/images/03-speed/compression-fastly.png" style="width: 800px; height: auto; display: block; margin-top: 20px; border: 2px solid #000;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

- Sur le serveur
- Sur un reverse proxy
- Sur un CDN
- <strong>Au build</strong>

##--##

<div style="margin-top: 205px;">

rollup.config.js

```js
import { rollup } from 'rollup';
import brotli from 'rollup-plugin-brotli';

rollup({
  entry: 'src/index.js',
  plugins: [brotli()],
});
```

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

# 6. La compression

## Configuration

- Sur le serveur
- Sur un reverse proxy
- Sur un CDN
- Au build

##--##

<div style="margin-top: 205px;">

**⚠️ La double compression est contre productive**

- plus de CPU
- des fichiers plus volumineux

</div>
