//how to select DOM elements

//1.getElementById()
//2.getElementByClassName()
//3.getElementByTagName()                   } METHODS
//4.finding Elements by CSS selectors
//5.queryselectors and queryselectorAll(DOM queryselector)   




let inputfood=document.getElementById("input-food");
let inputbutton=document.getElementById("input-button");
let foodcontainer=document.getElementById("food-container");

inputbutton.addEventListener("click",() => {
//foodcontainer.innerHTML += `<li class="food-item"> ${inputfood.value.toUpperCase()}</li>`;
const li=document.createElement("li");
const text=document.createTextNode(inputfood.value);

const command=document.createComment("creating a li");

//assigning classname
li.className="food-item";

//append
li.append(text);
li.append(command)
foodcontainer.append(li)
}); 

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
