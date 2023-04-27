// color buttons

const btnWhite = document
  .getElementById("white")
  .addEventListener("click", function () {
    colorPallet = "white";
  });

const btnBlack = document
  .getElementById("black")
  .addEventListener("click", function () {
    colorPallet = "black";
  });

const btnGreen = document
  .getElementById("green")
  .addEventListener("click", function () {
    colorPallet = "green";
  });

const btnBlue = document
  .getElementById("blue")
  .addEventListener("click", function () {
    colorPallet = "blue";
  });

const btnPurple = document
  .getElementById("purple")
  .addEventListener("click", function () {
    colorPallet = "purple";
  });

const btnYellow = document
  .getElementById("yellow")
  .addEventListener("click", function () {
    colorPallet = "yellow";
  });

const btnOrange = document
  .getElementById("orange")
  .addEventListener("click", function () {
    colorPallet = "orange";
  });

const btnRed = document
  .getElementById("red")
  .addEventListener("click", function () {
    colorPallet = "red";
  });

// grid generation

let container = document.getElementById("container");
let smallDiv = document.createElement("div");
let colorPallet;

function generateGrid(size) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < size; i++) {
    smallDiv = document.createElement("div");
    smallDiv.setAttribute("id", "small-div");
    container.appendChild(smallDiv);

    smallDiv.addEventListener("mouseover", function () {
      console.log(this);

      this.style.backgroundColor = colorPallet;
    });
  }
}

//  function button

const clearBtn = document
  .getElementById("clear")
  .addEventListener("click", function () {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    generateGrid(256);
  });

// generate grid default

generateGrid(256);

//  future generate grid size code

// function calcCells(input) {
//   return input * input;
// }

// function makeContainer(input) {
//   let newAxis = input * 31;
//   document.getElementById("container").style.width = newAxis + "px";
//   document.getElementById("container").style.height = newAxis + "px";
// }

// function start(input) {
//   makeContainer(input);
//   let noOfCells = calcCells(input);
//   generateGrid(noOfCells);
// }
