export function generateRandomNumber(){
    var rgb ={
        r : Math.round(Math.random()*255),
        g : Math.round(Math.random()*255),
        b : Math.round(Math.random()*255),
    }
    return rgb; 
}

export function filterNegativeNumbers(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] >= 0){
            newArray.push( array[i]);
        }
    }
    return newArray;
}

export function functionalFilterNegativeNumbers(array){
    return array.filter(function(ele){
        return ele >=0;
    });
}

export function mapNumbersIntoStrings(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push("" + array[i] + "").toString();
    }
    return newArray;
}

export function functionalMapNumbersIntoStrings(input){
    return input.map(function(output){
        return output.toString();
    });
}

export function printType(input){
    var output = typeof(input);
    console.log(output);
}

export function isPalindrome(string){
    var reverseString = string.split('').reverse();
    for(var i = 0; i < string.length; i++){
        if(string[i] === reverseString[i])
            return true;
        else
            return false;
    }
}

export function functionalIsPalindrome(string){
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

export function printOutPersonAge(student){
    console.log(student.Age);
}

