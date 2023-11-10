// let age = 32;
// // lets start with variable and values 
// // string is created by using '' or ""

// let greetingText = 'Hi,my or I\'m name is Max!';
// alert(greetingText);
// greetingText = 'hin im really max';
// alert(greetingText);
// alert(age);
// alert(age);
// if we use a strin and a concat sign which is + then it will concat both the string to one variable and if i use `` this it will lead me to have a line break in string without giving error

// value in variabl  can be e changed 
let age = 32;
// 32-18=14
let userName = 'Atharva';
// let hobby1
// let hobby2
let hobbies = ['Sports', 'cooking', 'reading'];
//                 0           1           3
// every item has its own unique number in narray
// we can also have numbers and strings mixed
// properties:value is objexct and value 
let job = {
    title: 'Developer',
    place: 'New York',
    salary: 50000
};
// hellow my name is atharva jaiswal
// wow its amazing 
// let jobTitle='Developer';
// let jobPlace='New York';
// let jobSalary= 50000;
// alert(hobbies[1]);
// alert(job.title);
// done with number string array and objects 
// age=45;
// let adultYears =  age-18; //14
// alert(adultYears);

// Lets start with functions

let totalAdultYears;
function calculateAdultYears(userAge) 
{
    // if i make the variable in function it will not get accessed out of the function thats why we decalared out of this function 

    let result= userAge-18;
    return result;

}
// or we can directly pass the value in thje paranthesis

totalAdultYears=calculateAdultYears(age);
console.log(totalAdultYears);
age=45;
totalAdultYears=calculateAdultYears(age);
console.log(totalAdultYears);

// a function in an object is called method
let person={
    name:'MAX', //property
    greet(){ //Method
        console.log("Bhai");
    }
};

person.greet();
