import { promiseDelay } from '../functions/index.js';
import products from '../data/products.js';

export const product = {
  first: async () => {
    return products[0];
  },
  findOne: async (id) => {
    await promiseDelay(500);
    return products.find((p) => p.id === id);
  },
  getSizes: async (id) => {
    await promiseDelay(3000);
    const product = products.find((p) => p.id === id);
    return product?.sizes;
  },
  getReviews: async (id) => {
    await promiseDelay(2000);
    const product = products.find((p) => p.id === id);
    return product?.reviews?.userReviews;
  },
};

export const merch = {
  getAdBanner: async () => {
    await promiseDelay(2000);
    return {
      text: "SOLDES : Retrouvez toutes nos promotions jusqu'à -50%",
      link: {
        text: 'Découvrir',
        href: '/',
      },
    };
  },
};
