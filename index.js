//alert("testing");

var buttonColours = ["red", "green", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("div.btn." + randomChoosenColor).fadeOut().fadeIn();
  playSound(randomChoosenColor);
}
$("div.btn").click(function(evt){
var userChoosenColor = $(evt.target).attr("id");
console.log(userChoosenColor);
userClickedPattern.push(userChoosenColor);
animatePress(evt.target);
playSound(userChoosenColor);
});

function playSound(fileName){
  var randomSound = new Audio("sounds/"+fileName+".mp3");
  randomSound.play();
};

function animatePress(colorName){
  $(colorName).addClass("pressed");
  setTimeout(function(){
    $(colorName).removeClass("pressed");
  },100);
};
