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

  var inputMap = {
    UP1: 38,
    RIGHT1: 37,    //p1 controls.
    LEFT1: 39,
    DOWN1: 40,

    UP2: 87,
    RIGHT2: 68,    //p2 controls.
    LEFT2: 65,
    DOWN2: 83
  }

  var player = { x: 0, y: 0 }
  var player2 = { x: 0, y: 0 }
  var velocity = { x: 0, y: 0, x2: 0, y2: 0 }
  var inputVelocity = { x: 0, y: 0, x2: 0, y2: 0 }

  const SPEED = 4

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

    varUpdate()
    moveAndSlide(velocity)


  }

  function varUpdate() {

    velocity.x = inputVelocity.x * SPEED
    velocity.y = inputVelocity.y * SPEED

    velocity.x2 = inputVelocity.x2 * SPEED
    velocity.y2 = inputVelocity.y2 * SPEED

    checkCollide(player)
    checkCollide(player2)




  };

  function checkCollide(object) {

    const BOUNDS = {
      top: 10,
      bottom: 380,
      left: -100,
      right: -100
    }



    if (object.y < BOUNDS.top) {
      object.y = BOUNDS.top
    }
    if (object.y > BOUNDS.bottom) {
      object.y = BOUNDS.bottom

    }
    if (object.x < BOUNDS.right) {
      object.x = BOUNDS.right
    }
    if (object.x > BOUNDS.left) {
      object.x = BOUNDS.left

    }


  }

  function moveAndSlide(object) {

    var $box = $("#box")
    //console.log(player2.y)


    player.x += object.x;
    player.y += object.y;

    player2.x += object.x2;
    player2.y += object.y2;

    //$("gameItem").offset({ top: player.y, left: player.x });

    // console.log($("gameItem").offset())

    $("#gameItem").css("left", player.x)
    $("#gameItem").css("top", player.y)

    $("#gameItem2").css("left", player2.x)
    $("#gameItem2").css("top", player2.y)




  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

    if (event.type === 'keydown') {



      if (event.which === inputMap.UP1) {
        inputVelocity.y = -1
        console.log(inputVelocity)
      } else if (event.which === inputMap.RIGHT1) {
        inputVelocity.x = -1
      } else if (event.which === inputMap.LEFT1) {
        inputVelocity.x = 1
      } else if (event.which === inputMap.DOWN1) {
        inputVelocity.y = 1
      };

      if (event.which === inputMap.UP2) {
        inputVelocity.y2 = -1
        console.log(inputVelocity)
      } else if (event.which === inputMap.RIGHT2) {
        inputVelocity.x2 = 1
      } else if (event.which === inputMap.LEFT2) {
        inputVelocity.x2 = -1
      } else if (event.which === inputMap.DOWN2) {
        inputVelocity.y2 = 1

      }
    }

    if (event.type === 'keyup') {
      if (event.which === inputMap.UP1) {
        inputVelocity.y = 0
      } else if (event.which === inputMap.RIGHT1) {
        inputVelocity.x = 0
      } else if (event.which === inputMap.LEFT1) {
        inputVelocity.x = 0
      } else if (event.which === inputMap.DOWN1) {
        inputVelocity.y = 0
      }
      if (event.which === inputMap.UP2) {
        inputVelocity.y2 = 0
      } else if (event.which === inputMap.RIGHT2) {
        inputVelocity.x2 = 0
      } else if (event.which === inputMap.LEFT2) {
        inputVelocity.x2 = 0
      } else if (event.which === inputMap.DOWN2) {
        inputVelocity.y2 = 0
      };

    };


    if (event.type === 'keydown') {
      if (event.which === inputMap.UP2) {

      };

    }
    if (event.type === 'keyup') {

    }




  }
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
