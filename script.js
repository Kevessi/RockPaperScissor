function computerPLay() {
  let randNum = Math.floor(Math.random() * (4 - 1) + 1);
  if (randNum == 1) {
    console.log("Rock");
  } else if (randNum == 2) {
    console.log("Scissor");
  } else if (randNum == 3) {
    console.log("Paper");
  }
}

computerPLay();
