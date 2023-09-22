function createAlertViaDOM(message){
/* <div class="alert">
<strong>✅successfully!</strong>food is updated!
</div> */

console.log("Hello world")

const main=document.getElementById("main");

//creating div element
const div=document.createElement("div");

const textNode=document.createTextNode(message);


 //assigning classname
div.className= "alert";

//append
div.append(textNode);

 
main.prepend(div);

}
createAlertViaDOM("food is updated!");

