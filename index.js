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
    let currentScroll = elevator.scrollTop;

    if (currentScroll > lastScroll) {
      direction.innerHTML = `Kierunek: ${directions.bottom}`;
    } else {
      direction.innerHTML = `Kierunek: ${directions.top}`;
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    wichFloor(currentScroll);
  },
  false
);

const wichFloor = currentScroll => {
  const floors = document.querySelectorAll('.floor');

  const div = document.createElement('div');
  direction.appendChild(div);

  let x = 0;

  floors.forEach(floor => {
    if (currentScroll >= x) {
      div.innerHTML = floor.innerHTML;
      x += 146;
    }
  });
};
