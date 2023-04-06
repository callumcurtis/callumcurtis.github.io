import { height as navHeight } from 'src/config/nav';


const defaults = {
  viewOffset: { top: parseInt(navHeight) + 50, bottom: 50},
  distance: '30px',
  duration: 500,
  easing: 'cubic-bezier(.4,-0.01,.3,.37)',
  origin: "left",
  reset: true,
};

export { defaults };
