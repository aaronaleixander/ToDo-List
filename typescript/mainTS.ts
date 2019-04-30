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