/**
 * Represents a single task in a ToDo list.
 */
class ToDoItem {
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
   // subTasks:Array<ToDoItem>;  (Advanced Concept - Aggregate/Composition)
}

/*
let testItem = new ToDoItem();
testItem.title = "Teach CPW 203";
testItem.description = "100pm - 300pm";
testItem.startDate = new Date("April 30th, 2019");
testItem.isComplete = true;
if(testItem.isComplete){}
*/

window.onload = function() {
    let addBtn = <HTMLButtonElement>
        document.querySelector("#create-item > button");
        addBtn.onclick = processNewItem;

        let readItemBtn =<HTMLElement> document.querySelector("#read-item > button");
        readItemBtn.onclick = readItem;
}

const itemKey:string = "todo";
function readItem(){
    //get item from storage
    let item:ToDoItem = JSON.parse(localStorage.getItem("itemKey"));

    // display data
    alert(item.title);
    alert(item.description);
} 

function getItemFromForm():ToDoItem{
    let item = new ToDoItem();
    item.title = (<HTMLInputElement>document.getElementById("title")).value;
    item.description = (<HTMLInputElement>document.getElementById("description")).value;

    let itemStartDate:string  = (<HTMLInputElement>document.getElementById("start-date")).value;
    item.startDate = new Date(itemStartDate);

    let itemEndDate:string  = (<HTMLInputElement>document.getElementById("end-date")).value;
    item.endDate = new Date(itemEndDate);

    item.isComplete = (<HTMLInputElement>document.getElementById("is-complete")).checked;

    let urgencyElem = (<HTMLSelectElement>document.getElementById("urgency"));
    item.urgency = urgencyElem.options[urgencyElem.selectedIndex].text;

    return item;
}

function processNewItem() {
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}

function clearForm() {
    let textElements = document.querySelectorAll("input[type=text], textarea"); // get all input on form
    for (let index = 0; index < textElements.length; index++) {
        (<HTMLInputElement>textElements[index]).value = ""; // clear out text elements
    }

    // uncheck is complete
    let isCompleteBox = <HTMLInputElement>document.querySelector("#is-complete");   // the # is css mode.
    isCompleteBox.checked = false;

    // reset select list
    let urgencyList = (<HTMLSelectElement>document.querySelector("#urgency"));
    urgencyList.selectedIndex = 0;
}

function notifyUser() {
    alert("Your item was saved.");
}

function saveItem(item:ToDoItem):void {
    let data:string = JSON.stringify(item);
    console.log("Converting new item into JSON string");
    console.log(data);
    //ensure user can use localStorage
    if(typeof(Storage) != "undefined") {
        localStorage.setItem(itemKey, data);
    }
}