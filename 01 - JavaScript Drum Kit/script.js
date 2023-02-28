function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // 연속으로 눌렀을 떄 처음부터 재생되게
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  // 화살표 함수로 쓰면 this가 window가 된다.

  if (e.propertyName !== "transform") return; // skip it if it's not a transform

  console.log(this); // 누른 key의 div 요소
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
