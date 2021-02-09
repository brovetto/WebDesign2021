//test code

// let myNum = 6;
// const myName = "Chris";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);

// add a canvas to the page


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// let's write a program that creates rock paper scissors logic using circle, square, triangle

//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


let drawTri = true;
let drawCir = flase;
d = new Date(2/5)
//init a function to draw a triangle on the canvas
function drawTriangle() {  
    if (d.getday()<2){
    }
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
//tells it to draw a circle in the canvas in measurements I want 
  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
  //draws circle on canvas 
  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function main(){
    drawTriangle();
    drawSquare();
    drawCircle();
  }

main();
