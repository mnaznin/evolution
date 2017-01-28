function drinkingAge(age) {
  if (age >= 21) {
    return "Welcome hobo";
  }
  return "Go back home kiddo";
}

console.log(drinkingAge(21))
var cow = "chicken noodle soup";
var chicken = "hello";
cow = "ice cream";
console.log(cow.length)

function parent () {
  var bankAccountPassword = 'NazninIsSoSexy!';
  function child() {
    var creditCard = 1901901901;
    return bankAccountPassword;
  }
  // console.log(creditCard);
  console.log(child());
  return 'NOT PROTECTED ' + cow;
}

// console.log(bankAccountPassword);
console.log(parent());
console.log('Hi I want some ' + cow + ' right now!');


function sameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  }
  return false;
}

console.log(sameLength("Brandon", "Naznin"))

function passwordLongEnough(password) {
  if (password <= 10){
    return "Weak";
  } 
    return "Strong";
}

console.log(passwordLongEnough("I love Brandon"))

function bouncer(name,age) {
  if (age >= 21) {
    return "Welcome " + name + ".";
  }
  return "Go home, " + name + ".";
}

console.log(bouncer("Steve", 21))

function maxNumber(x,y) {
  if (x > y) {
    return x;
  }
  return y;
}

console.log(maxNumber(2,0))

function minNumber(x,y) {
  if (x < y) {
    return x;
  }
  return y;
}

console.log(minNumber(2,0))

function even(number){
  if (number%2 === 0) {
    return true;
  }
  return false;
}

console.log(even(5))

function negative(num){
  if (num <= 0) {
    return true;
  }
  return false;
}

console.log(negative(-55))

console.log(Math.round(Math.random() * 100)) 

function randInt(n){
  return (Math.random() * (n-1));
}

console.log("randInt: ",randInt(78))

function guessMyNumber(n) {
  if (n === (Math.round(Math.random() * (5-1)))) {
    return "You guessed my number";
  }
  return "That wasn't it!";
}

console.log(guessMyNumber(3))
































































