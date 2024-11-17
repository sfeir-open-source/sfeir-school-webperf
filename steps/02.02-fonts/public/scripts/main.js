const loadConversion = async () => {
  const productId = window.location.pathname.split('/')[2];

  const conversionContent = await fetch(`/partials/product/${productId}/conversion`).then((res) => res.text());
  const conversionWrapper = document.getElementById('conversion');
  if (!conversionWrapper) return;
  conversionWrapper.innerHTML = conversionContent;
};

const loadHeaderAd = async () => {
  const adContent = await fetch(`/partials/banner-ad`).then((res) => res.text());
  const adWrapper = document.getElementById('header-ad');
  if (!adWrapper) return;
  adWrapper.innerHTML = adContent;
};

const playVideo = () => {
  document.querySelector('.video-cover').style.display = 'none';
  const videoIframe = document.getElementById('rickroll-video');
  if (!videoIframe) return;
  videoIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  videoIframe.style.display = 'block';
};

const initProductImage = () => {
  const thumbnails = document.querySelectorAll('button.product-thumbnail');
  const mainImage = document.getElementById('main-image');
  [...thumbnails].forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      thumbnails.forEach((thumb) => {
        thumb.ariaCurrent = 'false';
        thumb.classList.remove('product-thumbnail__current');
      });
      thumbnail.ariaCurrent = 'true';
      thumbnail.classList.add('product-thumbnail__current');

      const imageElement = thumbnail.getElementsByTagName('img')[0];
      const imageUrl = imageElement.src.split('?')[0];
      const imageAlt = imageElement.alt;
      mainImage.src = imageUrl;
      mainImage.alt = imageAlt;
    });
  });
};

loadConversion();
loadHeaderAd();

initProductImage();
