//alert("testing");

var buttonColours = ["red", "green", "yellow", "blue"];
var gamePattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("div.btn." + randomChoosenColor).fadeOut().fadeIn();
}
