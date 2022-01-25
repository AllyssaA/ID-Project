const title = document.querySelector(".home-title");
const skipBtn = document.querySelector(".skip-btn");
const video = document.getElementById("toendra-video");
const muteBtn = document.querySelector(".mute-btn");
const mBtn = document.getElementById('mBtn');
const introVideo = document.getElementById('intro-video');

// video player
video.addEventListener("ended", () => {
  video.style.display = "none";
  skipBtn.style.display = "none";
  muteBtn.style.display = "none";
  title.style.display = "flex";
});

skipBtn.addEventListener("click", () => {
  introVideo.style.opacity = 0;
  // introVideo.style.visibility = 'hidden'
  video.pause();
  introVideo.style.display = 'none';
  video.style.display = "none";
  skipBtn.style.display = "none";
  muteBtn.style.display = "none";
  title.style.display = "flex";
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  console.log(video.muted)
  console.log(mBtn)
  if(video.muted === true) {
    mBtn.classList.remove('fa-volume-up')
    mBtn.classList.add('fa-volume-muted')
  } else {
    mBtn.classList.remove('fa-volume-muted')
    mBtn.classList.add('fa-volume-up')
  }
})