import './style.css';

const directions = {
  top: '🔼',
  bottom: '🔽'
};

const direction = document.querySelector('.direction');
const elevator = document.querySelector('.elevator');
let lastScroll = elevator.scrollTop;

elevator.addEventListener(
  'scroll',
  function() {
    var st = elevator.scrollTop;
    if (st > lastScroll) {
      direction.innerHTML = `Kierunek: ${directions.bottom}`;
    } else {
      direction.innerHTML = `Kierunek: ${directions.top}`;
    }
    lastScroll = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
