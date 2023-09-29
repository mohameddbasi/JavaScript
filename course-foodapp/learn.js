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



       //clone
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



//             //looping over DOM elements
// const foodcontainerEl=document.querySelectorAll(".food-container li");

// const foodItems=[];
// for(const item of foodcontainerEl){
//  foodItems.push(item.innerText)   
// }
// console.log(foodItems);




              //child DOM element
// const foodcontainerEl=document.querySelector("#food-container");
// const list=document.querySelectorAll("li");

// // querySelectorAll:nodelist
// console.log(list,list.length);

// //children:HTMLcollection
// console.log(foodcontainerEl.children);

// //childnodes:nodelist
// console.log(foodcontainerEl.childNodes);



// const foodcontainerEl=document.querySelector("#food-container");
// //firstchild/firstelementchild
// console.log(foodcontainerEl.firstChild);
// console.log(foodcontainerEl.firstElementChild.innerText);

// //lastchild/lastelementchild
// console.log(foodcontainerEl.lastChild);
// console.log(foodcontainerEl.lastElementChild.innerText);






              //parent DOM Elements
// const foodcontainerEl=document.querySelector("#food-container li");
// console.log(foodcontainerEl.innerText);
//  console.log(foodcontainerEl.closest("main"));

//  console.log(foodcontainerEl.parentNode);
//  console.log(foodcontainerEl.parentElement.parentElement);


//  console.log(document.body.parentNode);       //return <html> 
//  console.log(document.body.parentElement);   //return <html> 



//  console.dir(document.documentElement.parentNode); //the documentnode
//  console.dir(document.documentElement.parentElement);  //null 

//  console.log(document.nodeType);




      //siblingnDOM Elements
// const number=document.querySelector("ul:last-child li")
// console.log(number.innerText)
// console.log(number.nextSibling);
// console.log(number.nextElementSibling.innerText);

// console.log(number.previousSibling);
// console.log(number.previousElementSibling.innerText);



// const inputname=document.querySelector(".input-name-container input")
// const username=prompt("what is your age")

// // inputname.setAttribute("value",'username);
// const saveint=parseInt(inputname,username)
// // console.log(typeof inputname.value)
// console.log(typeof saveint);


    //task getattributes
// const inputname=document.querySelector(".input-name-container input");
// inputname.setAttribute("value","basith");
// const getplace=inputname.getAttribute("place");
// const getinterest=inputname.getAttribute("interest");
// console.log(getplace,getinterest);


     
// console.log(inputname.attributes);                     //list all attributes of that element
// console.log(inputname.attributes[5].name);            //attributes by index
// console.log(inputname.attributes.place.value);       //attributes by propertyname
// console.log(inputname.attributes["interest"].value);//attributes by bracket notation



// //method
// console.log(inputname.hasAttribute("age"));  //check for attributes existance :trur/false
// inputname.removeAttribute("place")   //remove existing attributes



// console.log(inputname.style);

// console.log(inputname.dataset.place)





   //task:display all attributes  dynamically
// const inputname=document.querySelector(".input-name-container input");
// for(let attr of inputname.attributes){
// console.log(`${attr.name} is ${attr.value}`);
// }




// setting inline style
// const inputname=document.querySelector(".input-name-container input");
// const btnEl=document.querySelector(".input-name-container button");
// style="padding: 5px 10px;  font-size: 10px;background-color: black;
    // border: none; border-radius: 5px; color:white;"


// 1.setattributes
// btnEl.setAttribute(
//     "style",
//     "padding:5px 10px;font-size: 10px;background-color:black; border: none; border-radius:5px; color:white;"
// );

//2.direct property access
// btnEl.style.padding="6px 10px";
// btnEl.style.fontSize="10px";
// btnEl.style.backgroundColor="black";
// btnEl.style.border="none";
// btnEl.style.borderRadius="5px";
// btnEl.style.color="white"; 



//3.CSSText
// btnEl.style.cssText=
// "padding:5px 10px;font-size: 10px;background-color:black; border: none; border-radius:5px; color:white;"


// //getting the inlinestyle
// console.log(btnEl.style.backgroundColor);

// //getcomputedstyle()
// console.log(window.getComputedStyle(btnEl,":hover"));


//Task:Remove class stlying defined in style.css and write the css using javascript DOM.

