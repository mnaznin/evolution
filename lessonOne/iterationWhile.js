function sum(n){
  var newSum = 0;
  while (n > 0){
    newSum += n;
    //newSum = newSum + n;
    //newSum = 0 + 5;
      //newSum = 5;
    //newSum = 5 + 4;
      //newSum = 9;
    //newSum = 9 + 3;
      //newSum = 12;
    //newSum = 12 + 2;
      //newSum = 14;
    //newSum = 14 + 1;
      //newSum = 15;
    n = n - 1;
  }
  return newSum;
}

console.log('sum: ', sum(5));

function factorial(n){
  var newFac = 1;
  while (n > 1){
    newFac *= n;
        n = n - 1;
  }
  return newFac;
}


console.log('factorial: ', factorial(5));

function repeatString(str, count) {
  var newString = ' ';
  while (count > 0){
      newString += str;
      count = count - 1;
  }
  return newString;
}

console.log('repString: ', repeatString('dog', 5));











