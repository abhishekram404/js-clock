const $ = (selector) => {
  return selector[0] === "#"
    ? document.querySelector(selector)
    : document.querySelectorAll(selector).length === 1
    ? document.querySelector(selector)
    : document.querySelectorAll(selector);
};

const hourHand = $(".hour");
const minuteHand = $(".min");
const secondHand = $(".second");
const dHourHand = $(".hour-digital");
const dMinHand = $("min-digital");
const dSecHand = $(".sec-digital");

const getDate = () => {
  var d = new Date();

  return {
    hour: d.getHours(),
    min: d.getMinutes(),
    sec: d.getSeconds(),
  };
};

const rotateHands = () => {
  const { hour, min, sec } = getDate();

  hourHand.style.transform = `rotate(${hour * 30}deg)`;
  dHourHand.innerText = hour;
  minuteHand.style.transform = `rotate(${min * 6}deg)`;
  dMinHand.innerText = min;
  secondHand.style.transform = `rotate(${sec * 6}deg)`;
  dSecHand.innerText = sec;
};

setInterval(rotateHands, 1000);
