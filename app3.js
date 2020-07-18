//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age="23";
alert("I am "+age+" years old.")

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page.
var timesvisit = 14;
alert("You have visited this site "+timesvisit+" times.")

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser
document.write("<h4>3) Declare a variable called birthYear & assign to it your birth year.</h4>");
var birthyear=1997;
document.write("My birth year is "+birthyear+"<br>");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
document.write("<h4>4) Write a script to store in variables the following information:</h4>");
var visitor = prompt("Dear visitor what's your name?");
var productTitle = prompt("Which product you want to order?");
var quantity = prompt("How many products you want to order?");
document.write(visitor+ " ordered "+productTitle+ quantity+" from XYZ clothing store.");
