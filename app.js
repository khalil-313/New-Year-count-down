let dayElement = document.querySelector("#day");
let hourElement = document.querySelector("#hour");
let minutesElement = document.querySelector("#minutes");
let secundsElement = document.querySelector("#seconds");

let newYearTime = new Date("jan 1, 2025 00:00:00").getTime();

function updateCountdown() {
  let now = new Date().getTime();
  let gap = newYearTime - now;

  // console.log(now , newYearTime);

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  const d = Math.floor(gap / day); 
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute)
  const s = Math.floor((gap % minute) / second)

  dayElement.innerHTML = d;
  hourElement.innerHTML = h;
  minutesElement.innerHTML = m;
  secundsElement.innerHTML = s;

  setTimeout(updateCountdown, 1000)
}
updateCountdown();
