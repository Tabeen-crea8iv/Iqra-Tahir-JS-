//Assignment 38-42
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function raisedToPow(){
    var a=prompt("Please Enter a number:");
    var b=prompt("Please enter another number:");
    var c=Math.pow(a,b);
    alert("a raised to power b is equal to: "+c);
    }
    raisedToPow();
    //2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
    function leapYear(){
        var leap=prompt("Please Enter a Year: ");
        if((leap%4==0) && (leap%100!=0) || (leap%400==0))
        {
            alert(leap+" is a leap year!");
        }
        else{
            alert(leap+" is not a leap year!")
        }
    }
    leapYear();
    //3. If the lengths of the sides of a triangle are denoted by a, b, and c,
    function St(){
        var a=+prompt("Please enter length of one side of triangle:");
        var b=+prompt("Please enter length of second side of triangle:");
        var c=+prompt("Please enter length of third side of triangle:");
        var S=((a+b+c)/2);
        function Ar(){
            var area=(S*(S-a)*(S-b)*(S-c));
            alert("Area of triangle is: "+area);
        }
        Ar(S,a,b,c);
        }
        St();
    
    //4. Write a function that receives marks received by a student in 3 subjects 
    function resultCard(){
        var s1=+prompt("Total Marks:100,Your marks in 1st subject: ");
        var s2=+prompt("Total Marks:100,Your marks in 2nd subject: ");
        var s3=+prompt("Total Marks:100,Your marks in 3rd subject: ");
        function aver(){
             var av=(s1+s2+s3)/3;
             alert("Your percentage is: "+av);
            }
            aver(s1,s2,s3);
        function perc(){
            var per=(s1+s2+s3)/300;
            alert("Your average marks are: "+per+"%");
        }
        perc(s1,s2,s3);
    }
    resultCard();
    //5. You have learned the function indexOf. Code your own custom function
    function indexOf()
    {
        var word=prompt("Please enter a word: ");
        if(word!=null)
        {
        alert("The index of "+word+" is: 0");
        }
        else
        {
            alert("You haven't enter a word! ");
        }
    }
    indexOf();
    //6. Write a function to delete all vowels from a sentence.
    function delVowels()
    {
      var string="I am a Muslim girl.";
      alert(string);
      var vow=[a,e,i,o,u];
      if(string.includes(vow))
      {
          var aft=string.remove(vow);
          alert("After removing vowels, the sentence is:"+aft);
      }
      else{
        alert("After removing vowels, the sentence is:"+aft);
      }
    }
    delVowels();
    
    
    