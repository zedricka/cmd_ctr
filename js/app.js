// Change background color of one box
var changeOneBox = document.getElementById('box');

// Change background color of multiple boxes using classes
var changeColor = document.getElementsByClassName("box_color");

function red() {

  //Change one box using id
  // changeOneBox.style.backgroundColor  = "red";

  //Change multiple boxes using classList.add
  //Becuase getElementsByClassName returns a collection, a loop is used to choose all three boxes else it returns undefined
  for(var i = 0; i <= 2; i++){
    changeColor[i].classList.add("red");
  }

  console.log('i am red');
}


var mouseColor = document.getElementsByClassName("box_enter");

function blue() {
  for(var i = 0; i <= 2; i++){
    mouseColor[i].classList.add("blue");
  }
  console.log('i am blue');
}