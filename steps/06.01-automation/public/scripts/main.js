const yieldToMain = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

// --- Initialization Functions ---
const initializeApp = async () => {
  // Load async contents
  loadConversionContent();
  await yieldToMain();
  loadReviewsContent();
  loadHeaderAdContent();
  await yieldToMain();

  // Init event listeners & interactions
  initProducThumbnails();
  await yieldToMain();
  initMainImage();
  await yieldToMain();
  initImageZoom();
  await yieldToMain();
  initPerformanceObserver();
};

// Simulate some heavy operations
const longBlockingTask = (delay) => {
  const start = performance.now();
  while (performance.now() - start < delay) {}
};

// --- Product Size Selection ---
const handleSizeChange = () => {
  const addToCartButton = document.getElementById('btn-add-to-cart');
  if (addToCartButton) addToCartButton.disabled = false;
  setTimeout(() => {
    window.sendTrackingEvent('product_size_change');
  }, 0);
};

const initProductSize = () => {
  const sizeOptions = document.querySelectorAll('input[name=size]');
  sizeOptions.forEach((option) => option.addEventListener('change', handleSizeChange));
};

// --- Conversion Content ---
const loadConversionContent = async () => {
  performance.mark('conversion_start');

  longBlockingTask(55);
  const productId = getProductIdFromURL();
  const conversionWrapper = document.getElementById('conversion');
  if (!conversionWrapper) return;

  try {
    const conversionHTML = await fetch(`/partials/product/${productId}/conversion`).then((res) => res.text());
    conversionWrapper.innerHTML = conversionHTML;
    initProductSize();
    initAddtoCart();
  } catch (error) {
    console.error('Error loading conversion content:', error);
  }
  performance.mark('conversion_end');
  performance.measure('conversion', 'conversion_start', 'conversion_end');
};

// --- Reviews Content ---
const loadReviewsContent = async () => {
  const productId = getProductIdFromURL();
  const reviewsWrapper = document.getElementById('reviews');
  if (!reviewsWrapper) return;

  try {
    const reviewsHTML = await fetch(`/partials/product/${productId}/reviews`).then((res) => res.text());
    reviewsWrapper.innerHTML = reviewsHTML;
    initReviewForm();
  } catch (error) {
    console.error('Error loading reviews content:', error);
  }
};

// --- Header Advertisement ---
const loadHeaderAdContent = async () => {
  longBlockingTask(125);
  const adWrapper = document.getElementById('header-ad');
  if (!adWrapper) return;

  try {
    const adHTML = await fetch('/partials/banner-ad').then((res) => res.text());
    adWrapper.innerHTML = adHTML;
  } catch (error) {
    console.error('Error loading header ad content:', error);
  }
};

// --- Video Playback ---
const playVideo = () => {
  const videoCover = document.querySelector('.video-cover');
  const videoIframe = document.getElementById('rickroll-video');

  if (videoCover) videoCover.style.display = 'none';
  if (videoIframe) {
    videoIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    videoIframe.style.display = 'block';
  }
};

// --- Product Image Handling ---
const handleThumbnailClick = (event) => {
  const thumbnails = document.querySelectorAll('button.product-thumbnail');
  const mainImage = document.getElementById('main-image');

  thumbnails.forEach((thumb) => {
    thumb.ariaCurrent = 'false';
    thumb.classList.remove('product-thumbnail__current');
  });

  const clickedThumbnail = event.currentTarget;
  clickedThumbnail.ariaCurrent = 'true';
  clickedThumbnail.classList.add('product-thumbnail__current');

  const thumbnailImage = clickedThumbnail.querySelector('img');
  if (mainImage && thumbnailImage) {
    mainImage.src = thumbnailImage.src.split('?')[0];
    mainImage.alt = thumbnailImage.alt;
  }

  setTimeout(() => {
    window.sendTrackingEvent('change_thumbnail');
  }, 0);
};

const initProducThumbnails = () => {
  longBlockingTask(110);
  const thumbnails = document.querySelectorAll('button.product-thumbnail');
  thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', handleThumbnailClick));
};

// --- Image Zoom ---
const openImageZoom = (event) => {
  const overlay = document.getElementById('image-zoom');
  const zoomImage = overlay?.querySelector('img');

  if (overlay && zoomImage) {
    zoomImage.src = event.target.src;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    const imageDimensions = {
      height: zoomImage.offsetHeight,
      width: zoomImage.offsetWidth,
    };
    setTimeout(() => {
      window.sendTrackingEvent('image_zoom_open', { imageDimensions });
    }, 0);
  }
};

