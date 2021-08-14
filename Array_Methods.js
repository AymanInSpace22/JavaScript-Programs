// push() method
// this method allows you to append elements to an array. The push() method can accept many parameters
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('Drink Milk', 'Eat veggie burgers');

console.log(chores);


// pop() method
// this method removes only the last element from an array. The pop() method takes no parameters
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);


// shift() method
// the shift method removes an element specified by its index
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(groceryList[0]);
console.log(groceryList);



// the unshift() method
// the unshift method appends an element to a specified index
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.unshift(groceryList[0] = 'popcorn');
console.log(groceryList);


// the slice() method
// the slice method removes multiple elements using a start and end points. This method must be used in the same line
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1,4));



// the indexOf() method
// the indexOf method returns the index position of a specified element
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
