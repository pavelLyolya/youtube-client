const drawPage = () => {
  const form = document.createElement('form');
  form.setAttribute('name', 'form');
  document.body.appendChild(form);

  const searchRow = document.createElement('input');
  searchRow.setAttribute('type', 'text');
  searchRow.setAttribute('name', 'searchRow');
  searchRow.setAttribute('autofocus', '');
  document.body.querySelector('form').appendChild(searchRow);

  const containerForSwipe = document.createElement('div');
  containerForSwipe.className = 'container_for_swipe';
  document.body.appendChild(containerForSwipe);
};

module.exports = drawPage;
