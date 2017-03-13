(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.colorSelect = [];
  this.counter = 0;
}

Simon.prototype.colorDisplay = function(){
  var result = Math.floor((Math.random() * 4) + 1);
  if (result === 1) {
    this.colorSelect.push("red");
  }
  else if (result === 2) {
    this.colorSelect.push("blue");
  }
  else if (result === 3) {
    this.colorSelect.push("green");
  }
  else  {
    this.colorSelect.push("yellow");
  }
  return result;
};


Simon.prototype.checker = function(userSelect){
  if (this.colorSelect[counter] === userSelect) {
    this.counter += 1;
    return true;
  } else {
      return false;
    }
  };
exports.simonGo = Simon;

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').simonGo;

$(document).ready(function() {

  $('#start').submit(function() {
    event.preventDefault();
    // colorSelect.forEach(function(color) {
      $('#red').show();
      // colorDisplay();
    // });
  });

  $('.red').submit(function(){
    event.preventDefault();
    for (var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($(".red").val());
      }
    }
  });

  $('#blue').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#blue").val());
      }
    }
  });

  $('#green').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#green").val());
      }
    }
  });

  $('#yellow').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#yellow").val());
      }
    }
  });

});

},{"./../js/simon.js":1}]},{},[2]);
