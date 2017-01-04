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
