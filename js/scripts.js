{
const list=document.querySelector("section>ul");
console.log(list);
const item=document.querySelector(".item"); 
const input=document.querySelector("input");     
const a = document.querySelector("a"); 
let itemArray = [];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

a.addEventListener("click",()=>
{

    
    let newListItem = document.createElement("li");
    newListItem.innerText = input.value.trim();

    itemArray.push(input.value.trim().toLowerCase());
    list.appendChild(newListItem);
    input.value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
    span.className = "close";
    span.appendChild(txt);
    newListItem.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }


});

}