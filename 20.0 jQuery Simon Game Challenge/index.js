var sequence = [];
var userSequence = [];
var level = 0;
var isUserSequenceCorrect = true;
var colors = ["green", "red", "yellow", "blue"];

$(document).keypress(function () {
  if (level === 0) {
    nextSequence(sequence, colors);
  } else {
    startOver();
    nextSequence(sequence, colors);
  }
});

$("div .btn").click(function () {
  var id = $(this).attr("id");

  switch (id) {
    case "green":
      playSound("green");
      buttonAnimation("green");
      userSequence.push("green");
      break;
    case "red":
      playSound("red");
      buttonAnimation("red");
      userSequence.push("red");
      break;
    case "yellow":
      playSound("yellow");
      buttonAnimation("yellow");
      userSequence.push("yellow");
      break;
    case "blue":
      playSound("blue");
      buttonAnimation("blue");
      userSequence.push("blue");
      break;
  }

  isUserSequenceCorrect = checkAnswer(sequence, userSequence);

  if (!isUserSequenceCorrect) {
    new Audio("sounds/wrong.mp3").play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
  }

  if (userSequence.length === sequence.length && isUserSequenceCorrect) {
    userSequence = [];
    setTimeout(() => {
      nextSequence(sequence, colors, level);
    }, 1000);
  }
});

function buttonAnimation(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(color) {
  switch (color) {
    case "green":
      new Audio("sounds/green.mp3").play();
      break;
    case "red":
      new Audio("sounds/red.mp3").play();
      break;
    case "yellow":
      new Audio("sounds/yellow.mp3").play();
      break;
    case "blue":
      new Audio("sounds/blue.mp3").play();
      break;
  }
}

function nextSequence(sequence, colors) {
  var randomColor = colors[Math.floor(Math.random() * 4)];
  buttonAnimation(randomColor);
  playSound(randomColor);
  sequence.push(randomColor);
  level++;
  $("h1").text("Level " + level);
}

function startOver() {
  sequence = [];
  userSequence = [];
  level = 0;
  isUserSequenceCorrect = true;
  $("h1").text("Press A Key to Start");
}

function checkAnswer(sequence, userSequence) {
  for (var i = 0; i < userSequence.length; i++) {
    if (sequence[i] !== userSequence[i]) {
      return false;
    }
  }
  return true;
}
