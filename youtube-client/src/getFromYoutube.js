const getFromYoutube = url => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      const error = new Error(xhr.statusText);
      error.code = xhr.status;
      reject(error);
    }
  };

  xhr.onerror = () => {
    reject(new Error('Network Error'));
  };

  xhr.send();
});

module.exports = getFromYoutube;
