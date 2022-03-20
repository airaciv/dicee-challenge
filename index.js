var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".dice .img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .querySelector(".dice .img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

function winner() {
  if (randomNumber1 > randomNumber2) {
    message = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    message = "Player 2 Wins! 🚩";
  } else {
    message = "🚩 Draw! 🚩";
  }
  return message;
}

document.querySelector("h1").innerHTML = winner();
