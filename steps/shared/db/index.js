import { promiseDelay } from '../functions/index.js';
import products from '../data/products.js';

export const product = {
  first: async () => {
    return products[0];
  },
  findOne: async (id) => {
    await promiseDelay(300);
    return products.find((p) => p.id === id);
  },
  getSizes: async (id) => {
    await promiseDelay(2700);
    const product = products.find((p) => p.id === id);
    return product?.sizes;
  },
  getReviews: async (id) => {
    await promiseDelay(1700);
    const product = products.find((p) => p.id === id);
    return product?.reviews?.userReviews;
  },
  getRelatedProducts: async (id) => {
    await promiseDelay(2300);
    const product = products.filter((p) => p.id !== id);
    return product;
  },
};

export const merch = {
  getAdBanner: async () => {
    await promiseDelay(1700);
    return {
      text: "SOLDES : Retrouvez toutes nos promotions jusqu'à -50%",
      link: {
        text: 'Découvrir',
        href: '/',
      },
    };
  },
};

export const cart = {
  addItem: async () => {
    await promiseDelay(2000);
  },
};
