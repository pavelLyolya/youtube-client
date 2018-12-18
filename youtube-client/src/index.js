import './css/styles/style.css';

const drawPage = require('./drawPage');
const getFromYoutube = require('./getFromYoutube');
const refresh = require('./refresh');
const drawResults = require('./drawResults');
const addSwipeListeners = require('./addSwipeListeners');

drawPage();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  input.blur();
  input.addEventListener('click', () => {
    input.focus();
    input.value = '';
  });
  input.addEventListener('keypress', () => {
    window.location.reload();
  });
  const searchQuery = input.value;
  getFromYoutube.query = searchQuery;
  getFromYoutube(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&q=${searchQuery}`)
    .then((response) => {
      getFromYoutube.pageToken = JSON.parse(response).nextPageToken;
      getFromYoutube.resArr = JSON.parse(response).items;
      const idArray = getFromYoutube.resArr.map(element => element.id.videoId);
      getFromYoutube(`https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&id=${idArray.join(',')}`)
        .then((response2) => {
          const statArray = JSON.parse(response2).items;
          for (let i = 0; i < getFromYoutube.resArr.length; i += 1) {
            getFromYoutube.resArr[i].statistics = statArray[i].statistics;
          }
          refresh();
          window.addEventListener('resize', () => {
            drawResults.side = 'resize';
            drawResults.currentPage = 1;
            refresh();
          });
          addSwipeListeners();
        });
    });
});
