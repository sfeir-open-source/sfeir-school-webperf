// --- Initialization Functions ---
const initializeApp = () => {
  // Load async contents
  loadConversionContent();
  loadHeaderAdContent();

  // Init event listeners & interactions
  initProductSize();
  initProducThumbnails();
  initMainImage();
  initImageZoom();
};

// --- Product Size Selection ---
const handleSizeChange = () => {
  const addToCartButton = document.getElementById('btn-add-to-cart');
  if (addToCartButton) {
    addToCartButton.disabled = false;
  }
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
};

// --- Header Advertisement ---
const loadHeaderAdContent = async () => {
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

// --- Initialize App ---
initializeApp();
