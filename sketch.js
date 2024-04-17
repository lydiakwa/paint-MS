const canvas = document.querySelector('#canvas');

function setup() {
  createCanvas(600, 800);
}

function draw() {
  if (mouseIsPressed) {
    // ellipse(mouseX, mouseY, 80, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
