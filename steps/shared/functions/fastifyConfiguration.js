import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import Logger from 'pino';
import configuration from './../configuration.js';

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
  if (configuration.enableSSL) {
    try {
      const key = fs.readFileSync(path.join(certificatesPath, 'localhost.key'));
      const cert = fs.readFileSync(path.join(certificatesPath, 'localhost.crt'));
      fastifyConfiguration.https = {
        key,
        cert,
      };
      fastifyConfiguration.http2 = configuration.enableHttp2;
    } catch (err) {
      logger.warn('Impossible to configure SSL, will fallback on default HTTP');
    }
  }

  if (configuration.enableHttp2 && !configuration.enableSSL) {
    logger.warn('HTTP/2 needs SSL to be activated, will fallback on HTTP/1.1');
  }

  return fastifyConfiguration;
};
