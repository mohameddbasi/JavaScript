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
  foodcontainer.append(inputfood.value)
}); 


//let fooditems=foodcontainer.getElementsByClassName("food-item");
//console.log(fooditems)
//let allfoods=[].map.call(fooditems, (food)=>food.textContent);
//console.log(allfoods);

//const fooditemsEl=document.getElementsByTagName("li");




//const result=document.querySelector("li")
const result=document.querySelectorAll("li")
console.log(result[0].innerText);
