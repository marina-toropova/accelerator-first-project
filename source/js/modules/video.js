const video = document.querySelector('.video');

function setupVideo() {
  const link = video.querySelector('.video-link');
  const button = video.querySelector('.video__button');

  button.addEventListener('click', () => {
    const iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--nojs');
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы.');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=D7Z4DSP2eRraemeB');
  iframe.classList.add('video__iframe');

  return iframe;
}

export { setupVideo };
