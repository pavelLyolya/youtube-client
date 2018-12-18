const fillSection = (resArr) => {
  const sectionSet = resArr.map((element) => {
    const section = document.createElement('section');

    const img = document.createElement('img');
    img.setAttribute('src', element.snippet.thumbnails.medium.url);
    img.setAttribute('alt', 'thumbnail');
    section.appendChild(img);

    const title = document.createElement('a');
    title.setAttribute('href', `https://www.youtube.com/watch?v=${element.id.videoId}`);
    title.setAttribute('target', '_blank');
    title.textContent = element.snippet.title;
    title.className = 'title';
    section.appendChild(title);

    const viewCount = document.createElement('span');
    viewCount.textContent = `${element.statistics.viewCount} views`;
    viewCount.className = 'view_count';
    section.appendChild(viewCount);

    const containerViewTitle = document.createElement('div');

    const channelTitle = document.createElement('a');
    channelTitle.setAttribute('href', `https://www.youtube.com/channel/${element.snippet.channelId}`);
    channelTitle.setAttribute('target', '_blank');
    channelTitle.textContent = element.snippet.channelTitle;
    channelTitle.className = 'channel_title';
    containerViewTitle.appendChild(channelTitle);

    const date = document.createElement('span');
    date.textContent = `Published on ${(new Date(element.snippet.publishedAt)).toDateString()}`;
    date.className = 'date';
    containerViewTitle.appendChild(date);

    section.appendChild(containerViewTitle);

    const description = document.createElement('p');
    description.textContent = element.snippet.description;
    section.appendChild(description);

    return section;
  });
  return sectionSet;
};

module.exports = fillSection;
