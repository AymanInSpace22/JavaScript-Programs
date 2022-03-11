let ball = document.getElementById('float-circle');

// Write your code below

const up = () =>{
    ball.style.bottom = '250px';
}

down = () =>{
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);



/*
Keyboard Events
Other popular types of events are keyboard events! keyboard events are triggered by user interaction with keyboard keys in the browser.

The keydown event is fired while a user presses a key down.Key Down Event Image

The keyup event is fired while a user releases a key.Key Up Event Image

The keypress event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event.Key P ress Event Image

Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.
*/


/*
Review
Congrats, you completed the lesson! Now you’ve learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

Let’s review what you’ve learned:

You can register events to DOM elements using the addEventListener() method.
The addEventListener() method takes two arguments: an event type and an event handler function.
When an event is triggered on the event target, the registered event handler function executes.
Event handler functions can also be registered as values of onevent properties of their event target.
Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
The addEventListener() method can be used to add multiple event handler functions to a single event.
The removeEventListener() method stops specific event handlers from “listening” for specific events firing.
*/
