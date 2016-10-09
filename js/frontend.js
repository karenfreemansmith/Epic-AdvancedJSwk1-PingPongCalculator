var Calculator = require('./../js/backend.js').calculatorModule;

function playMiss() {
  new Audio("img/miss.mp3").play();
}
function playPing() {
  new Audio("img/slam1.mp3").play();
}
function playPong() {
  new Audio("img/slam2.mp3").play();
}
function playVolley() {
  new Audio("img/volley.mp3").play();
}

$(document).ready(function() {
  $("form#play").submit(function(event) {
    var soundTimer=0;
    event.preventDefault();
    $("#pingpong").empty();
    $("#pingpong").hide();
    acorn.style.animation= "volley 3s linear";
    acorn.style.webkitAnimation="volley 3s linear";
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.playPong(parseInt($("#userNumber").val()));
    output.forEach(function(item) {
      if(item==="ping") {
        setTimeout(playPing, soundTimer);
      } else if(item==="pong") {
        setTimeout(playPong, soundTimer);
      } else if(item==="ping-pong") {
        setTimeout(playVolley, soundTimer);
      } else {
        setTimeout(playMiss, soundTimer);
      }
      soundTimer+=500;
      $("#pingpong").append("<p class='"+item+"'>" + item + "</p>").fadeIn(9999);
    });
  });
});
