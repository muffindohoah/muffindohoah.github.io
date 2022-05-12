
var box = jQuery('.box');	// reference to the HTML .box element
var board = jQuery('.board');	// reference to the HTML .board element
var boardWidth = board.width();	// the maximum X-Coordinate of the screen
var boardHeight = board.innerHeight(); // the maximum Y-Coordinate of the screen
console.log(boardWidth + ", " + boardHeight)

var c = document.getElementById("CanvasTest");
var ctx = c.getContext("2d");
const context = c.getContext('2d');


function clear() {
    ctx.clearRect(0, 0, c.width, c.height);
}

var circles = [0, 500, 500, 250, 250]

// TODO 2 : Create a function that draws a circle 
function drawCircle(eX, eY, sX, sY, color) {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.ellipse(eX, eY, sX, sY, 0, 0, 0);
    ctx.stroke();
};

// TODO 3 / 7 : Call the drawCircle() function 
drawCircle(100, 100, 20, 20, "red");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function process(){

    clear();
    stamp();
    update();

}

function update() {
    // TODO 4 : Update the circle's position //\
    for (i in circles.length / 2) {
        circles[i * 1].x += .2
        circles[i * 2 + 1].y += .2
    };


    // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
    for (i in circles.length / 2) {
        checkCirclePosition(circles[i])
    };

    // TODO 9 : Iterate over the array

    

};

function stamp() {

    for (i in circles.length / 2){
        console.log("ping!")
        drawCircle(circles[i * 1], circles[i * 2 + 1], getRandomInt(10, 15), getRandomInt(10, 15), "Red")
    }
}

/* 
This Function should check the position of a circle that is passed to the 
Function. If that circle drifts off the screen, this Function should move
it to the opposite side of the screen.
*/
function checkCirclePosition(){

    // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
    if ((circle.x > canvas.width) || (circle.x < 0)) {
        circle.x = -circle.x;
    };
    if ((circle.y < 0) || (circle.y > canvas.height)) {
        circle.y = -circle.y;
    };

};

setInterval(process(), 1);