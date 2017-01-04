var Calculator = require('./../js/backend.js').calculatorModule;
const sndMiss = new Audio("img/miss.mp3");
const sndSlam1 = new Audio("img/slam1.mp3");
const sndSlam2 = new Audio("img/slam2.mp3");
const sndVolley = new Audio("img/volley.mp3");

function playMiss() {
  sndMiss.currentTime = 0;
  sndMiss.play();
}
function playPing() {
  acorn.style.animation= "ping 1s linear";
  acorn.style.webkitAnimation="ping 1s linear";
  sndSlam1.currentTime = 0;
  sndSlam1.play();
}
function playPong() {
  acorn.style.animation= "pong 1s linear";
  acorn.style.webkitAnimation="pong 1s linear";
  sndSlam2.currentTime = 0;
  sndSlam2.play();
}
function playVolley() {
  acorn.style.animation= "volley 1s linear";
  acorn.style.webkitAnimation="volley 1s linear";
  sndVolley.currentTime = 0;
  sndVolley.play();
}

$(document).ready(function() {
  $("form#play").submit(function(event) {
    var soundTimer=1000;
    event.preventDefault();
    $("#pingpong").empty();
    $("#pingpong").hide();

    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.playPong(parseInt($("#userNumber").val()));
    output.forEach(item => {
      acorn.style.animation= "";
      acorn.style.webkitAnimation="";
      if(item==="ping") {
        setTimeout(playPing, soundTimer);
      } else if(item==="pong") {
        setTimeout(playPong, soundTimer);
      } else if(item==="ping-pong") {
        setTimeout(playVolley, soundTimer);
      } else {
        setTimeout(playMiss, soundTimer);
      }
      //soundTimer+=500;
      $("#pingpong").append("<p class='show'>" + item + "</p>").fadeIn(9999);
    });
  });
});
