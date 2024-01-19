let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("pause-outline")) {
    song.pause();
    ctrlIcon.classList.remove("pause-outline");
    ctrlIcon.classList.add("play-outline");
  } else {
    song.play();
    ctrlIcon.classList.add("pause-outline");
    ctrlIcon.classList.remove("play-outline");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("pause-outline");
  ctrlIcon.classList.remove("play-outline");
};
