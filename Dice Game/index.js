function RollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImg1 = "./images/dice-" + randomNumber1 + ".svg";
  var randomImg2 = "./images/dice-" + randomNumber2 + ".svg";

  document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
  document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

  var resMsg = "";

  if (randomNumber1 > randomNumber2) {
    resMsg = "User 1 is won the game";
  } else if (randomNumber1 < randomNumber2) {
    resMsg = "User 2 is won the game";
  } else {
    resMsg = "Match is Drawn";
  }

  document.querySelector(".res").innerHTML = resMsg;
}
