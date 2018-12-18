const leftSwipe = () => {
  const turned = document.querySelector('div.results_container');
  turned.style.marginLeft = `-${document.documentElement.clientWidth}px`;
  setTimeout(() => document.querySelector('div.container_for_swipe').removeChild(document.querySelector('div.results_container')), 300);
};

module.exports = leftSwipe;
