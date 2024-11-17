export const promiseDelay = (delay = 500) => new Promise((resolve) => setTimeout(() => resolve('done'), delay));
