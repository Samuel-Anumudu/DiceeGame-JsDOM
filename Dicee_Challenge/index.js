// select h1 element
var h1 = document.querySelector("h1");

// make an array of all images to be shown randomly
var images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// make a first random variable for the img1 class
var firstRandom = Math.trunc(Math.random() * images.length);
var img1 = document
  .querySelector(".img1")
  .setAttribute("src", images[firstRandom]);

// make another random variable for the img2 class
var secondRandom = Math.trunc(Math.random() * images.length);
var img2 = document
  .querySelector(".img2")
  .setAttribute("src", images[secondRandom]);

// use a for loop to set a condition that shows who wins, loses or if a tie.
if (firstRandom > secondRandom) {
  h1.innerHTML = "🚩Player 1 wins!";
} else if (secondRandom > firstRandom) {
  h1.innerHTML = "🚩Player 2 wins!";
} else if (firstRandom === secondRandom) {
  h1.innerHTML = "Draw!";
}
