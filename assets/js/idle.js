let idleTimer;

function resetTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    window.location.href = "screensaver.html";
  }, 2000000); // 20000 ms = 10 seconds
}

// Reset timer on common activity
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onkeydown = resetTimer;
window.ontouchstart = resetTimer; // for mobile devices