let color = "black"

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content loaded");

  document.addEventListener("mousedown", function () {
    isPressed = true;
  });

  document.addEventListener("mouseup", function () {
    isPressed = false;
  });

  const slider = document.getElementById('slider');
  const sliderTxt = document.querySelector('.slidertxt');
  slider.addEventListener('input', function() {
    const sliderValue = slider.value;
    sliderTxt.textContent = `${sliderValue} x ${sliderValue}`;
    boardCreate(sliderValue)
  });
});

function boardCreate(boardSize) {
  let board = document.querySelector(".main");

  board.style.gridTemplateColumns = `repeat(${boardSize},1fr)`;
  board.style.gridTemplateRows = `repeat(${boardSize},1fr)`;

  while (board.firstChild) {
    board.firstChild.remove();
  }

  let numDiv = boardSize * boardSize

  for (let i = 0; i < numDiv; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover",colorDiv)
    board.insertAdjacentElement("beforeend",div)
  }
}

function colorDiv(){
 if (isPressed) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice){
 color = colorChoice
}

function reset(){
  let divs = document.querySelectorAll("div")
  divs.forEach((div) => div.style.backgroundColor = "white") 
}


