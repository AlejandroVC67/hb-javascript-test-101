function generateRandomNumber(){
    var r,g,b;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    console.log("r: " + r + ", g: "+g+", b: " + b);
}

function filterNegativeNumbers(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] >= 0){
            newArray.push( array[i]);
        }
    }
    return newArray;
}

function functionalFilterNegativeNumbers(array){
    return array.filter(function(ele){
        return ele >=0;
    });
}

function mapNumbersIntoStrings(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push("" + array[i] + "").toString();
    }
    return newArray;
}

function functionalMapNumbersIntoStrings(input){
    return input.map(function(output){
        return output.toString();
    });
}

function printType(input){
    var output = typeof(input);
    console.log(output);
}

function isPalindrome(string){
    var reverseString = string.split('').reverse();
    for(var i = 0; i < string.length; i++){
        if(string[i] === reverseString[i])
            return true;
        else
            return false;
    }
}

function functionalIsPalindrome(string){
    var reverseString = string.split('').reverse().join('');
    if(reverseString === string)
        return true;
    else   
        return false;
}

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
     printName(){
        console.log(this.name);
    }
    get Age(){
        return this.age;
    }
}

function printOutPersonAge(student){
    console.log(student.Age);
}

console.log('generate Randomg RGB');
console.log(generateRandomNumber());

console.log('filter negative numbers');

//Regular case
console.log(filterNegativeNumbers([-2,4,8,0,1,-3,-9,20,-40]));
console.log(filterNegativeNumbers([-4,-6,-5,0,34,54,-7]));
//No array input
console.log(filterNegativeNumbers([]));
//All negative Numbers
console.log(filterNegativeNumbers([-4,-6,-5,-100,-1000000,-40,-80]));
//Big numers
console.log(filterNegativeNumbers([9999999999999999999999999999999999999999999999999999999999999999999]));

console.log('map numbers into strings');
//All positive Numbers
console.log(mapNumbersIntoStrings([4,80,200000000,900]));
//With float or double
console.log(mapNumbersIntoStrings([4,-80.30,2000.40,900.31]));

//Regular case
console.log(mapNumbersIntoStrings([-4,-6,-5,0,34,54,-7]));
//All positive Numbers
console.log(mapNumbersIntoStrings([4,80,200000000,900]));
//All Negative numbers
console.log(mapNumbersIntoStrings([-4,-6,-5,-100,-1000000,-40,-80]));


console.log('type of');
//printType String
printType('4');
//printType int 
printType(20);
//printType object
var date =new Date()
printType(date);

console.log('palindrome');

//Palindrome
console.log(isPalindrome("madam"));
console.log(isPalindrome("Hi"));

console.log('JS class');
//Javascript class
const student = new Person('John', 25);
student.printName();

printOutPersonAge(student);

console.log('Functional functions lel');

console.log('functional filter negative numbers');
console.log(functionalFilterNegativeNumbers([-2,4,8,0,1,-3,-9,20,-40]));

console.log('Functional map into strings');
console.log(functionalMapNumbersIntoStrings([-2,4,8,0,1,-3,-9,20,-40]));

console.log('Functional isPalindrome');
console.log(functionalIsPalindrome("madam"));
console.log(functionalIsPalindrome("Hi"));

console.log('Functional JS class');