const closeImageZoom = () => {
  const overlay = document.getElementById('image-zoom');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
};

const handleOverlayClick = (event) => {
  const overlay = document.getElementById('image-zoom');
  if (event.target === overlay) closeImageZoom();
};

const initImageZoom = () => {
  longBlockingTask(120);
  const mainImage = document.getElementById('main-image');
  const overlay = document.getElementById('image-zoom');
  const closeButton = document.getElementById('btn-image-zoom-close');

  if (mainImage) mainImage.addEventListener('click', openImageZoom);
  if (overlay) overlay.addEventListener('click', handleOverlayClick);
  if (closeButton) closeButton.addEventListener('click', closeImageZoom);
};

// --- Cart functions---
const handleAddToCart = async (event) => {
  event.preventDefault();
  const addToCartButton = document.getElementById('btn-add-to-cart');
  addToCartButton?.classList.add('loading');
  try {
    const productId = getProductIdFromURL();
    const sizeElement = document.querySelector('input[name=size]:checked');

    if (!sizeElement) {
      return;
    }

    await fetch('/addtocart', { method: 'post', body: JSON.stringify({ productId, size: sizeElement.value }) }).then(
      (res) => res.text()
    );
    displayAlert('Article ajouté au panier');
  } catch (error) {
    displayAlert("Erreur lors de l'ajout au panier", 'error');
  }
  addToCartButton?.classList.remove('loading');
};

const initAddtoCart = () => {
  const form = document.getElementById('conversion-form');
  form?.addEventListener('submit', handleAddToCart);
};

// --- Helper Functions ---
const getProductIdFromURL = () => {
  return window.location.pathname.split('/')[2];
};

const displayAlert = (text, variant = 'success', duration = 3000) => {
  let alertElement = document.getElementById('alert');

  if (!alertElement) {
    alertElement = document.createElement('div');
    alertElement.id = 'alert';
    document.body.insertAdjacentElement('beforeend', alertElement);
    alertElement.getBoundingClientRect(); // Force reflow to animate
  }

  alertElement.className = variant;
  alertElement.innerText = text;
  alertElement.classList.add('open');

  setTimeout(() => {
    alertElement.classList.remove('open');
  }, duration);
};

// --- Main image zoom on hover ---
const initMainImage = () => {
  const container = document.getElementById('main-image-container');
  const image = document.getElementById('main-image');

  const handleZoom = (event) => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = 'scale(2)';
  };

  const handleLeave = () => {
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)';
  };

  container?.addEventListener('mousemove', handleZoom);
  container?.addEventListener('mouseover', handleZoom);
  container?.addEventListener('mouseleave', handleLeave);
};

const debounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const trackInputReview = debounce((content) => {
  window.sendTrackingEvent('review_comment_type', content);
}, 1000);

const handleReviewUpdate = (event) => {
  const wordCountElement = document.getElementById('words-count');
  const content = event.target.value;
  const words = content.trim().split(/\s+/);
  wordCountElement.innerText = content.trim() === '' ? 0 : words.length;
  trackInputReview(content);
};

const initReviewForm = () => {
  longBlockingTask(120);
  const textareaElement = document.getElementById('review-content-textarea');
  textareaElement?.addEventListener('keyup', handleReviewUpdate);
};

// --- Performance Observer ---
const initPerformanceObserver = () => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'measure' && entry.name === 'conversion') {
        console.log('loading conversion zone (ms):', entry.duration + entry.startTime);
      }
      if (entry.entryType === 'element') {
        console.log(`loading "${entry.identifier} "(ms):`, entry.startTime);
      }
    });
  });

  observer.observe({ entryTypes: ['measure', 'mark', 'element'] });

  let cacheHits = 0;
  let resourcesCount = 0;
  let totalSize = 0;
  const resourceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      resourcesCount++;
      if (entry.transferSize === 0) {
        cacheHits++;
      }
      totalSize += entry.transferSize;
    });
  });

  resourceObserver.observe({ type: 'resource', buffered: true });

  window.onbeforeunload = () => {
    console.log('Total transfer', (totalSize / 1000).toFixed(2) + 'ko');
    console.log('Hit ratio :', ((cacheHits / resourcesCount) * 100).toFixed(2) + '%');
  };
};

// --- Initialize App ---
initializeApp();