const videoPreviewContainer = document.querySelector('.gym__video-container');
const videoButton = document.querySelector('.gym__video-button');

/* window.addEventListener('resize', () => {
  resizeVideo();
}); */

function playVideo () {
  const iframe = `<iframe title="Бесплатные интерактивные онлайн-курсы." loading="lazy" width="${videoPreviewContainer.offsetWidth}" height="${videoPreviewContainer.offsetHeight}" src="https://www.youtube.com/embed/9TZXsZItgdw?si=D7Z4DSP2eRraemeB + ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  videoPreviewContainer.innerHTML = iframe;

  iframe.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) { // Восстанавливаем видео после выхода из полноэкранного режима
      playVideo();
    }
  });
}

function resizeVideo () {
  const video = document.querySelector('iframe');
  video.style.width = videoPreviewContainer.offsetWidth;
  video.style.height = videoPreviewContainer.offsetHeight;
}

videoButton.addEventListener('click', () => {
  playVideo();
});

window.addEventListener('resize', resizeVideo);

export { playVideo };
