

// let's write a program that creates rock paper scissors logic using circle, square, triangle
//global variables

let mouseCoords = [];

//player object with player 
let player = {
  name:"",
  choice: "",
};

player.name = prompt("give me your name...");
alert("Welcome " + player.name+"."+" Would you like to play a game?");

 // welcome to objects....
 var myCircle = {
  x: 150,
  y: 75,
  r: 50,
};
 var mySquare = {
  x: 250,
  y: 75,
  w: 50,
  h: 50
};

// gets mouse position when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log( `
  Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
	mouseCoords =  [e.clientX, e.clientY];
  console.log("circle x is " + myCircle.x);
  
  if (myCircle.x-myCircle.r < mouseCoords[0]&&
      mouseCoords[0] < myCircle.x + myCircle.r&&
      myCircle.y-myCircle.r < mouseCoords[1]&&
      mouseCoords[1] < myCircle.y + myCircle.r
    ){
      player.choice = "rock";
      winner();
    console.log("inside");
  }
  else {
    console.log("outside");
  }
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set choices
let choices =  ["rock", "paper", "scissors"];

function randChoice(x){
    return Math.floor(Math.random()*x);
}

// let cpuChoice = 0;

// sets cpuChoice to some random selection from choices array
function cpuChoice(){
  let choice = choices[randChoice(choices.length)];
  console.log(choice);
  return choice;
}

console.log(choices[cpuChoice]);

function winner(){
  if (player.choice == "rock" && cpuChoice() == "scissors"){
    console.log("you've won");
  }
}

// if (cpuChoice == 0){
//   drawCircle();
// }
// else if (cpuChoice == 1){
//   drawSquare();
// }
// else {
//   drawTriangle();
// }

//init a function to draw a triangle on the canvas
function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }

  function drawSquare(){
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(mySquare.x, 50, 50, 50);
  }

  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function main(){
    drawCircle();
    drawSquare();
  }

main();