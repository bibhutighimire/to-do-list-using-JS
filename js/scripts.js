{
    

    const list = document.querySelector("section>ul");
    

    const input = document.querySelector("input");
    const a = document.querySelector("a");
    const error = document.querySelector("#error-output");
    let itemArray = [];



    // creating a delete and complete button on active to do list  and append it to each list item
    var myNodelist = document.getElementsByTagName("li");

    var j;

    for (j = 0; j < myNodelist.length; j++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Complete");
        span.className = "complete";

        var span1 = document.createElement("SPAN1");
        var txt1 = document.createTextNode("Delete");
        span1.className = "close";

    }
   

    // Click on a delete button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            console.log(closec);
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    const asidelist = document.querySelector("aside>ul");   

    let asideArray = [];
// Click on a complete button to hide the active to do to completed to do
    var complete = document.getElementsByClassName("complete");
    var i;
    for (i = 0; i < complete.length; i++) {
        complete[i].onclick = function () 
        {
            
            var div = this.parentElement;
            div.style.display = "none";   
            let asidelist = document.createElement("li");
            asidelist.innerText = div.value;
            asideArray.push(div.value);           
            list.appendChild(asidelist);         
        }
    }
  
    a.addEventListener("click", () => {
        // Keep track of if the current submission has an error.
        let errors = false;
        // If the input is empty.
        if (input.value.trim() === "") {
            error.innerText = "Sorry, please ensure you enter an item before attempting to add it.";
            errors = true;
        }
        // If the input already exists.
        if (itemArray.includes(input.value.trim().toLowerCase())) {
            error.innerText = "Sorry, please ensure that the item you have entered is not already on your list.";
            errors = true;
        }
        if (!errors) 
        { 
          
            // Clear any errors from previous submissions if this one is valid.
            error.innerText = "";

            let newListItem = document.createElement("li");
            newListItem.innerText = input.value.trim();

            itemArray.push(input.value.trim().toLowerCase());
            // Using Date() method 

            if (list.className === "empty")
            {
                // 3a. If it is the first item, remove the empty class from
                // the list.
                list.classList.remove("empty");
            
                // 3b. If it is the first item, remove the "No items yet!" item.
                // If the list still has the empty class, it should only
                // have the "no items" li.
                list.children[0].remove();

            }
            list.appendChild(newListItem);
            input.value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("Complete");
            span.className = "complete";
            
            var span1 = document.createElement("SPAN1");
            var txt1 = document.createTextNode("Delete");
            span1.className = "close";

            //this will display complete button on active to-do list
            span.appendChild(txt);
            newListItem.appendChild(span);
            //this will display delete button on active to-do list
            span1.appendChild(txt1);
            newListItem.appendChild(span1);

            for (i = 0; i < close.length; i++) {

                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }

            for (i = 0; i < complete.length; i++) {
                complete[i].onclick = function () 
                {
                  
                    var div = this.parentElement;
                    div.style.display = "none";  
                    
                    
                    let asidelistItem = document.createElement("li");

                    asidelistItem.innerText = this.parentElement.value;
                    asideArray.push(this.parentElement.value);           
                    asidelist.appendChild(asidelistItem);        
                }
            }

        }

    });

}