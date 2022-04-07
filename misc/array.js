var members = []
var ages = []
var group;

var i;

var output = []
var final = []

var mouse = false

var increment = 0

var c = document.getElementById("CanvasTest");
var ctx = c.getContext("2d");
const context = c.getContext('2d');


let slide = new Audio('ka-ching sound effect.m4a');

/////////////////////////////

document.addEventListener('keydown', myKeyPress);

////////////////////////////

setInterval(update, 100);


function update() {
    if (increment > 10)
        draw("text", "CLEAR!", 200, 100)

};




function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }
    if (e.key != "Backspace") {
        draw("log", e.key);
    } else {
        clear();
    };
};


function logKey(e) {
    log.textContent += ` ${e.code}`;
};




//document.keydown = myKeyPress() //{
//e = e || window.event;
//console.log(e);
//document.getElementById("")
//increment = increment + 1
//draw("text", "e");
// use e.keyCode
//};


function clear() {
    console.log("clear");
    increment = 0;
    ctx.clearRect(0, 0, c.width, c.height);
    slide.load;
    slide.play;
}

function draw(item, text, tX, tY) {
    if (item = "text") {
        var c = document.getElementById("CanvasTest");
        var ctx = c.getContext("2d");
        ctx.font = "60px MSGothic";
        ctx.strokeText(text, tX, tY);
    };



    if (item = "log") {
        increment = increment + 1
        var c = document.getElementById("CanvasTest");
        var ctx = c.getContext("2d");
        ctx.font = "50px Verdana";
        ctx.strokeText(text, 10, increment * 35);
        console.log(increment);
    }


}


//get group data

function getgroupdata() {
    members = []
    ages = []
    group = prompt("group size");
    i = 0
    output = []
    final = []

    for (let i = 1; i <= group; i++) {
        members.push("\n" + prompt("name of member: " + i))
        ages.push(prompt(`age of member: ${members[i - 1]}`))
    }
    console.log(members);
    //assess group data
    for (let i = 0; i <= group; i++) {
        if (ages[i] >= 21) {
            output.push("yes")

        } else {

            output.push("no")
        }



    }


    //offsetTop = yPos. offsetLeft = xPos.
    function Hide() {
        console.log("hiding")
        if (window) {
            document.getElementById("tower").style.offsetLeft = 150 + " px"
        } else {
            document.getElementById("tower").style.offsetLeft = -150 + " px"

        }
    }


    //sort output
    group
    for (let i = 0; i < group; i++) {
        "" + final.push(members[i] + " allowed to drink? " + output[i] + "")
    }
    document.getElementById("output").innerHTML = final;
}


