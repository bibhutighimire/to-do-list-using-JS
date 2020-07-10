{

    const list = document.querySelector("section>ul");
    const input = document.querySelector("input");
    const a = document.querySelector("a");
    const error = document.querySelector("#error-output");
    let itemArray = [];



    // creating a date, delete and complete button on active to do list  and append it to each list item
    var myNodelist = document.getElementsByTagName("li");

    var j;
    const dateElement = document.getElementsByClassName("date");


    for (j = 0; j < myNodelist.length; j++) {
        //for date
        const today = new Date();
        var span2 = document.createElement("SPAN2");
        var txt2 = document.createTextNode(today.toLocaleTimeString());
        span2.className = "date";
        //for complete button
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Complete");
        span.className = "complete";
        //for delete button
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
    const asideulli = document.querySelector("aside>ul>li");
    let asideArray = [];
    // Click on a complete button to hide the active to do to completed to do
    var complete = document.getElementsByClassName("complete");
    var i;
    for (i = 0; i < complete.length; i++) {
        complete[i].onclick = function () {
            console.log("heeeee from complete");

            var div = this.parentElement;
            div.style.display = "none";
            let asidelist = document.createElement("li");
            asidelist.innerText = div.value;
            asideArray.push(div.value);
            list.appendChild(asidelist);
        }
    }

    var back = document.getElementsByClassName("back");
    var i;
    for (i = 0; i < back.length; i++) {
        back[i].onclick = function () {
            console.log('hi');
            var div = this.parentElement;
            div.style.display = "none";
            console.log(div);
            document.querySelector("section>ul").appendChild(document.createElement("li"));
            itemArray.push(div.value);
            document.querySelector("section>ul>li").appendChild(div.value);


            // var div = this.parentElement;
            // // div.style.display = "none";   
            //  let asidelist = document.createElement("li");
            //  asidelist.innerText = div.value;
            // itemArray.push(div.value);           
            // list.appendChild(div);         
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
        if (!errors) {

            // Clear any errors from previous submissions if this one is valid.
            error.innerText = "";

            let newListItem = document.createElement("li");
            newListItem.innerText = input.value.trim();

            itemArray.push(input.value.trim().toLowerCase());
            // Using Date() method 

            if (list.className === "empty") {
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

            const today = new Date();
            var span2 = document.createElement("SPAN2");
            var txt2 = document.createTextNode("Start: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " , " + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
            span2.className = "date";



            //     var span2 = document.createElement("SPAN2");
            // const today=new Date();
            // //dateElement.innerHTML=today.toLocaleDateString();
            // dateElement.innerHTML = today.toString();
            // span2.className = "date";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("Complete");
            span.className = "complete";

            var span1 = document.createElement("SPAN1");
            var txt1 = document.createTextNode("Delete");
            span1.className = "close";

            var span5 = document.createElement("SPAN5");
            var txt5 = document.createTextNode("Edit");
            span5.className = "edit";


            span2.appendChild(txt2);
            newListItem.appendChild(span2);

            //this will display complete button on active to-do list
            span.appendChild(txt);
            newListItem.appendChild(span);
            //this will display delete button on active to-do list
            span1.appendChild(txt1);
            newListItem.appendChild(span1);

            span5.appendChild(txt5);
            newListItem.appendChild(span5);

            for (i = 0; i < close.length; i++) {

                close[i].onclick = function () {

                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }

            let selected = document.querySelector("aside>ul>li");
            for (i = 0; i < complete.length; i++) {
                complete[i].onclick = function () {
                    var sectionorigin = this.parentElement;
                    let asidelistItem = document.createElement("li");

                    //appending end date        
                    var span3 = document.createElement("SPAN3");
                    const today = new Date();
                    var txt3 = document.createTextNode("End: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " , " + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
                    console.log(txt3.parentElement);
                    span3.className = "date";
                    span3.appendChild(txt3);
                    sectionorigin.appendChild(span3);

                    var span4 = document.createElement("SPAN4");
                    var txt4 = document.createTextNode("Back");
                    span4.className = "back";
                    span4.appendChild(txt4);
                    sectionorigin.appendChild(span4);
                    asidelistItem.innerText = document.createTextNode(sectionorigin.children[1].remove());
                    asidelistItem.innerText = document.createTextNode(sectionorigin.children[2].remove());
                    asideArray.push(sectionorigin.value);
                    asidelist.appendChild(sectionorigin);


                    for (i = 0; i < back.length; i++) {
                        back[i].onclick = function () {
                            console.log("back inside aside");
                            let ck = document.createElement("li");
                            var backli = this.parentElement;

                            // ck.innerText =document.createTextNode(backli.children[2].remove());
                            // ck.innerText =document.createTextNode(backli.children[3].remove()); 

                            itemArray.push(backli.value);

                            list.appendChild(backli);


                            // var div = this.parentElement;
                            // // div.style.display = "none";   
                            //  let asidelist = document.createElement("li");
                            //  asidelist.innerText = div.value;
                            // itemArray.push(div.value);           
                            // list.appendChild(div);         
                        }
                    }
                }
            }
        }
    });

}