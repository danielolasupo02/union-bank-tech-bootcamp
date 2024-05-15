// confirm("Are you sure you want to proceed to the Union Bank Bootcamp?")
// let firstName;
// firstName = prompt("Enter First Name");
// // e.preventDefault();
// lastName = prompt("Enter Last Name");
// // e.preventDefault();
// // alert("Welcome here " + firstName + " " + lastName);
// console.log("Welcome here " + firstName + " " + lastName);


// alert("Welcome here " + firstName + " " + lastName);


// Excercise 1
// Create  a program that accepts two datas of 
// number from a user
// then let it show in your console
// the two numbers being evaluated in the console
// e.g. A = 1, B = 2, A + B = 3


// let firstNum = prompt("Enter first Number");
// let secondNum = prompt("Enter second Number");
    
// console.log(`The Sum of ${firstNum} and ${secondNum} is: ${parseInt(firstNum) + parseInt(secondNum)}`)


// let address = 'No 45, George Essien Udom Cr, Magodo, Lagos State';

// console.log(address.slice(0,address.length));
// console.log(address.lastIndexOf('N'));
// console.log(address.lastIndexOf('e'));
// console.log(address.replace('Lagos', 'Abuja'))
// console.log(address.toLowerCase());
// console.log(address.toUpperCase())
// console.log(address.split())
// console.log(address.split(''))
// console.log(address.split(' '))
// console.log(address.split(' ').reverse()); // ['State', 'Lagos', 'Magodo,', 'Cr,', 'Udom', 'Essien', 'George', '45,', 'No']

// let newAddress = address.split(' ');
// newAddress[1]='10';

// newAddress.pop(); // removes the last element of the array
// newAddress.shift(); // removes the first element of the array
// newAddress.push('Welcome'); // adds string to the last of array
// newAddress.unshift('Yellow'); // adds string 'Yellow' to the start of the array
// console.log(newAddress);

// let unionBank = 'New Staff';
// let oldAddress = "47, Carrington rd";
// console.log(unionBank.concat(oldAddress));
// console.log(address.trim());

// ARRAY DATA TYPES
// let color = ['blue', 'red', 'green'];
// color.pop();
// color.shift();
// color.push('yellowgreen');
// console.log(color);
// color.splice(2, 0, 'orange');
// console.log(color);

// number
// let myNum = 1;
// console.log(myNum.toFixed(2));
// console.log(myNum.toPrecision(4));

// let secretNum = Math.random();
// console.log(secretNum);
// let theNum = Math.floor(secretNum*10);
// console.log(theNum);


// tenary operator
// let yaNum= 1;
// console.log(yaNum > 10 ? 'Welcome': 'Please Sign In, ya a thief!!!');


// let score = prompt('Please Enter your Score')
// score.toUpperCase();
// console.log(score)
// switch(true){
//      case score == 'A':
//         console.log('Excellent');
//         break;
//      case score == 'B':
//         console.log('Grade B');
//         break;
//      case score == 'C':
//         console.log('Grade C');
//         break;
//      case score == 'D':
//         console.log('Fail')
//         break;
//      default:
//         console.log('Unknown Result');
//         break;
// }



// if (score >= 90 && score <= 100) {
//     console.log("Grade A")
// }
// else if {

// }



// // Class Exercise
// let userInput = prompt('Please Enter your Score')
// score = parseInt(userInput);
// console.log(score)
// // score = 90
// switch(true){
//      case score >= 90 && score <= 100:
//         console.log('Excellent');
//         break;
//      case score >= 70 && score <= 89:
//         console.log('Grade B');
//         break;
//      case score >= 59 && score <= 69:
//         console.log('Grade C');
//         break;
//      case score >= 40 && score <= 49:
//         console.log('Fail')
//         break;
//      default:
//         console.log('Unknown Result');
//         break;
// }


// let score = 54;

// if (score >= 90 && score <= 100) {
//     console.log("Grade A")
// }
// else if(score >= 70 && score <= 89) {
//     console.log("Grade B");
// }


//    let age = 18;
//    let country = 'Nigeria';
//    if (country === 'Nigeria' || age < 18) {
//         console.log("Not Eligible To Vote!");
//    }
//    else {
//     console.log("You can vote")
//    }


//     // 90 - 100 grade A
//     // 70 -89 grade B
//     // 60 - 59 Grade C
//     // 40 - 49 Fail 
//     // 0 - 39 Unknown Result 


//     let x = parseInt(prompt('Enter a number'));

//     x = -1;

//     while (x > 0) {
//      console.log(x);
//     }


// let x = 0;

// while(x <= 0) {
//      console.log(x);
//      ++x;
// }


let numberMultiple = prompt('Enter Number')
let count = 1;
while (count <= 12) {
     console.log(`${numberMultiple} x ${count} is ${numberMultiple*count}`);
     ++count;
}