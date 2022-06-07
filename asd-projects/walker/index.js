/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  var velocity = { x: 0, y: 0 }
  var inputVelocity = { x: 0, y: 0 }

const SPEED = 40

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);                           // change 'eventType' to the type of event you want to handle
$(document).on('keyup', handleEvent); 

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

    input()
    moveAndSlide(velocity)

  
  }

  function input() {

    velocity.x = inputVelocity.x * SPEED
    velocity.y = inputVelocity.y * SPEED

  };

  function moveAndSlide(object) {
    $("gameItem").css('right', object.x)
    $("gameItem").css('up', object.y)


  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

    inputVelocity.y = 0
    inputVelocity.x = 0

    if (event.which === 38) {
      inputVelocity.y += 1
    } else if (event.which === 37) {
      inputVelocity.x += 1
    } else if (event.which === 39) {
      inputVelocity.x -= 1
    } else if (event.which === 40) {
      inputVelocity.y -= 1
    };

console.log(inputVelocity)

input()

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
