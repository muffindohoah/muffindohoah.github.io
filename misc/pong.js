
// Player Setup
var p1Y = 150;
var p2Y = 150;
var p1S = 0;
var p2S = 0;

var bX = 240;
var bY = 180;
var velX = 1
var velY = 0
var spd = 1;

//Canvas Setup
var box = jQuery('.box');	// reference to the HTML .box element
var board = jQuery('.board');	// reference to the HTML .board element
var boardWidth = board.width();	// the maximum X-Coordinate of the screen
var boardHeight = board.innerHeight(); // the maximum Y-Coordinate of the screen
console.log(boardWidth + ", " + boardHeight)

var c = document.getElementById("CanvasTest");
var ctx = c.getContext("2d");
const context = c.getContext('2d');

var map = {}; // maps all buttons being currently pressed


//Common Func Setup
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener('keydown', myKeyPress);

function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }

};


function stamp() {
    rect(20, p1Y, 20, 80);
    rect(430, p2Y, 20, 80);
    elipses(bX, bY, 1);
    draw(p1S, 30, 30, 30)
    draw(p2S, 420, 30, 30)
};


function getpress() {
    onkeydown = onkeyup = function (e) {
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
    }
    if (map[38] && map[87]) { //both players press up
        p1Y = p1Y - (1 * spd)
        p2Y = p2Y - (1 * spd)
    } else if (map[40] && map[83]) { // both players press down
        p1Y = p1Y + (1 * spd)
        p2Y = p2Y + (1 * spd)
    } else if (map[38] && map[83]) { // p1 down, p2 up
        p1Y = p1Y + (1 * spd)
        p2Y = p2Y - (1 * spd)
    } else if (map[40] && map[87]) { // p1 up, p2 down
        p1Y = p1Y - (1 * spd)
        p2Y = p2Y + (1 * spd)
    } else if (map[87]) { //p1up
        p1Y = p1Y - (1 * spd)
    } else if (map[83]) { //p1down
        p1Y = p1Y + (1 * spd)
    } else if (map[38]) { //p2up
        p2Y = p2Y - (1 * spd)
    } else if (map[40]) { //p2down
        p2Y = p2Y + (1 * spd)
    };


    if (p1Y > 280) {
        p1Y = 280
    };
    if (p2Y > 280) {
        p2Y = 280
    };

    if (p1Y < 0) {
        p1Y = 0
    };
    if (p2Y < 0) {
        p2Y = 0
    };

};

function rect(rX, rY, sX, sY) {
    ctx.beginPath();
    ctx.rect(rX, rY, sX, sY);
    ctx.stroke();

};

function elipses(eX, eY, size) {
    ctx.beginPath();
    ctx.ellipse(eX, eY, 12 * size, 12 * size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
};

function clear() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function draw(text, tX, tY, px) {
        var c = document.getElementById("CanvasTest");
        var ctx = c.getContext("2d");
        ctx.font = px + "px " + "Courier New";
        ctx.strokeText(text, tX, tY);
};

//Process Setup
var lastUpdate = Date.now(); //deltatime handler
var now = Date.now();
var dt = now - lastUpdate;
setInterval(process, dt)
setInterval(diff, 1000)

//ETC.

//p1y, p1y+80, (p1x)20, (p2x)430

function reset(point) {
    spd = 1
    bX = 240
    bY = 180
    velX = 1
    velY = 0
    if (point === 1) {
        p1S += 1
    }
    if (point === 2) {
        p2S += 1
    };
};

function ball() {
    velX = velX
    velY = velY
    bX = bX + (velX * spd);
    bY = bY + (velY * spd);

    if (bX < 0) {
        reset(2);
        console.log("text")
    };
    if (bX > 480) {
        reset(1);
    };

    if (bY > 360) {
        velY = -velY
    }
    else if (bY < 0) {
        velY = -velY;
    }
    else if (bX + 12 >= 430 && bY <= p2Y + 80 && bY >= p2Y) {
        bX = bX - 1;
        bY = bY - 1;
        velX = -velX
        velY = velY + getRandomInt(-2, 2)
    }
    else if (bX <= 20 + 20 && bY <= p1Y + 80 && bY >= p1Y) {
        bX = bX + 1;
        bY = bY + 1;
        velX = -velX;
        velY = velY + getRandomInt(-2, 2)
    };

};










//   if (bX === 20 || bX === 430) { //check collision

//     for (let i = 0; i < 80; i++) {
//       if (bY === p1Y + i) {
//         velX = 1
//velY = getRandomInt(1, -1)

//   };
// if (bY === p2Y + i) {
//   velX = -1
//velY = getRandomInt(1, -1)




//     };
//console.log("checked.")
//  };
//console.log(bX, bY)
//};

function diff() {
    spd += 0.1

};

function process() {
    lastUpdate = Date.now(); //deltatime handler
    now = Date.now();
    dt = now - lastUpdate;
    clear();
    ball();
    getpress();
    stamp();
    document.getElementById("dt").innerHTML = "deltatime: " + dt + "ms"
};


