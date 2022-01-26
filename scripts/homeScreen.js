const title = document.querySelector(".home-title");
const skipBtn = document.querySelector(".skip-btn");
const video = document.getElementById("toendra-video");
const muteBtn = document.querySelector(".mute-btn");
const mBtn = document.getElementById("mBtn");
const introVideo = document.getElementById("intro-video");
const bgAudio = document.querySelector(".background-audio");

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
  introVideo.style.display = "none";
  video.style.display = "none";
  skipBtn.style.display = "none";
  muteBtn.style.display = "none";
  title.style.display = "flex";
  bgAudio.style.display = "flex";
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  if (video.muted === true) {
    mBtn.classList.remove("fa-volume-up");
    mBtn.classList.add("fa-volume-muted");
  } else {
    mBtn.classList.remove("fa-volume-muted");
    mBtn.classList.add("fa-volume-up");
  }
});

// audio
const audio = document.getElementById("play-sound");
const btMute = document.getElementById("bt-mute-btn");
const play = document.querySelector(".mute-audio");

function togglePlay() {
  if (audio.paused || audio.ended) {
    audio.play();
    btMute.classList.remove("fa-volume-muted");
    btMute.classList.add("fa-volume-up");
  } else {
    audio.pause();
    btMute.classList.remove("fa-volume-up");
    btMute.classList.add("fa-volume-muted");
  }
}

play.addEventListener("click", togglePlay);
