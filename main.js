let progress = document.querySelectorAll(".progress span");
let section = document.querySelector(".skills");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    progress.forEach(function (e) {
      e.style.cssText = `width:${e.dataset.width}`;
    });
  }
};

saleEnd = new Date("dec 31,2022 23:59:59").getTime();
let counter = setInterval(function () {
  // getting the difference between now and the start of time
  let dateDiff = saleEnd - Date.now();

  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let mins = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // appending results to the page
  document.querySelector(".days").textContent = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").textContent =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").textContent =
    mins < 10 ? `0${mins}` : mins;
  document.querySelector(".seconds").textContent = sec < 10 ? `0${sec}` : sec;
});

let stats = document.querySelector(".stats");
let box = document.querySelectorAll(".stats .box .number");
let start = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= stats.offsetTop) {
    if (start) return;
    box.forEach(function (e) {
      let finish = e.dataset.goal;
      let counter = setInterval(function () {
        e.textContent++;
        if (e.textContent == finish) {
          clearInterval(counter);
        }
      }, 1000 / finish);
    });
    start = true;
  }
});
