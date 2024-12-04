window.sendTrackingEvent = (eventName) => {
  const start = performance.now();
  let delay = 1000;
  if (eventName === 'reviews_type') delay = 300;

  // Simulate some heavy operations
  while (performance.now() - start < delay) {}
  console.log('TRACK EVENT', eventName);
};
