//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//initializing global variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let initialized = false;
// variables used to alter and intitalize the canvas we are making 

// setup mouse position variables
let mouseX = 0;
let mouseY = 0;
//object
let mouseClickX = 0;
let mouseClickY = 0;
//sets variable to be 0 and they stay until we click 
//assigns values to classes and properties 






//assign 
function init() {
  // create a new div element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  //chuck changes and access elements in css 
  // and give it some content
  canvas = document.createElement('canvas');
  // add the text node to the newly created div
  canvasDiv.appendChild(canvas);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = 500;
  canvas.height = 500;
  document.getElementById("chuck").style.width = canvas.width +'px';
  document.getElementById("chuck").style.height = canvas.height +'px';
  //pulling info CSS 
  ctx = canvas.getContext('2d');
  initialized = true;
}

// create an object to hold attributes in order to draw a shape on canvas
// more comments
//an object we know by colons and h and w 
let mySquare = {
  w: 50,
  h: 50,
  x: 150,
  y: 200,
  // comments not here...
  vx: 3,
  vy: 0,
  //vx and vy alters how fast they appear on the screen 
  color: 'black'
  // color alters the color 
};
//mouse position using call back function ??
// gets mouse position when clicked
addEventListener('mousemove', e => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    //we are gonna use this later 
});

// gets mouse position when clicked
addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseClickX = e.clientX;
  mouseClickY = e.clientY;
  return [mouseClickX, mouseClickY];
}

// updates all elements on canvas
function update() {
  mySquare.x += mySquare.vx;
  if (mySquare.x + mySquare.w > canvas.width || mySquare.x < 0) {
    mySquare.vx *= -1;
  }
}

// draws text on canvas
function drawText(color, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// draws a square, circle, or rectangle
function drawSquare() {
  ctx.fillStyle = mySquare.color;
  ctx.fillRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
  ctx.strokeRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
}

// function drawCircle() {
//   ctx.fillStyle = myCircle.color;
//   ctx.beginPath();
//   ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
//   ctx.stroke();
//   ctx.fill();
// }

// draws all the stuff on the canvas that you want to draw
function draw() {
  // clears the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 400, 0);
  drawText('black', "24px Helvetica", "left", "top", "mousepos: " + mouseX + " " + mouseY, 0, 0);
  drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);
  drawSquare();
}

// set variables necessary for game loop
let delta;
let fps;
let gameDelta;
let then = performance.now();

//main game loop
function main() {
    //these are the vAariables declared locally inside of function 
  let now = performance.now();
  //tells the game to run 
  delta = now - then;
  gameDelta = Math.min(delta, 0.25);
  //slows down FPS 
  fps = (Math.floor(1000 / delta));
  if (initialized) {
    update();
    draw();
  }
  then = now;
  requestAnimationFrame(main);
}