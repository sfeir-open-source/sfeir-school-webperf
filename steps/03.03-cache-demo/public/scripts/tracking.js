window.sendTrackingEvent = (eventName) => {
  const start = performance.now();
  // Simulate some heavy operations
  while (performance.now() - start < 1000) {}
  console.log('TRACK EVENT', eventName);
};
