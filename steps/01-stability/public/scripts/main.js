const loadConversion = async () => {
  const productId = window.location.pathname.split('/')[2];

  const conversionContent = await fetch(`/product/${productId}/conversion`).then((res) => res.text());
  const conversionWrapper = document.getElementById('conversion');
  if (!conversionWrapper) return;
  conversionWrapper.innerHTML = conversionContent;
};

const loadVideo = async () => {
  const productId = window.location.pathname.split('/')[2];

  const descriptionVideo = await fetch(`/product/${productId}/video`).then((res) => res.text());
  const descriptionVideoWrapper = document.getElementById('video');
  if (!descriptionVideoWrapper) return;
  descriptionVideoWrapper.innerHTML = descriptionVideo;
};

const loadHeaderAd = async () => {
  const productId = window.location.pathname.split('/')[2];
  const adContent = await fetch(`/product/${productId}/ad`).then((res) => res.text());
  const adWrapper = document.getElementById('header-ad');
  if (!adWrapper) return;
  adWrapper.innerHTML = adContent;
};

const playVideo = () => {
  document.querySelector('.video-cover').style.display = 'none';
  const videoIframe = document.getElementById('rickroll-video');
  videoIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  videoIframe.style.display = 'block';
};

loadConversion();
loadHeaderAd();
loadVideo();
