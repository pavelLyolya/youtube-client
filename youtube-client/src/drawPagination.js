const drawPagination = (length, number, current) => {
  if (document.querySelector('div.pagination')) {
    document.body.removeChild(document.querySelector('div.pagination'));
  }

  const pagination = document.createElement('div');
  pagination.className = 'pagination';
  document.body.appendChild(pagination);

  drawPagination.pagesNum = Math.ceil(length / number);
  const pagesHolder = document.createDocumentFragment();
  for (let i = 0; i < drawPagination.pagesNum; i += 1) {
    const pagePointer = document.createElement('div');
    pagePointer.className = 'page_pointer';
    pagePointer.innerHTML = `<span>${i + 1}</span>`;
    if ((i + 1) === current) {
      pagePointer.classList.add('current');
    }
    pagesHolder.appendChild(pagePointer);
  }
  document.querySelector('div.pagination').appendChild(pagesHolder);
};

module.exports = drawPagination;
