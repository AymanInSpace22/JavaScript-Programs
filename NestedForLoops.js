// Write your code below


bobsFollowers = ['a', 'b', 'c', 'd'];
tinasFollowers = ['a', 'b', 'e'];
mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let t = 0; t < tinasFollowers.length; t++){
    if(bobsFollowers[i] === tinasFollowers[t]){
      mutualFollowers[i] = tinasFollowers[t];
    }
  }
}
