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
