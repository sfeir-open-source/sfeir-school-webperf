import path from 'path';
import sharp from 'sharp';

export const imageTransformerHook = async (request, reply) => {
  if (request.url.startsWith('/images')) {
    const transformations = {};
    if (request.query.width) transformations.width = Number(request.query.width);
    if (request.query.quality) transformations.quality = Number(request.query.quality);
    if (['webp', 'png', 'jpg', 'avif'].includes(request.query.format)) transformations.format = request.query.format;

    if (Object.keys(transformations).length > 0) {
      const imagePath = request.url.split('?')[0];

      let image = await sharp(path.join(__dirname, '../public', imagePath));

      const format = transformations.format || 'jpeg';
      image = image.toFormat(format, { quality: transformations.quality || 100, force: false });

      if (transformations.width) {
        image = image.resize(transformations.width);
      }

      const bufferImage = await image.toBuffer();
      reply.type(`image/${format}`).send(bufferImage);
    }
  }
};
