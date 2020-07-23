//1. Create a signup form and display form data in your web page on submission.

//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
//3. In previous assignment you have created a tabular data using javascript
