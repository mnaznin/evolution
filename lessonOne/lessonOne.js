function sayHello(name) {
  return 'Hello ' + name + '!';
}

function display (cow) {
  console.log(cow);
}

display(1+2);
display(3*5);
display((5/4)-13);
display(5000*234);
display((1073/57)+200);
display(3+2*4-1);
display((3+2)*(4-1));
display(29*12*30*24);
display(3%2);
display(4%2);

function name (firstName, lastName, favFood){
  if (favFood)  {
    return firstName+lastName +"'s"+" "+"favourite food is " + favFood;
  }
  return firstName+lastName;
}

display(name("Mahmuda ", "Naznin", "noodles"));

display(name("Rokeya ", "Begum"))

function heightToCm(feet, inch){
return((feet*12)+ inch) * 2.54;
}

display(heightToCm(5,7));

function sayHello(cow){
  return "Hello " + cow;
}

display(sayHello("Naznin"));


