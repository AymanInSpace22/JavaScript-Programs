const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal
= animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log('The index of elephant is, ' + foundAnimal);

const startsWithS
= animals.findIndex(animal => {
  if(animal.charAt(0) === 's')
  {
    return animal;
  } 
});

console.log('The index of starts with s is,',startsWithS);
