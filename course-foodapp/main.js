//how to select DOM elements

//1.getElementById()
//2.getElementByClassName()
//3.getElementByTagName()                  } METHODS
//4.finding Elements by CSS selectors
//5.queryselectors and queryselectorAll(DOM queryselector)   




let inputfood=document.getElementById("input-food");
let inputbutton=document.getElementById("input-button");
let foodcontainer=document.getElementById("food-container");

inputbutton.addEventListener("click",() => {
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
}); 

{/* <li class="food-item">
      <div>rasam</div>
      <div onclick="removeItem(event)">
        <i class="fa-solid fa-xmark"></i>
      </div>  
     </li> */}


//getelementbyclassname
//let fooditems=foodcontainer.getElementsByClassName("food-item");
//console.log(fooditems)
//let allfoods=[].map.call(fooditems, (food)=>food.textContent);
//console.log(allfoods);



//getelementbytagname
//const fooditemsEl=document.getElementsByTagName("li");



//queryselectors
//const result=document.querySelector("li")
//const result=document.querySelectorAll("li")
//console.log(result[0].innerText);


function removeItem(event){
 let existinglist= event.target.parentNode.parentNode
// alert('you have been clicked')
existinglist.remove();
}
