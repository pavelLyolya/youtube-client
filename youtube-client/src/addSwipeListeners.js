const drawResults = require('./drawResults');
const drawPagination = require('./drawPagination');
const refresh = require('./refresh');
const leftSwipe = require('./leftSwipe');
const rightSwipe = require('./rightSwipe');

const addSwipeListeners = () => {
  let x = 0;
  window.addEventListener('mousedown', (down) => {
    down.preventDefault();
    x = down.pageX;
  });
  window.addEventListener('touchstart', (down) => {
    x = down.changedTouches[0].pageX;
  });
  window.addEventListener('mouseup', (up) => {
    if (x > up.pageX && Math.abs(x - up.pageX) > 150) {
      if (drawResults.currentPage < drawPagination.pagesNum) {
        drawResults.currentPage += 1;
        drawResults.side = 'toleft';
        refresh();
        leftSwipe();
      }
    } else if (x < up.pageX && Math.abs(x - up.pageX) > 150) {
      if (drawResults.currentPage > 1) {
        drawResults.currentPage -= 1;
        drawResults.side = 'toright';
        refresh();
        rightSwipe();
      }
    }
  });
  window.addEventListener('touchend', (up) => {
    if (x > up.changedTouches[0].pageX) {
      if (drawResults.currentPage < drawPagination.pagesNum) {
        drawResults.currentPage += 1;
        drawResults.side = 'toleft';
        refresh();
        leftSwipe();
      }
    } else if (x < up.changedTouches[0].pageX) {
      if (drawResults.currentPage > 1) {
        drawResults.currentPage -= 1;
        drawResults.side = 'toright';
        refresh();
        rightSwipe();
      }
    }
  });
};

module.exports = addSwipeListeners;
