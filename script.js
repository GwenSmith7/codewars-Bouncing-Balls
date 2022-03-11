'use strict';

function bouncingBall(h, bounce, window, result) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let counter = 0;
    let sum = h * bounce;
    while (sum > window) {
      sum = sum * bounce;
      counter++;
    }
    let bounceNum = counter * 2 + 1;
    console.log(bounceNum);
    return bounceNum;
  } else {
    console.log(-1);
    return -1;
  }
}

// This was hard and needs to be refactored
