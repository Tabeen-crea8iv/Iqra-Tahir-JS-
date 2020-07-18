//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
var char= prompt("Enter a character: "); 
var index=0;
var code=char.charCodeAt(index);
if(code>=65 && code<=90)
{
alert(char+" is a Upper Case Alphabet.");
}
else if(code>=97 && code<=122)
{
alert(char+" is a Lower Case Alphabet.");
}
else if(code>=48 && code<=57)
{
alert(char+" is a Number.");
}

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var x = +prompt("Enter a digit: ");
var y = +prompt("Enter another digit: ");
if(x>y)
{
    alert(x+" is greater than "+y);
}
else if(x<y)
{
    alert(x+" is less than "+y);
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = prompt("Enter a number:");
var code=num.charCodeAt(0);
if(code===43)
{
    alert(num+" is a positive number.");
}
else if(code===45)
{
    alert(num+" is a negative number.");
}
else if(code===48)
{
    alert(num+" is zero.");
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character=prompt("Enter an alphabet");
var vowel=character.charCodeAt(0);
if(vowel===65 && vowel===97 && vowel===69 && vowel===101 && vowel===79 && vowel===111 && vowel===85 && vowel===117)
{
    alert(character+" is a vowel!");
}
else
{
    alert(character+" is not a vowel!");
}

//5. Write a program that
//a. Store correct password in a JS variable.
var password=123;
var userpassword=prompt("Please Enter your password:");
if(userpassword===null)
{
    alert("Please enter password!");
}
else if(userpassword===password)
{
    alert("Correct! The password you entered matches the original password!");
}
else if(userpassword!=password)
{
    alert("Incorrect password!");
}

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else
{greeting = "Good evening";}

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time=prompt("What's time is it according to 24-hr clock?","e.g: 1900=7pm");
if(time>=0000 && time<=1200)
{
    alert("Good Morning!");
}
else if(time>=1200 && time<1700)
{
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening!");
}
else if(time>=2100 && time<=2359)
{
    alert("Good Night!");
}



