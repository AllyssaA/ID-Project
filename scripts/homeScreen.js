const title = document.querySelector(".home-title");
const skipBtn = document.querySelector(".skip-btn");
const video = document.getElementById("toendra-video");
const muteBtn = document.querySelector(".mute-btn");


// video player
video.addEventListener("ended", () => {
  video.style.display = "none";
  skipBtn.style.display = "none";
  muteBtn.style.display = "none";
  title.style.display = "flex";
});

skipBtn.addEventListener("click", () => {
  video.pause();
  video.style.display = "none";
  skipBtn.style.display = "none";
  muteBtn.style.display = "none";
  title.style.display = "flex";
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  console.log("unmted eayy")
})