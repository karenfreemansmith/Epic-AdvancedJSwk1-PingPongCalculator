(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.playPong = function(userNumber) {
  var message=[];
  if(userNumber<0) {
    for (i=-1; i>=userNumber; i--) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  } else {
    for (i=1; i<=userNumber; i++) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  }
  return message;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#msg').prepend("Thank you, in the event I actually had a list, your email: " + email + " would have been added to the list. However, this is just a programming exercise and there is no list.");
  });
});

$(document).ready(function() {
  $('#time').text(moment().format('h:mm:ss a'));
});

},{"./../js/backend.js":1}]},{},[2]);
