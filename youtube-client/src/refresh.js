const drawResults = require('./drawResults');
const drawPagination = require('./drawPagination');
const leftSwipe = require('./leftSwipe');
const rightSwipe = require('./rightSwipe');
const getFromYoutube = require('./getFromYoutube');

const refresh = () => {
  if (drawPagination.pagesNum < drawResults.currentPage) {
    drawResults.currentPage = Math.round(drawPagination.pagesNum / drawResults.currentPage);
  }
  if (drawResults.currentPage === drawPagination.pagesNum) {
    getFromYoutube(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&pageToken=${getFromYoutube.pageToken}&q=${getFromYoutube.query}`)
      .then((response) => {
        getFromYoutube.pageToken = JSON.parse(response).nextPageToken;
        const resultArray = JSON.parse(response).items;
        const idArray = resultArray.map(element => element.id.videoId);
        getFromYoutube(`https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&id=${idArray.join(',')}`)
          .then((response2) => {
            const statArray = JSON.parse(response2).items;
            for (let i = 0; i < resultArray.length; i += 1) {
              resultArray[i].statistics = statArray[i].statistics;
            }
            getFromYoutube.resArr = getFromYoutube.resArr.concat(resultArray);
            drawPagination(...drawResults());
            const allPagePointers = document.querySelectorAll('div.page_pointer');
            allPagePointers.forEach(elem => elem.addEventListener('click', () => {
              if (drawResults.currentPage < +elem.firstElementChild.textContent) {
                drawResults.currentPage = +elem.firstElementChild.textContent;
                drawResults.side = 'toleft';
                refresh();
                leftSwipe();
              } else if (drawResults.currentPage > +elem.firstElementChild.textContent) {
                drawResults.currentPage = +elem.firstElementChild.textContent;
                drawResults.side = 'toright';
                refresh();
                rightSwipe();
              }
            }));
          });
      });
  } else {
    drawPagination(...drawResults());
    const allPagePointers = document.querySelectorAll('div.page_pointer');
    allPagePointers.forEach(elem => elem.addEventListener('click', () => {
      if (drawResults.currentPage < +elem.firstElementChild.textContent) {
        drawResults.currentPage = +elem.firstElementChild.textContent;
        drawResults.side = 'toleft';
        refresh();
        leftSwipe();
      } else if (drawResults.currentPage > +elem.firstElementChild.textContent) {
        drawResults.currentPage = +elem.firstElementChild.textContent;
        drawResults.side = 'toright';
        refresh();
        rightSwipe();
      }
    }));
  }
};

module.exports = refresh;
