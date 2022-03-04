// style property
// this is 2 diff ways to alter the CSS with the DOM
let bgColor = document.querySelector('body');
bgColor.style.backgroundColor = '#201F2E';

document.querySelector('body').style.backgroundColor = '#201F2E'



// innerHTML property allows you to alter the content of an element
document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016';

document.querySelector('#fourth').innerHTML = 'Fourth element';




// appendChild method appends an element as the last child of the specified element
// creating a list element
let newDestination = document.createElement('li');
// assigning it an Id
newDestination.id = 'oaxaca';
// assigning it contect with innerHTML
newDestination.innerHTML = ' Oaxaca, Mexico';
// finally, appending it to the ul element with an Id of #more-destinations
document.querySelector('#more-destinations').appendChild(newDestination);




// removeChild method removes a child node from a specified parent node
// this 1st way defines a variable, and passes that variable as an argument to the removeChild()
let country = document.querySelector('#oaxaca');
document.querySelector('#more-destinations').removeChild(country);
// this 2nd was just selects the parent, then chains removeChild() and passes in the Id with another document.querySelector
document.querySelector('#more-destinations').removeChild(document.querySelector('#oaxaca'));



//If you want to hide an element because it does not need to be loaded initially, the .hidden property allows you to hide it by assigning it as true or false:
document.getElementById('sign').hidden = true;








// onclick method (not camelcased)
// You can add interactivity to DOM elements by assigning a function to run based on an event.
//Events can include anything from a click to a user mousing over an element.
//The .onclick property allows you to assign a function to run on a click event on an element:
let element = document.querySelector("button");

function turnButtonRed (){
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}
// when assigning onclick to a function, DO NOT put the () after the function identifier
element.onclick = turnButtonRed;


// anything on the DOM can be clicked. Here is an example of an inline function intialization to onclick
let element2 = document.querySelector("#text");
element2.onclick = function(){element2.style.color = 'purple'};




// Traversing the DOM .parentNode .children firstChild
// firstChild allows access the the first child of a parent node
let first = document.body.firstChild;
first.innerHTML = 'I am the child!';
// parentNode allows access to the parent of the specified element
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';


/*
Review
In this lesson, you manipulated a webpage structure by leveraging the Document Object Model interface in JavaScript.

Let’s review what we learned:

The document keyword grants access to the root of the DOM in JavaScript
The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method
You can also access an element directly by its ID with .getElementById()
The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively
The .onclick property can add interactivity to a DOM element based on a click event
*/
