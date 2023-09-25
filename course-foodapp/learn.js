// function createAlertViaDOM(message){
// /* <div class="alert">
// <strong>✅successfully!</strong>food is updated!
// </div> */


// const main=document.getElementById("main");

// //creating div element
// const div=document.createElement("div");

// const textNode=document.createTextNode(message);


//  //assigning classname
// div.className= "alert";

// //append
// div.append(textNode);

 
// main.prepend(div);

// }
// createAlertViaDOM("food is updated!");





//how to get/set contents via DOM using javascript.
//textContent
//innerText
//innerHTML



// const alertEl=document.querySelector(".alert .alert-message");
// console.log(alertEl);

// //document fragment
// const foodcontainerEl=document.getElementById("food-container");
// console.time("documentFragment way");
// const fragment=document.createDocumentFragment();

// for(let i=1;i<=1000;i++){
//     const li=document.createElement("li");
//     li.textContent=`food item: ${i}`;
//     li.className="food-item";
//     fragment.append(li);
// 
// foodcontainerEl.append(fragment);
// console.timeEnd("documentFragment way");


// const icecream=["chocolate","vennila","stawberry"];

// const foodfragment=document.createDocumentFragment();

// icecream.forEach((food)=>{
//     const li=document.createElement("li");
//     li.textContent=food;
//     li.className="food-item";

// foodfragment.append(li)

// })

// foodcontainer.append(foodfragment);


//  const foodcontainerEl=document.getElementById("food-container");

// const li=document.createElement("li");
//     li.textContent="maggi";
//     li.className="food-item";

//     foodcontainerEl.append(li);



// foodcontainerEl.insertAdjacentHTML("afterbegin","<li>food items</li>");
// foodcontainerEl.insertAdjacentHTML("afterend","food items");



// foodcontainerEl.insertAdjacentHTML("beforebegin","<h1>food</h1>");
// foodcontainerEl.insertAdjacentHTML("beforeend","<h1>food</h1>");


// foodcontainerEl.insertAdjacentText("afterbegin","<li>food items</li>")




// const foodcontainerEl=document.getElementById("food-container");
// const li=document.createElement("li");
// li.textContent="new list";
// li.className="food-item";

// foodcontainerEl.insertAdjacentHTML("afterbegin","food items");



// const foodcontainerEl=document.querySelector("#food-container");

// const sambarli=document.querySelector(".food-container :first-child");
// console.log(sambarli)
// const li=document.createElement("li");
// li.textContent="special sambar";
// li.className="food-item";

// sambarli.replaceWith(li);(replacewith=> replace one element only)

// const maagi=document.createElement("li")
// maagi.textContent="maagi";
// maagi.className="food-item";


// const egg=document.createElement("li")
// egg.textContent="eggs";
// egg.className="food-item";

// foodcontainer.replaceChildren(maagi,egg);




// const foodcontainerEl=document.querySelector("#food-container");

// //clonenode(false)only clones the top element   .False is default

// const clonedata=foodcontainerEl.cloneNode();

// //clonenode(true)clones all the element and its subtree
// const clonedatatrue=foodcontainerEl.cloneNode(true);



// console.log(clonedata);
// console.log(clonedatatrue);


// const foodcontainerEl=document.querySelector("#food-container");
// const duplicateEl=document.getElementById("duplicate");
// const resyncbtn=document.getElementById("resyncbtn");
// // const clonedatatrue=foodcontainerEl.cloneNode(true);

// // duplicateEl.append(clonedatatrue);


// resyncbtn.addEventListener("click",() => {
//     const clonedatatrue=foodcontainerEl.cloneNode(true);
//     duplicateEl.innerHTML="";
// duplicateEl.append(clonedatatrue);

// })








