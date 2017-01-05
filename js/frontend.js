var Calculator = require('./../js/backend.js').calculatorModule;
const sndMiss = new Audio("img/miss.mp3");
const sndSlam1 = new Audio("img/slam1.mp3");
const sndSlam2 = new Audio("img/slam2.mp3");
const sndVolley = new Audio("img/volley.mp3");

var output;
var i;
const setTime = 500;
const animationTime = "0.5s"

function showNext(item) {
  if(item===undefined) {
    $("#pingpong").fadeIn(setTime);
    clearSounds();
    return;
  }
  acorn.style.animation= "";
  acorn.style.webkitAnimation="";
  if(item==="ping") {
    window.setTimeout(playPing(), setTime);
  } else if(item==="pong") {
    window.setTimeout(playPong(), setTime);
  } else if(item==="ping-pong") {
    window.setTimeout(playVolley(), setTime);
  } else {
    window.setTimeout(playMiss(), setTime);
    $("#pingpong").append("<p class='"+item+"'>" + item + "</p>").fadeToggle(setTime);
  }
  i++;
  window.setTimeout(showNext, setTime, output[i]);
}

function clearSounds() {
  sndMiss.pause();
  sndSlam1.pause();
  sndSlam2.pause();
  sndVolley.pause();
}

function playMiss() {
  sndMiss.currentTime = 0;
  sndMiss.play();
}
function playPing() {
  $("#pingpong").append("<p class='ping'>ping</p>").fadeToggle(setTime);
  acorn.style.animation= "ping 1s linear";
  acorn.style.webkitAnimation="ping " + animationTime + " linear";
  sndSlam1.currentTime = 0;
  sndSlam1.play();
}
function playPong() {
  $("#pingpong").append("<p class='pong'>pong</p>").fadeToggle(setTime);
  acorn.style.animation= "pong 1s linear";
  acorn.style.webkitAnimation="pong " + animationTime + " linear";
  sndSlam2.currentTime = 0;
  sndSlam2.play();
}
function playVolley() {
  $("#pingpong").append("<p class='pingpong'>ping-pong</p>").fadeToggle(setTime);
  acorn.style.animation= "volley 1s linear";
  acorn.style.webkitAnimation="volley " + animationTime + " linear";
  sndVolley.currentTime = 0;
  sndVolley.play();
}

$(document).ready(function() {
  $("form#play").submit(function(event) {
    event.preventDefault();
    i=0;
    $("#pingpong").empty();

    var simpleCalculator = new Calculator("hot pink");
    var uNum = parseInt($("#userNumber").val());
    output = simpleCalculator.playPong(uNum);

    showNext(output[i]);
  });
});
