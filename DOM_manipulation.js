// style property
// this is 2 diff ways to alter the CSS with the DOM

let bgColor = document.querySelector('body');
bgColor.style.backgroundColor = '#201F2E';

document.querySelector('body').style.backgroundColor = '#201F2E'



// innerHTML property allows you to alter the content of an element

document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016';

document.querySelector('#fourth').innerHTML = 'Fourth element';
