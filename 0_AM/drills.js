const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    const arr = str.split(" ");
    return arr;
};

// TODO - write a function which reverses the string
const reverse = str => {
    const arr1 = str.split("");
    const arr2 = arr1.reverse();
    return arr2.join("");
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
   let unique = [new Set(arr)];
   return unique; 
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    let total = 1;
    for(let i=num;i>0;i--){
        total *= i;
    }
    return total;
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if(arr1.length != arr2.length)
        return -1;
    const newobj = [];
    for(let i=0;i<arr1.length;i++){
        newobj.push([arr1[i], arr2[i]]);
    }
    return newobj;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    const arr1 = [], arr2 = [];
    for(let i=0;i<arr.length;i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }
    return [arr1, arr2];
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    let a = str.slice(num-1);
    let b = str.slice(0, num-1);
    return (a+""+b);
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    var d = new Date(); 
    console.log("Today's date is "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+
    ". It is "+d.getHours()+":"+d.getMinutes()+".");
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("hello today is monday"));
console.log(reverse("hello"));
console.log(uniqueOnes([1, 1, 2, 3, 5, 5]));
assert(factorial(5)===120);
console.log(zip([1, 2, 3], [5, 3, 1]));
//assert(zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]);

console.log(unzip([[1, 5], [2, 3], [3, 1]]));
assert(shiftRight("Hello", 3) === "lloHe");
announceDate();
