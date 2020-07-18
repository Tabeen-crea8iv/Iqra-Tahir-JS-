//1. Declare an empty array using JS literal notation to store student names in future.
var studentnames=["","",""];

//2. Declare an empty array using JS object notation to store student names in future.
var studentnames={
    FirstName:"",
    LastName:"",
    DOB:""
}

//3. Declare and initialize a strings array.
var stringArray =["I","am","a","string","array"];

//4. Declare and initialize a numbers array.
var numberArray =[1,2,3,4];

//5. Declare and initialize a boolean array.
var booleanArray=[true,false];

//6. Declare and initialize a mixed array.
var mixedArray=[1,"is","not","even",true];

//7. Declare and Initialize an array and store available education qualifications in Pakistan 
document.write("<h4>7). Declare and Initialize an array and store available education qualifications in Pakistan </h4>");
var qArray=[" SSC"," HSC", "BCS","BS"," BCOM"," MS"," M. Phil.", "PhD"];
document.write("<h4>Qualifications:</h4>");
document.write("1)."+qArray[0]+"<br>2)."+qArray[1]+"<br>3)."+qArray[2]+"<br>4)."+qArray[3]+"<br>5)."+qArray[4]+"<br>6)."+qArray[5]+"<br>7)."+qArray[6]+"<br>8)."+qArray[7]+"<br>");

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
var studentnames=["Michael","John","Tony"];
var scores=[320,230,480];
var tmarks=500;
var ps1=(scores[0])/tmarks;
var ps2=(scores[1])/tmarks;
var ps3=(scores[2])/tmarks;
document.write("<h4>8). Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like: </h4>");
document.write("Score of Michael is "+scores[0]+".Percentage is "+ps1+".<br>")
document.write("Score of Michael is "+scores[1]+".Percentage is "+ps2+".<br>")
document.write("Score of Michael is "+scores[2]+".Percentage is "+ps3+".<br>")

//9. Initialize an array with color names. Display the array elements in your browser.

var colorArray =["red","green","blue"];
document.write("<h4>9). Initialize an array with color names. Display the array elements in your browser.</h4>");
document.write("<h4>Color Array:</h4>");
document.write(colorArray);
var begin=prompt("What color you want to enter to beginning of colo array?");
colorArray.unshift(begin);
document.write("<br>Now the Array is:<br>"+colorArray);
var end=prompt("What color you want to enter to end of color array?");
colorArray.push(end);
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.unshift("orange","violet");
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.shift(0);
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.pop(5);
document.write("<br>Now the Array is:<br>"+colorArray);
var wishNo=prompt("At which index you want to add a color?");
var wish=prompt("And at index "+wishNo+" color name?");
colorArray[wishNo]=wish;
document.write("<br>Now the Array is:<br>"+colorArray);
var wishD=prompt("At which index you want to remove a color?");
colorArray.splice(wishD);
document.write("<br>Now the Array is:<br>"+colorArray);

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.write("<h4>10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h4>");
var Sscore=[200,320,500,400,100];
document.write("<br>Array is:<br>"+Sscore);
Sscore.sort();
document.write("<br>Now the Array is:<br>"+Sscore);

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<h4>11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array</h4>");
var cityName=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>cityName Array is:"+cityName);
var selectedCities =cityName.slice(3,4);
document.write("<br>selectedCities Array is:"+selectedCities);

//12. Write a program to create a single string from the below mentioned array:
document.write("<h4>Write a program to create a single string from the below mentioned array:</h4>");
var arr = ["This", "is", " my ", "cat"];
document.write(arr.join(" "));

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out:<br>"+fifoArray[0]);
fifoArray.shift();
document.write("Out:<br>"+fifoArray[1]);
fifoArray.shift();
document.write("Out:<br>"+fifoArray[2]);
fifoArray.shift();
document.write("Out:<br>")+fifoArray[3];
fifoArray.shift();

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
document.write("<h4>14). Create a new array. Store values one by one in such a way that you can access the values in reverse order.</h4>");
var lifoArray=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out:<br>"+lifoArray[3]);
lifoArray.pop();
document.write("Out:<br>"+lifoArray[2]);
lifoArray.pop();
document.write("Out:<br>"+lifoArray[1]);
lifoArray.pop();
document.write("Out:<br>")+lifoArray[0];
lifoArray.pop();

//15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in yourbrowser using document.write() method
document.write("<h4>15). Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in yourbrowser using document.write() method</h4>")
var select = ("selectNumber");
var options = ["Apple", "Samsung", "Nokia", "Motorola", "Sony","Haier"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    document.write(opt);
}


