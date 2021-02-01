//test code 

// let myNum =6;
// const mName = "Brian";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);

// add a canvas to the page  


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//ctx.fillStyle = 'green';
//ctx.fillRect(10, 10, 150, 100);

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas .getContext) {
        var ctx = canvas .getContext('2d');
        ctx .beginPath();
        ctx .moveTo(75,50);
        ctx .lineto(100,75);
        ctx .fill();
    }
}