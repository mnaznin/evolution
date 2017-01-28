function signin(username, password) {
  if (username === "Naz" && password === "goodGirl") {
    return true;
  } else{
     return false;
  }
}

console.log (signin("Naz", "goodGirl"))

console.log(!(2 >= 2))
console.log(!(4 === 4))
console.log(!(5 !== 5))

console.log(1 > 2 || 2 > 2 || 3 >2)
console.log(5 < 5 || 75 < 74)
console.log("warm" && "cold")
console.log(false || " ")

function bouncer(name,age) {
  if (name === "Joe") {
    return "go home";
  }else if ( age >= 21) {
   return "Welcome";
  }
  return "Come back adult";
}

console.log(bouncer(21, undefined))

function scoreToGrade(num) {
  if (num >100){
    return "Invalid score";
  } else if (num >= 90) {
    return "A: " + num;
  } else if (num >= 80){
    return "B: " + num;
  }
  return "C: " + num;
}

console.log(scoreToGrade(105))


function bouncer(age) {
  if (age < 18) {
    return "go home";
  }else if ( age >= 18 && age < 21) {
   return "Avoid bar";
  }else{
     return "Welcome adult";
  }
 
}

console.log(bouncer(90))
























