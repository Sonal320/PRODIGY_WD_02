let [hours, minutes, seconds] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let interval = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!isRunning) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stop() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let lapTime = `${h}:${m}:${s}`;
    
    const li = document.createElement("li");
    li.textContent = lapTime;
    document.getElementById("lapList").appendChild(li);
  }
}
