
window.addEventListener('resize', updateWindowSize);
function updateWindowSize() {
    drawCanvas();

}
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var a;
var b;
var j=5;

var colors = ['#8fa8db', '#df7a54', '#dd949d', '#e9a731', '#e1a48d','#f2a533', '#a2c0f1', '#d9a3b1', '#ee7c36', '#5fc6de', '#e8a1b5', '#f2a533', '#f0b7a8', '#e9a4ae', '#82c62f', '#edb5a4', '#f1b132', '#86c5e4', '#e9af9d', '#f29b33', '#e399a7', '#e27f5d', '#58b69a', '#c58794', '#e36531', '#8fa8db', '#df7a54', '#dd949d', '#e9a731', '#e1a48d'];

function drawCanvas(j) {

    console.log(canvas);
    canvas.height = window.innerHeight - 16;
    canvas.width = window.innerWidth - 15;
    a = window.innerHeight - 16;
    b = window.innerWidth - 15;
    console.log(a + " height");
    console.log(b + " width");
    ctx.moveTo(0, 0);
    var incr = a / 25;
    ctx.lineWidth = incr;
    j=Math.floor(j);
    for (var i = 5; i < 30; i = i + 1) {
        // console.log(colors[i]);
        if (!j) {
            drawLine(0, incr * (i-5) + 10, b, incr * (i-5) + 10, i);

        } else {
            drawLine(0, incr * (i-5) + 10, b, incr * (i-5) + 10, i + j);

        }

    }

}


function drawLine(a, b, c, d, color) {
    ctx.beginPath();
    // if (i > 24) {

    // }
    ctx.strokeStyle = colors[color];
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    console.log(`This is x: ${x}`);
    console.log(`This is y: ${y}`);
    console.log(`This is z: ${z}`);

    console.log(j + "This is pre if")
    if(j>10){
        j=0;
        
    }else if(j<0){
        j=5
    }
    if (y > 1) {
        j=j+0.04;
    }
    if (y < 1) {
        j=j-0.04;

    }
    console.log(j + " this is j");

    drawCanvas(j);

    // Do something awesome.
}

drawCanvas();

window.addEventListener("devicemotion", handleMotionEvent, true);