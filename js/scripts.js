{
    const list = document.querySelector("section>ul");
    
    const item = document.querySelector(".item");
    const input = document.querySelector("input");
    const a = document.querySelector("a");
    const error = document.querySelector("#error-output");
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
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
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
            var txt = document.createTextNode("Delete");
            span.className = "close";
            span.appendChild(txt);
            newListItem.appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }

    });

}