
var i = 0
var rollcount = $("#rollCount").val()

console.log($)
var button = $("rollSubmit")

function randi(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randc() {
    var colors = ["#262626", "#979797", "#474747", "#00ff00", "#ff0000", "#0000ff"]
    return String(colors[randi(0, colors.length)])
}

function Int(input) {

    return Number(input)
}

//setup

//$(document).ready(function () {
$("#rollSubmit").on("click", rollProcess);
//});



// /setup

function rollProcess() {
    console.log($("#rollCount").val())
    rollcount = $("#rollCount").val()
    sidedDie = $("#sidedDie").val()

    logRoll("==============")
    //for (var i = 0; i < rollcount; i++) {

    roll()




    //};

    
    i = 1

};

function roll() {
    
    try {
        console.log("rolling")
        
        var result = randi(0, sidedDie) + 1

        i++
        clear()
        Dot(result)
        logRoll(result)

        
        if (i < rollcount) {
            setTimeout(roll, 500)
        } else {
            logRoll("==============")
            i = 1
        }

        return result

    } catch (err) {
        alert(err.message);

    }
}

function getRoll() {
    return randi()
}

function logRoll(roll) {
    console.log("texti")

    $("#log")
        .css("color", "Azure")
        .append("<p> " + roll + " </p>")


    //$("p").add(String(roll))
    //.css("color", "Azure")
    //.appendTo("#log");
};


function clear() {

    $('<div>')
    $("#die").empty()
}

function Dot(dots) {
    clear()
    for (var i = 0; i < dots; i++) {
        $('<div>')
            .css("height", randi(12, 20))
            .css("width", randi(12, 20))
            .css("background-color", randc())
            .css("position", "absolute")
            .css('top', randi(0, 80))
            .css('left', randi(0, 80))
            .appendTo("#die");

    };
}

Dot(3)






