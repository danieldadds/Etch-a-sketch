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

let container = document.getElementById("container");
let smallDiv = document.createElement("div");
let colorPallet;

for (let i = 0; i < 256; i++) {
  smallDiv = document.createElement("div");
  smallDiv.setAttribute("id", "small-div");
  container.appendChild(smallDiv);

  smallDiv.addEventListener("mouseover", function () {
    console.log(this);

    this.style.backgroundColor = colorPallet;
  });
}
