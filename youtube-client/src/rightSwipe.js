const rightSwipe = () => {
  const turned = document.querySelector('div.results_container');

  setTimeout(() => {
    turned.style.marginLeft = '0px';
    setTimeout(() => {
      document.querySelector('div.container_for_swipe').removeChild(document.querySelectorAll('div.results_container')[1]);
    }, 300);
  }, 0);
};

module.exports = rightSwipe;
