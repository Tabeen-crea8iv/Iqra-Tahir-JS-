//1. Show an alert box on click on a link.
function popup()
{
    alert("Welcome to our Website!");
}
//2. Display some Mobile images in browser.
function cpoPup()
{
    alert("Thanks for buying from us!");
}
//3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted. 
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }
//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.