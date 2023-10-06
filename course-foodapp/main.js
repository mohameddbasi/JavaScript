//how to select DOM elements

//1.getElementById()
//2.getElementByClassName()
//3.getElementByTagName()                  } METHODS
//4.finding Elements by CSS selectors
//5.queryselectors and queryselectorAll(DOM queryselector)   




let inputfood=document.getElementById("input-food");
let inputbutton=document.getElementById("input-button");
let foodcontainer=document.getElementById("food-container");

const handleInputfood=()=>{

//foodcontainer.innerHTML += `<li class="food-item"> ${inputfood.value.toUpperCase()}</li>`;
let newfoodEl=document.createElement("li");
const divItem=document.createElement("div");
const divremovebtn=document.createElement("div")

newfoodEl.append(divItem,divremovebtn);


divremovebtn.parentElement.setAttribute("onclick", "removeItem(event)")
divremovebtn.innerHTML= '<i class="fa-solid fa-xmark"></i>';
//assigning classname
divItem.textContent=inputfood.value;
newfoodEl.className="food-item";

//append

foodcontainer.append(newfoodEl);
newfoodEl.append(divItem);
newfoodEl.append(divremovebtn);
}; 
inputbutton.addEventListener("click",handleInputfood);

inputfood.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        handleInputfood();
    }else if(event.key==="keyZ" && (event.ctrlKey || event.metaKey)){
        inputfood.value="";
    }
});




//remove
function removeItem(event){
 const existinglist= event.target.parentNode.parentNode;
 //console.log("logging event",event.target.parentNode.parentNode); //>>>>>>>>>
// alert('you have been clicked')
//existinglist.classList.add("hide");     //>>>>>animation not working??????
existinglist.remove();                             //newway
//existinglist.parentNode.removeChild(existinglist);  //oldway
}



