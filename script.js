// const myNumber = 5;
// const userNumber = prompt('Enter your number');
// if (myNumber == userNumber){
//     alert('You won')
// }
// else if (userNumber == 10){
//     alert('You wrote number 10')
// }

// else{
//     alert('You lost')
// }

// const firstThing = prompt('What is the name of your first item in the buggage')
// const secondThing = prompt('What is the name of your second item in the buggage')
// const thirdThing = prompt('What is the name of your third item in the buggage')

// if (firstThing == 'weapon' || secondThing == 'cigarettes' || thirdThing == 'animal')
//     {alert ('You are arrested')

//     } else {
//     alert ('Come in')
// }

// if (firstThing == 'weapon' && secondThing == 'cigarettes' && thirdThing == 'animal')
//     {alert ('You are arrested')

//     } else {
//     alert ('Come in')
// }

const firstNumber = Number(prompt("Enter first number from 1 to 9"));
const symbol = prompt("symbol from the list: +, -, /, *");
const secondNumber = Number(prompt("Enter second number from 1 to 9"));
if (firstNumber > 9 || secondNumber > 9) {
  alert("you selected wrong number, this is not allowed");
} else if (firstNumber == 0 || secondNumber == 0) {
  alert("you typed number smaller than 1, this is not allowed");
} else {
  if (symbol == "+") {
    alert(firstNumber + secondNumber);
  } else if (symbol == "-") {
    alert(firstNumber - secondNumber);
  } else if (symbol == "*") {
    alert(firstNumber * secondNumber);
  }
  else if (symbol == "/") {
    alert(firstNumber / secondNumber);
  }
}
