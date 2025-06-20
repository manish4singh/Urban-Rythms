const totalSeconds =
  10 * 24 * 60 * 60 + // 10 days
  24 * 60 * 60 + // 24 hours
  60 * 60 + // 60 minutes
  35; // 35 seconds

const STORAGE_KEY = "countdownStartTime";

// Get or set the countdown start time
let startTime = localStorage.getItem(STORAGE_KEY);
if (!startTime) {
  startTime = Date.now();
  localStorage.setItem(STORAGE_KEY, startTime);
}

function updateCountdown() {
  const now = Date.now();
  const elapsed = Math.floor((now - startTime) / 1000);
  const remaining = totalSeconds - elapsed;

  if (remaining <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(remaining / (60 * 60 * 24));
  const hours = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((remaining % (60 * 60)) / 60);
  const seconds = remaining % 60;

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Start ticking
updateCountdown(); // initial call
const timer = setInterval(updateCountdown, 1000);

document.addEventListener("keydown", function (e) {
  // Example: Ctrl + R to reset countdown
  if (e.ctrlKey && e.key === "r") {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});
