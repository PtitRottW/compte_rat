const countdownEl = document.getElementById('countdown');
let timeLeft = 10;

const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    countdownEl.textContent = timeLeft;
  } else {
    clearInterval(countdown);
    countdownEl.textContent = "Fin!";
  }
}, 1000);
