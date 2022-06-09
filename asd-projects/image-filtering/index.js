// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.



$(document).ready(function () {
    const $display = $('#display');

    // Multiple TODOs: Call your apply function(s) here


    for (let i = 0; i < image.length; i++) {
        applyFilterNoBackground(i, cobalt)
    }

    render($display, image);
});

function randi(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//setInterval(process, 30)

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function applyFilter(l, filterFunction) {

    for (var i = 0; i < 14; i++) {

        var rgbString = image[Math.floor(l, filterFunction)][i]
        var rgbNumbers = rgbStringToArray(rgbString)

        filterFunction(rgbNumbers)

        rgbString = rgbArrayToString(rgbNumbers)

        image[Math.floor(l)][i] = rgbString

        console.log(l, i)



    }

    return rgbString
};

function increaseGreenbyBlue(input) {

    input[GREEN] = keepInBounds(input[GREEN] + input[BLUE])

}

function decreaseBlue(input) {
    input[BLUE] = input[BLUE] - 70
}

function keepInBounds(input) {

    return clamp(input, 0, 255)

};

function reddify(input) {

    input[RED] = 220

    return

}

function invertRGB() {

};
// TODO 7: Create the applyFilterNoBackground function

const BACKGROUND_COLOR = "rgb(150,150,150)"

function applyFilterNoBackground(l, filterFunction) {

    for (var i = 0; i < 14; i++) {

        var rgbString = image[Math.floor(l, filterFunction)][i]
        var rgbNumbers = rgbStringToArray(rgbString)

        if (rgbArrayToString(rgbNumbers) === BACKGROUND_COLOR) {
            
        } else {

        filterFunction(rgbNumbers)

        rgbString = rgbArrayToString(rgbNumbers)

        image[Math.floor(l)][i] = rgbString
        
        }
        

    }

    return rgbString
};

// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function


// TODO 6: Create more filter functions


// CHALLENGE code goes below here

function cobalt(input) {

input[RED] = input[BLUE] - 20
input[GREEN] = input[BLUE] - 15

};

function grayscale(input) {

var avg = (input[BLUE] + input[RED] + input[GREEN]) / 3

console.log(avg)

input[BLUE] = avg
input[RED] = avg
input[GREEN] = avg


}

function process() {

    
    for (let i = 0; i < image.length; i++) {
        applyFilterNoBackground(i, shimmer)
    }

    render($display, image);

};