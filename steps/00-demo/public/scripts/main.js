const loadConversion = async () => {
    const productId = window.location.pathname.split('/')[2];

    const conversionContent = await fetch(`/product/${productId}/conversion`).then(res => res.text())
    const conversionWrapper = document.getElementById('conversion');
    if(!conversionWrapper) return;
    conversionWrapper.innerHTML = conversionContent;
}

loadConversion();