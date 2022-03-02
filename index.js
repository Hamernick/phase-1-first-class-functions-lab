// Code your solution in this file!


let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0 , 2)

}

const returnLastTwoDrivers = function() { 
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(fare) { 
    return function(x){
        return x * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
   let arg1 = drivers
   let arg2 = returnFirstTwoDrivers()

   return selectDifferentDrivers(arg1, arg2);
}


// // Arrow function with two arguments 
// const sum = (firstParam, secondParam) => { 
//     return firstParam + secondParam; 
//   }; 
//   console.log(sum(2,5)); // Prints: 7 
   
//   // Arrow function with no arguments 
//   const printHello = () => { 
//     console.log('hello'); 
//   }; 
//   printHello(); // Prints: hello
   
//   // Arrow functions with a single argument 
//   const checkWeight = weight => { 
//     console.log(`Baggage weight : ${weight} kilograms.`); 
//   }; 
//   checkWeight(25); // Prints: Baggage weight : 25 kilograms.
   
   
//   // Concise arrow functions
//   const multiply = (a, b) => a * b; 
//   console.log(multiply(2, 30)); // Prints: 60 