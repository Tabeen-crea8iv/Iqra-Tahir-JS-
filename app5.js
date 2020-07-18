//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<h4>1).Write a program that take two numbers & add them in a new variable.<h4>");
var a=5;
var b=10;
var c=a+b;
document.write("The sum of 5 and 10 is :"+c+"<br><br><br>");

//2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<h4>2).Repeat task1 for subtraction, multiplication, division & modulus.</h4>");
var d=a-b;
document. write("The subtraction of 5 and 10 is : "+d+"<br>");
var e=a*b;
document. write("The multiplication of 5 and 10 is : "+e+"<br>");
var f=a/b;
document.write("The division of 5 and 10 is : "+f+"<br>");
var g=b%3;
document. write("The modulus of 5 and 10 is : "+g+"<br><br><br>");

//3. Do the following using JS Mathematic Expressions
document.write("<h4>3).Do the following using JS Mathematic Expressions.<h4>");
//a. Declare a variable.
var a;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: ??<br>");

//c. Initialize the variable with some number.
var a=5;

//d. Show the value of variable in your browser like “Initial value: 5”.
document. write(`initial value : ${a}<br>`);

//e. Increment the variable
var b=++a;

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document. write(`after increment value :${b}<br>`);

//g. Add 7 to the variable.
var c=b+7;

//h. Show the value of variable in your browser like “Value after addition is: 13”.
document. write(`Value after addition of 7 is : ${c}<br>`);

//i. Decrement the variable
var b=--a;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document. write(`after decrement value :${b}<br>`);

//k. Show the remainder after dividing the variable’s value by 3. 
var b=a%3;

//l. Output : “The remainder is : 0”.
document. write(`after division remainder is :${b}<br><br><br>`);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
document.write("<h4>4).Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie..<h4>");
var tp1=600;
var tp6=tp1*5;
document. write(`Total cost to buy 5 tickets to a movie is ${tp6} PKR<br><br><br>`);

//5. Write a script to display multiplication table of any number in your browser.
document.write("<h4>5).Write a script to display multiplication table of any number in your browser.<h4>");
for (var i = 1; i <= 10; i++) 
document. write(`2x${i}=${2 * i}<br>`);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
document.write("<h4>6).The Temperature Converter:.<h4>");
var c=25;

//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var f=70;

//c. Now store a Fahrenheit temperature into a variable.
document.write(`<br><br><br>${c}&#8451 is ${(f - 32) * 5 / 9}&#8457<br>`);

//d. Convert it to Celsius & output “NNoF is NNoC”.
document.write(`${f}&#8457 is ${(c * 9 / 5) + 32}&#8451<br><br><br>`);


//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h4>7).Write a program to implement checkout process of a shopping cart system for an e-commerce website.<h4>");
document.write("<h1>"+"Shopping Cart"+"</h1>");
//a. Price of item 1
var p1=650;
document.write("Price of item#1 = Rs."+p1+"<br>");

//b. Price of item 2
var p2=100;
document.write("Price of item#2 = Rs."+p2+"<br>");

//c. Ordered quantity of item 1
var q1=prompt("How many of item#1 you want?");

//d. Ordered quantity of item 2
var q2=prompt("How many of item#2 you want?");

//e. Shipping charges
var s=100;
document.write("Shipping Charges= Rs."+s+"<br>");

//Compute the total cost & show the receipt in your browser
document.write(`Total cost of your order is = ${(p1 * q1) + (p2 * q2) + s}<br><br><br>`);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h4>8).Write a script to convert the total currency to Pakistani Rupees.<h4>");
document.write("<h1>"+"Marks Sheet"+"</h1>");
var tmarks=980;
var omarks=804;
document.write(`Total Marks = ${tmarks}<br>`);
document.write(`Total Marks = ${omarks}<br>`);
document.write(`Percentage = ${omarks/tmarks*100} % <br><br></br>`);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
document.write("<h4>9).Write a script to convert the total currency to Pakistani Rupees.</h4>");
document.write("<h1>"+"Currency in pkr"+"</h1>");
var usd1 = 104.8;
var sr1  = 28;
var usd = 10;
var sr = 25;
document.write("Total currency in pkr = Rs."+(usd*usd1+sr*sr1)+"<br><br><br>");

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5 
//b. Multiply by 10 
//c. Divide the result by 2 Perform all calculations in a single expression
document.write("<h4>10) Write a program to initialize a variable with some number and do arithmetic in following sequence: <br>a. Add 5 <br>b. Multiply by 10 <br>c. Divide the result by 2 <br>Perform all calculations in a single expression</h4>");
var a=5;
document.write("Result = "+(((a+5)*10)/2)+"<br><br></br>");

//11. The Age Calculator: Forgot how old someone is? Calculate it!
document.write("<h4>11) The Age Calculator: Forgot how old someone is? Calculate it!</h4>");
var cuurent_year=prompt("Current year: ");
var year_of_birth=prompt("Your year of birth: ");
var age=cuurent_year-year_of_birth ;
document.write("Your age is "+(age-1)+" or "+age+" years old."+"<br><br>");

//12. The Geometrizer: Calculate properties of a circle.
document.write("<h4>12).The Geometrizer: Calculate properties of a circle.</h4>");

//a. Store a radius into a variable.
var r=5;

//b. Calculate the circumference based on the radius, and output “The circumference is NN”. Calculate the area based on the radius, and output “The area is NN”.
document.write("Circumference is = "+(2*3.14*r)+"<br>");
document.write("Area is = "+(3.14*r*r)+"<br><br>");

//13. The Lifetime Supply Calculator:
document.write("<h4>13).The Lifetime Supply Calculator:</h4>");
//a. Store your favorite snack into a variable
var snack="Lays";
//b. Store your current age into a variable.
var current_age=23;
//c. Store a maximum age into a variable.
var maximun_age=70;
//d. Store an estimated amount per day (as a number)
var per_day=3;
//e. Calculate how many would you eat total for the rest of your life.
var t=((maximun_age-current_age)*365)*3;
document.write("You will need "+t+snack+" to last until the ripe old age of "+maximun_age+" years.<br>");


