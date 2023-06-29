document.addEventListener("DOMContentLoaded", function () {
  console.log("Content loaded");

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
    div.style.backgroundColor = "red"
    board.insertAdjacentElement("beforeend",div)
  }
}


