//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
var city = prompt("In which city do you live?");
if(city==="karachi")
{
    alert("Welcome to the city of lights!");
}
else
{
    alert("Welcome!");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("What's your gender?");
if(gender==="male")
{
    alert("Good Morning Sir");
}
else if(gender==="female")
{
    alert("Good Morning Madam");
}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("What is the color of traffic signal: ");
if(color==="red")
{
    alert("Must stop!");
}
else if(color==="yellow")
{
    alert("Ready to move!");
}
else if(color==="green")
{
    alert("Move now!");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var rfuel=prompt("How much Petrol is left in your car?");
if(rfuel<=0.25)
{
    alert("“Please refill the fuel in your car”");
}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if (c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//6. Show the total marks, marks obtained, percentage, grade & remarks like:
var oms1 = +prompt("Your obtained marks in 1st subject: ");
var oms2 = +prompt("Your obtained marks in 2nd subject: ");
var oms3 = +prompt("Your obtained marks in 3rd subject: ");
var tomarks= (oms1+ oms2+ oms3);
var ts1 = 100;
var ts2 = 100;
var ts3 = 100;
var tmarks = (ts1+ts3+ts3);
var percentage = (tomarks/tmarks)*100;
var grade,remarks;
if(percentage>=80)
{
    grade="A-one";
    remarks="Excelent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B";
    remarks="You need to improve.";
}
else if(percentage<60)
{
    grade="Fail";
    remarks="Sorry";
}
document.write("<h4>Marks Sheet</h4><br><br>");
document.write("Total Marks: "+tmarks+"<br>");
document.write("Obtained Marks: "+tomarks+"<br>");
document.write("Percentage: "+percentage+"<br>");
document.write("Grade: "+grade+"<br>");
document.write("Remarks: "+remarks+"<br>");

//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
var x=6,y=7;
var s= +prompt("Guess the secret number:");
if(s===x)
{
    alert("Bingo! Correct answer.");
}
else if(s===y)
{ 
    alert("Close enough to the correct answer");
}
else if(s!=(x,y))
{
    alert("You lost!");
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var num=+prompt("Enter a number to check divisibility by 3: ");
if(num%3===0)
{
    alert("Your entered number is divisible by 3.");
}
else
{
    alert("Your entered number is not divisible by 3.");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
var input=prompt("Enter a number to check it's Even or odd: ")
if(input%2===0)
{
    alert("It's even.");
}
else
{
    alert("It's odd.");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria
var T=prompt("What's the temperature today?");
if(T>40)
{
    alert("It is too hot outside");
}
else if(T>30)
{
    alert("The Weather today is Normal.");
}
else if(T>20)
{
    alert("Today’s Weather is cool.");
}
else if(T>10)
{
    alert("OMG! Today’s weather is so Cool.");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
var a = prompt("Calculator for +,-,*, / & %/nWrite the first number: ");
var b = prompt("Calculator for +,-,*, / & %/nWrite the second number: ");
var op=prompt("Calculator for +,-,*, / & %/nWhat operation you want to run?(+,-,*,/,%)");
if(op==="+")
{
    var c = (a + b);
    +alert("Answer is: "+c);
}
else if(op==="-")
{
    var c = (a - b);
    +alert("Answer is: "+c);
}
else if(op==="*")
{
    var c = (a * b);
    +alert("Answer is: "+c);
}
else if(op==="/")
{
    var c = (a / b);
    +alert("Answer is: "+c);
}
else if(op==="%")
{
    var c = (a % b);
    +alert("Answer is: "+c);
}