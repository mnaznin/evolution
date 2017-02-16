  var x = 2;

function counter(x){
  // x = undefined
  x = x + 1;
  return x;
}

// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter());
// console.log(counter());

// var upperBound = 6;

// function randInt(generateNumber) {
//   return Math.floor(Math.random() * (generateNumber + 1))
// }

// function guessMyNumber(userGuess) {
//   var correctNumber = randInt(upperBound);
//   if (userGuess > upperBound) {
//     return "Out of bounds! Please try a number between 0 and 5.";
//   } else if (userGuess === correctNumber) {
//     return "You guessed my number!";
//   }
//   return "Nope! The correct number was:" + ' ' + correctNumber;
// }



// var upperBound = 6;

// function randInt(generateNumber) {
//   return Math.floor(Math.random() * (generateNumber + 1))
// }

//  var correctNumber = randInt(upperBound);

// function guessMyNumber(userGuess) {
 
//   if (userGuess > upperBound) {
//     return "Out of bounds! Please try a number between 0 and 5.";
//   } else if (userGuess === correctNumber) {
//     return "You guessed my number!";
//   }
//   return "Nope! The correct number was:" + ' ' + correctNumber;
// }

//bestRecord is unassigned because we do not know what the best record is yet
  //newBestRecord = bestRecord to keep updating the latest record
//a user has a max try of 3
  //what happens if he maxes out and a new user immediately plays?
    //we could check to see if the maxTry is greater than 3
    //if it is greater than 3, then we should reset it to 0

var upperBound = 20;

function randInt(generateNumber) {
  return Math.floor(Math.random() * (generateNumber + 1))
}
 var usersAttempt = 1;
 var maxTry = 3;
 var bestRecord;

function guessMyNumber(userGuess) {
  var correctNumber = randInt(upperBound);
  
  if (userGuess > upperBound) {
    return "Out of bounds! Please try a number between 0 and 5.";
  } else if ((userGuess === correctNumber) && (usersAttempt <= 3)) {

    if (bestRecord === undefined || usersAttempt < bestRecord){
      bestRecord = usersAttempt;
    } 
    var attempt = usersAttempt;
    usersAttempt = 1;
    upperBound++;
    return "You guessed my number in " + (attempt) + ' guess! The best record is ' + bestRecord;
  } else if (usersAttempt > 3){
    upperBound--;
    usersAttempt = 1;
    return "Thats your limit on guess game";
  } else if (userGuess > correctNumber){
      return "Nope! guess lower, you have " + (usersAttempt++) +' tries left';
  }

     return "Nope! guess higher, you have " + (usersAttempt++) +' tries left';
}


console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));console.log('guessMyNumber: ', guessMyNumber(4)); //Player one's first try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's second try!
console.log('guessMyNumber: ', guessMyNumber(3)); //Player one's third try!
console.log('guessMyNumber: ', guessMyNumber(3)); //...new player! Reset maxTry to 0
console.log('guessMyNumber: ', guessMyNumber(3));
console.log('guessMyNumber: ', guessMyNumber(3));
//console.log('randInt: ', randInt(3));
// console.log('randInt: ', randInt(3));