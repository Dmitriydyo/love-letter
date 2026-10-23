const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openLetter");
const hint = document.getElementById("tapHint");
const replayButton = document.getElementById("replayLetter");
const heartsContainer = document.getElementById("floatingHearts");

function openLetter() {
  envelope.classList.add("open");
  hint.textContent = "Для тебя — от всего сердца ♡";
  replayButton.hidden = false;
  burstHearts();
}

function closeLetter() {
  envelope.classList.remove("open");
  hint.textContent = "Нажми на конверт, чтобы открыть письмо";
  replayButton.hidden = true;
}

openButton.addEventListener("click", () => {
  if (envelope.classList.contains("open")) return;
  openLetter();
});

replayButton.addEventListener("click", () => {
  closeLetter();
  window.setTimeout(openLetter, 250);
});

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heartsContainer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 10500);
}

function burstHearts() {
  for (let i = 0; i < 18; i++) {
    window.setTimeout(makeHeart, i * 90);
  }
}

// A few subtle hearts keep the page feeling alive.
for (let i = 0; i < 7; i++) {
  window.setTimeout(makeHeart, i * 900);
}
window.setInterval(makeHeart, 1800);
