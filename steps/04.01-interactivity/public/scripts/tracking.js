window.sendTrackingEvent = (eventName) => {
  const start = performance.now();
  let delay = 1000;
  if (eventName === 'review_comment_type') {
    delay = 200;
  }
  // Simulate some heavy operations
  while (performance.now() - start < delay) {}
  console.log('TRACK EVENT', eventName);
};
