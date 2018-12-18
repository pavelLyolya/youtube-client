const fillSection = require('./fillSection');
const getFromYoutube = require('./getFromYoutube');

const drawResults = () => {
  const windowWidth = document.documentElement.clientWidth;
  let numVideosPerPage = Math.round((0.75 * windowWidth) / drawResults.sectionWidth);
  if (numVideosPerPage === 0) {
    numVideosPerPage += 1;
  }

  const resultsContainer = document.createElement('div');
  resultsContainer.className = 'results_container';

  const results = document.createDocumentFragment();
  const sectionSet = fillSection(getFromYoutube.resArr);

  let endInd = drawResults.currentPage * numVideosPerPage;
  if (endInd > sectionSet.length) {
    endInd = sectionSet.length;
  }
  const startInd = (drawResults.currentPage - 1) * numVideosPerPage;
  for (let i = startInd; i < endInd; i += 1) {
    results.appendChild(sectionSet[i]);
  }

  resultsContainer.appendChild(results);
  if (drawResults.side === 'resize') {
    document.querySelector('div.container_for_swipe').removeChild(document.querySelector('div.results_container'));
    document.querySelector('div.container_for_swipe').appendChild(resultsContainer);
  }
  if (drawResults.side === 'toright') {
    resultsContainer.style.marginLeft = `-${document.documentElement.clientWidth}px`;
    document.querySelector('div.container_for_swipe').insertBefore(resultsContainer, document.querySelector('div.results_container'));
  } else {
    document.querySelector('div.container_for_swipe').appendChild(resultsContainer);
  }
  return [getFromYoutube.resArr.length, numVideosPerPage, drawResults.currentPage];
};

drawResults.sectionWidth = 400;
drawResults.currentPage = 1;
drawResults.side = 'toleft';

module.exports = drawResults;
