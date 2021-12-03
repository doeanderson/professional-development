import './style.css'

// DATA
const pricePerPageViews = [
  {
    price: 8,
    pageViews: '10K'
  },
  {
    price: 12,
    pageViews: '50K'
  },
  {
    price: 16,
    pageViews: '100K'
  },
  {
    price: 24,
    pageViews: '500K'
  },
  {
    price: 36,
    pageViews: '1M'
  }
];

(function(){
  const sliderElement = document.getElementById('pricingSlider');
  const priceElement = document.getElementById('pricePerMonth');
  const pageViewsElement = document.getElementById('pageViews');
  const isYearlyPricing = document.getElementById('pricingType');

  // if is checked multiply by 25% for yearly pricing
  const getPricing = (price) => isYearlyPricing.checked ? price - (price * .25) : price

  sliderElement.addEventListener('change', (event) => {
    const pricingInfo = pricePerPageViews[event.target.value]

    //set background color
    const backgroundWidth = ((event.target.value / event.target.max) * 100);
    console.log(backgroundWidth )
    event.target.style.backgroundSize = `${backgroundWidth}% 100%`;

    priceElement.innerText = getPricing(pricingInfo.price);
    pageViewsElement.innerText = pricingInfo.pageViews;
  });

  isYearlyPricing.addEventListener('change', (event) => {
    const pricingInfo = pricePerPageViews[sliderElement.value];
    priceElement.innerText = getPricing(pricingInfo.price);
  })

})();
