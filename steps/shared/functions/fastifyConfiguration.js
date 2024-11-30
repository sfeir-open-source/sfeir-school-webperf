import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import Logger from 'pino';

export const getFastifyConfiguration = () => {
  /**
   * Utils
   */
  const logger = Logger({ level: 'info', transport: { target: 'pino-pretty' } });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const certificatesPath = path.resolve(__dirname, '../certificates/');

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

  return fastifyConfiguration;
};
