function sum(n){
  var newSum = n;
  for (var i = 0; i < n; i++){
    newSum += i;
    //newSum = 5 + 0;
      //newSum = 5;
    //newSum = 5 + 1;
      //newSum = 6;
    //newSum = 6 + 2;
      //newSum = 8;
  }
  return newSum;
}

 console.log('sum: ', sum(5));

function factorial(n){
  var newFac = n;
  for(var i = 1; i < n; i++){
    newFac *= i;
  }
  return newFac;
}


console.log('factorial: ', factorial(5));

function repeatString(str, count) {
  var newString = ' ';
  for (var i = 0; i < count; i++){
      newString += str;
  }
  return newString;
}

console.log('repString: ', repeatString('dog', 5));




