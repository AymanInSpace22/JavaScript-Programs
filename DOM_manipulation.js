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
