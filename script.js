const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");



let size = 5;
let isPressed = false;
let color = "black";
let x;
let y;

colorEl.addEventListener('change',e => {
    color = e.target.value
})
function updateSizeOnScreen(){
sizeEl.innerText = size;
}

increaseBtn.addEventListener('click',()=>{
    size +=5;
    if(size>50){
        size=50;
    }
    updateSizeOnScreen();
})


decreaseBtn.addEventListener('click',()=>{
    size -= 5;
    if(size<=5){
        size=5;
    }
    updateSizeOnScreen();
})
//When the mouse is clicked initally to start drawing
canvas.addEventListener("mousedown", e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
//   console.log(isPressed, x, y);

});

//When the mouse is leaves finally after finishing drawing
canvas.addEventListener("mouseup", e => {
  isPressed = false;
  x = undefined;
  y = undefined;
//   console.log(isPressed, x, y);

});

//While the mouse draws
canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2,y2);
    drawLine(x,y,x2,y2);
    x=x2;
    y=y2;
    // console.log(isPressed, x2, y2);

  }
 
});
clearEl.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size*2;
  ctx.stroke();
}

// drawLine(20,20,20,50);
// drawCircle(100,200); //circle will br drawn 'x' from left marin and 'y' down from top;
