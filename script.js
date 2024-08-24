//Conditionals in JavaScript are used to execute different code based on whether a condition is true or false, typically using if, else if, else, or the ternary (? :) operator
//If Block
let A = 5;
if(A > 2){
    console.log("If Block"); //Here condition is true so if block will be executed.
}

//If-Else Block
let B = 4;
if(B > 5){
    console.log("If bolck")
}
else{
    console.log("Else Block"); //Here condition is false so else block is executed
}

//Else-If Block
let C = 1;
if(C > 5){
    console.log("If Block");
}
else if(C >4){
    console.log("Else If Block");
}
else if(C = 1){
    console.log("Else If Block"); //Here condition is true so else if block is executed
}
else{
    console.log("Else Block");
}

//Ternery Operator
let D = 1;
let result = D > 5 ? "True" : "False";
console.log(result);


//Concatenating Strings
console.log("Concatenating" + " " + "String");

//Mathematical Calculations
let radius = 5;
let circumference = 2 * Math.PI * radius; //Here Math.PI will give the value of PI which is 3.14
console.log(circumference);

//Arithmetic Operations
//1.Increment
let increment = 10;
increment++;//Increment sign ++
console.log(increment);//It will give the value 11

//2.Decrement
let decrement = 10;
decrement--;//Decrement sign --
console.log(decrement);//It will give value 9

//3.Exponentiation
let number_1 = 10;
let number_2 = 2;
console.log(number_1 ** number_2);//It will give 10 to the power 2 that is value 100 as ** represents exponentiation

//Unary Plus = Used to convert string to number
let num = 5;
let str = +"5";// + will convert string to number
console.log(num + str);

//Unary Negation = Used to change sign of variable
let num1 = 10;
let num2 = -num1;// - will convert positive number to negative
console.log(num2);

//In JavaScript, the logical AND operator (&&) is used to combine two expressions or conditions. It returns true only if both of the conditions are true. If either of the conditions is false, the entire expression will return false.
let a = 5;
let b = 10;
if(a > 10 && b >5 ){
    console.log("Block is Executed");//Here first condition of a is not satisifed hence block is not executed
}

//The logical OR operator (||) in JavaScript is used to combine two expressions or conditions. It returns true if at least one of the conditions is true. If both conditions are false, the entire expression will return false
let c = 5;
let d = 10;
if (c >10 || d > 5){
    console.log("Block is Executed");//Here second condition is satisfied so block will be executed
}


/*
The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined.
 It returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.
 */
let userName = null;
let displayName = userName ?? "Undefined User"; //Here userName is null so string next to it will be displayed
console.log(displayName);

