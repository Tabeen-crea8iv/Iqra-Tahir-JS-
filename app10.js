document.write("Assignment No.10");

//1. Declare and initialize an empty multidimensional array.
document.write("<h4>1). Declare and initialize an empty multidimensional array.</h4>")
var emptyMultidimensionalArray =[];
document.write(emptyMultidimensionalArray);

//2. Declare and initialize a multidimensional array representing the following matrix:
document.write("<h4>2). Declare and initialize a multidimensional array representing the following matrix:</h4>");
var multidimensionalArray =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(multidimensionalArray[0]+"<br>"+multidimensionalArray[1]+"<br>"+multidimensionalArray[2]+"<br>");

//3. Write a program to print numeric counting from 1 to 10.
document.write("<br><h4>3). Write a program to print numeric counting from 1 to 10.</h4>");
for(var num=0;num<=10;num++)
{
document.write(num+"<br>");
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write("<h4>4). Write a program to print multiplication table of any number using for loop.</h4>");
var input=+prompt("Enter a number whose table you want to write:");
var length=+prompt("Enter length of number whose table you want to write:");
for (var i = 1; i <= length; i++) 
document. write(input+" x "+(i)+"="+(input * i)+"<br>");

//5. Write a program to print items of the following array using for loop:
document.write("<h4>5). Write a program to print items of the following array using for loop:</h4>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<=fruits.length;i++)
{
    document.write(i+"<br>");
}

//6. Generate the following series in your browser. See example output.
document.write("<h4>6).Generate the following series in your browser.</h4>");
document.write("Counting 1-15  :");
for(var num=0;num<=15;num++)
{
document.write(num);
}

document.write("<br>Even numbers  :");
for(var num=0;num<=20;num++)
{
    if(num&2===0){
document.write(num);
    }
}
document.write("<br>Odd numbers  :");
for(var num=0;num<=20;num++)
{
    if(num&2!=0){
document.write(num);
    }
}


//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
document.write("<h4>7).Write a program to enable “search by user input” in an array.</h4>");
var A=["cake","apple pie","cookie","chips","patties"];
var order=prompt("Welcome to ABC Bakery.What you wanna order?");
for(var i=0;i<=A;i++){
if(order in A)
{
    alert("You order is available at index"+A[i]);
}
else
{
    alert("Your order is not available.Sorry!");
}
}

//8. Write a program to identify the smallest number in the given array.
document.write("<h4>8). Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].</h4>")
var A = [24, 53, 78, 91, 12];
var max=Math.max.apply(Math,A);
document.write("Largest number is: "+max);


//9. Write a program to identify the smallest number in the given array.
document.write("<h4>9). Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12];</h4>")
var A = [24, 53, 78, 91, 12];
var min=Math.min.apply(Math,A);
document.write("Smallest number is: "+min);

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h4>10. Write a program to print multiples of 5 ranging 1 to 100.</h4>");
for(var i=1;i<=100;i++)
{
    if(i%5===0)
    {
        document.write(i+"<br>");
    }
}
