import { floor } from "../data/data";
export const handleClickBtn = (el) => {
  let transformY = -el * 20 + 20;
  let time = 0;
  floor[0].transform = `translate(0,` + transformY + `vh)`;
  if (floor[1].floor <= el) {
    time = (el - floor[1].floor) * 1000;
    floor[1].pointer = `top`;
    floor[1].activeBtn = el;
    floor[0].transition = el - floor[1].floor + `s`;
    floor[1].floor = el;
    setTimeout(() => {
      floor[1].pointer = "pause";
      setTimeout(() => {
        floor[1].pointer = "waiting";
      }, 3000);
    }, time);
  } else {
    time = (floor[1].floor - el) * 1000;
    floor[1].pointer = `bottom`;
    floor[1].activeBtn = el;
    floor[0].transition = floor[1].floor - el + `s`;
    floor[1].floor = el;
    setTimeout(() => {
      floor[1].pointer = "pause";
      setTimeout(() => {
        floor[1].pointer = "waiting";
      }, 3000);
    }, time);
  }
};
