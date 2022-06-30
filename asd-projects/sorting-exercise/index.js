/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort

//console.log(bubbleSort([13, 4, 12, 20, 2, 6]))

async function bubbleSort(array) {

    var Arr = array
    var currentIndex = 0

    for (var i = 0; i < Arr.length; i++) {

        //console.log(Arr)

        for (var j = 0; j < Arr.length - i; j++) {

            //var comparative = Arr[currentIndex]

            //console.log(Arr[currentIndex], Arr[i + j], Arr[currentIndex] > Arr[i + j])

            if (Arr[currentIndex] > Arr[i + 1]) {

                swap(i + 1, currentIndex, Arr)

                console.log("swap")
            }

        }
        currentIndex++
    }
}





async function bubblesort(array) {

    var spliceArray = array.splice()
    var tempSort = []
    var bubbleSort = []
    var lowestValue = [100, 0]

    for (var m = 0; m < array.length; m++) {

        for (var i = 0; i < array.length; i++) {

            if (array[i] < lowestValue[0]) {

                lowestValue = [array[i], i]
                spliceArray.slice(lowestValue[1], 1)
                tempSort.push(lowestValue[0])
                //console.log(spliceArray)

                //await sleep();

            };

            console.log(i)
            //console.log(lowestValue)

        };
        bubbleSort.push(lowestValue[0])
        array.slice(tempSort.indexOf(lowestValue[0], 1), 1)
        console.log(m + "a")

    };

    return bubbleSort

}

//console.log(quicksort([12, 21, 51, 5, 2, 61, 9, 19, 4, 222]))



function quicksort(array) {

    var Arr = array
    var currentIndex = 0

    for (var i = 0; i < Arr.length; i++) {

        //console.log(Arr)

        for (var j = 0; j < Arr.length - i; j++) {

            var comparative = Arr[currentIndex]

            console.log(Arr[currentIndex], Arr[i + j], Arr[currentIndex] > Arr[i + j])

            if (Arr[currentIndex] > Arr[i + j]) {

                swap(currentIndex, i + j, Arr)

                console.log("swap")
            }

        }
        currentIndex++
    }
    return Arr
}

async function quicksortb(array) {

    var Arr = array
    var currentIndex = 0

    for (var i = 0; i < Arr.length; i++) {

        //console.log(Arr)

        for (var j = 0; j < Arr.length - i; j++) {

            //var comparative = Arr[currentIndex]

            //console.log(Arr[currentIndex], Arr[i + j], Arr[currentIndex] > Arr[i + j])

            if (Arr[currentIndex] > Arr[i + 1]) {

                swap(i + 1, currentIndex, Arr)
                updateCounter(bubbleCounter)
                await sleep()

                //console.log("swap")
            }

        }
        currentIndex++
    }

    return Arr

}

//console.log(quicksortb([12, 2, 5, 7, 19]))


// TODOs 4 & 5: Implement partition

function uses() {
    merge([], [])
}

console.log(mergesort([1, 2, 5, 3, 7, 9, 3, 5]))

function mergesort(Arr) {
    var array = Arr

    if (array.length < 2) {
        return array
    }



    const middle = Math.floor(array.length / 2);


    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return (merge(mergesort(left), mergesort(right)))

}

function merge(array, array2) {
    var Arr = quicksort(array)
    var Arr2 = quicksort(array2)
    var Result = []

    // console.log(Arr, Arr2, Result)

    var length = Arr2.length + Arr.length

    for (var i = 0; i < length; i++) {
        //console.log("iterate")
        if (Arr[0] > Arr2[0]) {
            Result.push(Arr2[0])
            Arr2.shift()
            //console.log("Arr")
        } else if (Arr[0]) {
            Result.push(Arr[0])
            Arr.shift()
            //console.log("Arr2")
        } else {

            Result.push(...Arr2)
        }



    };
    return Result
}


//console.log(recursive([1, 5, 9, 12], [3, 5, 9, 15, 11]))
// TODO 1: Implement swap


function swap(l, j, array) {
    var temp = array[l]

    array[l] = array[j]
    array[j] = temp
    drawSwap(array, l, j)


}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}