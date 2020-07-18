//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("<h4>//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</h4>")
var a =10;
document.write("The value of a is: "+a+"<br>");
document.write(".................<br><br>");

document.write("The value of ++a is: "+(++a)+"<br>");
document.write("The value of a is: "+(a)+"<br><br>");

document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a++ is: "+(a)+"<br><br>");

document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+(a)+"<br>");

document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+(a)+"<br><br>");

//2. What will be the output in variables a, b & result after execution of the following script:
document.write("<h4>2) What will be the output in variables a, b & result after execution of the following script:</h4>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("if a = 2 and b = 1 <br>--a - --b + ++b + b-- =?<br>--a = 1 //pre-decrement<br>--b = 0 //pre-decrement<br>++b = 1 //pre-increment<br>b-- = 1 //post-decrement<br>--a - --b + ++b + b-- = 1-0+1+1 = 3<br><br>");

//3. Write a program that takes input a name from user & greet the user.
var name = prompt("What's your name?");
alert("Welcome "+name+"!");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h4>5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.</h4>");
var table = prompt("Write a number to print it's table:");
if(table!=null)
{
    for(var i=1;i<=10;i++)
    document. write(table+" x "+i+"="+(table * i)+"<br>");
}
else
{
    for(var i=1;i<=10;i++)
    document. write("5 x "+i+"="+(5 * i)+"<br>"); 
}

//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
var s1 = prompt("Your 1st subject: ");
var s2 = prompt("Your 2nd subject: ");
var s3 = prompt("Your 3rd subject: ");
//b) Total marks for each subject is 100, store it in another variable
var ts1 = 100;
var ts2 = 100;
var ts3 = 100;
//c) Take obtained marks for first subject from user and stored it in different variable.
var oms1 = +prompt("Your obtained marks in 1st subject: ");
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var oms2 = +prompt("Your obtained marks in 1st subject: ");
var oms3 = +prompt("Your obtained marks in 1st subject: ");
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<h4>6. Take:Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)</h4> ");
var tmarks = (ts1+ts3+ts3);
var tomarks= (oms1+ oms2+ oms3);
var ps1 = ((oms1/ts1)*100);
var ps2 = ((oms2/ts2)*100);
var ps3 = ((oms3/ts3)*100);
var percentage = (tomarks/tmarks)*100;
document.write("<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+s1+"</td><td>"+ts1+"</td><td>"+oms1+"</td><td>"+ps1+"%</td></tr><tr><td>"+s2+"</td><td>"+ts2+"</td><td>"+oms2+"</td><td>"+ps2+"%</td></tr><tr><td>"+s3+"</td><td>"+ts2+"</td><td>"+oms3+"</td><td>"+ps3+"%</td></tr><tr><td>"+"</td><td>"+tmarks+"</td><td>"+tomarks+"</td><td>"+percentage+"%</td></tr></table><br>");

