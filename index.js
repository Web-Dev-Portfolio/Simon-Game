//alert("testing");

var buttonColours = ["red", "green", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var levelNumber = 0;

//starting the game
$(document).keypress(function() {
  console.log("key pressed");
  if (!started) {
    nextSequence();
    started = true;
  }
});

// user click
$("div.btn").click(function(evt) {
  var userChoosenColor = $(evt.target).attr("id");
  //var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);

  animatePress(evt.target);
  playSound(userChoosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

//sequence mechanic
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("div.btn." + randomChoosenColor).fadeOut().fadeIn();
  playSound(randomChoosenColor);

  levelNumber++;
  $("h1#level-title").text("Level " + levelNumber);
  userClickedPattern = [];
}

function playSound(fileName) {
  var randomSound = new Audio("sounds/" + fileName + ".mp3");
  randomSound.play();
}

function animatePress(colorName) {
  $(colorName).addClass("pressed");
  setTimeout(function() {
    $(colorName).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("succes");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    $("h1#level-title").text("Game Over, press any key to restart");

    startOver();
  }
}
function startOver(){
  levelNumber = 0;
  started = false;
  gamePattern = [];
}
