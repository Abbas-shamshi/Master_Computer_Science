
window.addEventListener('resize', updateWindowSize);
function updateWindowSize() {
    location.reload();

}
var a;
var b;

const canvas = document.getElementById('something');
console.log(canvas);
canvas.height = window.innerHeight - 16;
canvas.width = window.innerWidth - 15;
a = window.innerHeight - 16;
b = window.innerWidth - 15;
console.log(a + " height");
console.log(b + " width");
const ctx = canvas.getContext('2d');
ctx.moveTo(0, 0);
var incr = a / 25;
ctx.lineWidth = incr;
var colors = ['#f2a533', '#a2c0f1', '#d9a3b1', '#ee7c36', '#5fc6de', '#e8a1b5', '#f2a533', '#f0b7a8', '#e9a4ae', '#82c62f', '#edb5a4', '#f1b132', '#86c5e4', '#e9af9d', '#f29b33', '#e399a7', '#e27f5d', '#58b69a', '#c58794', '#e36531', '#8fa8db', '#df7a54', '#dd949d', '#e9a731', '#e1a48d'];
for (var i = 0; i < colors.length; i = i + 1) {
    // console.log(colors[i]);
    drawLine(0, incr * i + 10, b, incr * i + 10, colors[i]);

}
function drawLine(a, b, c, d, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

let isClicked = false;

document.addEventListener('mousedown', e => {

    isClicked = true;
});

document.addEventListener('mousemove', e => {
    if (isClicked === true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var mousePosX = e.offsetX;
        var mousePosY = e.offsetY;
        for (var i = 0; i < this.colors.length; i = i + 1) {
            // console.log(colors[i]);
            drawMovingLine(0, incr * i + 10, mousePosX,mousePosY, incr * i + 10, this.colors[i]);

        }
    }
});
window.addEventListener('mouseup', e => {
    if (isClicked === true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < colors.length; i = i + 1) {
            // console.log(colors[i]);
            drawLine(0, incr * i + 10, b, incr * i + 10, colors[i]);
        
        }
        isClicked = false;
    }
});


function drawMovingLine(startX, startY,mousePosX, curvPointY, endY, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    console.log("Height of Screen" + this.a / 2);
    ctx.bezierCurveTo(mousePosX, curvPointY, mousePosX, curvPointY, this.b, endY);

    // ctx.lineTo(c, d);
    ctx.stroke();
}