// .input-name-container{
//     background-color: #f2f2f2;
//     border-radius: 5px;
//     padding: 10px;

//  }
//  .input-name-container input{
//     padding:2px 10px;
//     outline:none;
//  }
// const inputcontainer=document.querySelector(".input-name-container");
// const inputname=document.querySelector(".input-name-container input");
// const btnEl=document.querySelector(".input-name-container button");

// inputcontainer.style.cssText="background-color: #f2f2f2; border-radius: 5px; padding: 10px;"
// inputname.style.cssText="background-color:padding:2px 10px;  outline:none;"
// btnEl.style.cssText="padding:5px 10px;font-size: 10px;background-color:black; border: none; border-radius:5px; color:white;"




// const inputName=document.querySelector(".input-name-container input");

//get
// console.log(inputname.classname);
//overwriteclassname
// inputname.setAttribute("Class","newclassname");
 
// inputName.className +=" newclassname newclassname3 newclassname4";
// console.log(inputname.classList);
 
// for(let cssClass of inputName.classList){
// console.log(cssClass);
// }


//manipulation
// console.log(inputName.classList.length)
// inputName.classList.add("5class");
// console.log(inputName.classList.contains("newclassname3"));
//  console.log(inputName.classList.replace("newclassname4","newclassname44"));
//  console.log(inputName.classList.remove("newclassname2")) 
//  console.log(inputName.classList)
// //  console.log(inputName.classList.toggle("basith")

// setTimeout(() => {
//     inputName.classList.toggle("basith-class");
// }, 5000);


// console.log(inputName.classList)


//task:show dic based on click(toggle)
const inputName=document.querySelector(".input-name-container input");
const inputcontainer=document.querySelector(".input-name-container");
const showbtnEl=document.querySelector("#showbtn");


// showbtnEl.addEventListener("click",() => {
//     if(inputcontainer.style.display==="none"){
//         showbtnEl.innerText="Hide div";
//         showbtnEl.style.backgroundColor="gray";
//         inputcontainer.style.display="block";
//     }
//     else{
//         inputcontainer.style.display="none";
//         showbtnEl.style.backgroundColor ="blue";
//         showbtnEl.innerText="Show div";
//     }
// });
                        //or
     //animation added
showbtnEl.addEventListener("click",() => {
    if(inputcontainer.classList.contains("hide")){
        showbtnEl.innerText="Hide div";
        showbtnEl.style.backgroundColor="gray";
        inputcontainer.classList.remove("hide");
        
    }
    else{
        inputcontainer.classList.add("hide");
        showbtnEl.style.backgroundColor ="blue";
        showbtnEl.innerText="Show div";
    }
});

const creditEl=document.querySelector("header span")
//(x)using html attributes
// creditEl.setAttribute(
//     "onclick", 'alert("Authored by mohamed-setattributes")'
// );


// drawbags -onclick is html element=>can't accept multiple actions
// creditEl.onclick=function(){
//     alert("Authored by mohamed")

// creditEl.onclick=function(){
//     alert("Authored by basith")//xxxxx
// }

//(best method)-addEventlistner accept all action
// creditEl.addEventListener("click",function(){
//     alert("Authored by mohamed");
// });

// creditEl.addEventListener("click",function(){
//     alert("Authored by basith");
// });
               //or
//   function handleCreditmsg(){  //function
//     alert("Authored by mohamed");
//     alert("Authored by basith");
  
//   }
//   function handlecreditmsg2(){
//     prompt("what is your name")
//   }
//   creditEl.addEventListener("click",handleCreditmsg);
//   creditEl.addEventListener("click",handlecreditmsg2);
//console.log(creditEl)


//addEventListener
//1.window.addeventlistner()
//2.document.addeventlistner()
//3.element.addeventlistner()

 const handleCreditmsg=(event)=>{
      // alert("javascript dom-basith");
    console.log("event happening");
   // creditEl.removeEventListener("click",handleCreditmsg)
 };
 creditEl.addEventListener("click",handleCreditmsg, {once:true});   //using remove or once(addeventlistner)

// document.addEventListener("contextmenu",handleCreditmsg)



//adding an eventlistner
//creditEl.addEventListener("click",handleCreditmsg)

//removing an eventlistner
// setTimeout(()=>{
//     creditEl.removeEventListener("click",handleCreditmsg);
// }, 5000);








