const formEl=document.querySelector("form");
const divEl=document.querySelector("form div");
const pEl=document.querySelector("form p");

formEl.addEventListener("click",(event)=>{
    alert("form");
    console.log(`Target: ${event.target.tagName}, this:${formEl.tagName}`) ;
});


divEl.addEventListener("click",(event)=>{
    alert("Div");
    //stop bubbling
   // event.stopPropagation();
  // event.stopImmediatePropagation();
    
});



pEl.addEventListener("click",()=>{
    alert("p");
});






//to catch an event on the capturing
formEl.addEventListener("click",()=>{},{capture:true}); //by default false,


//Task:catch the capture and bubbling
for(let elem of document.querySelectorAll("form,form *")){
    

    //capturing phase
    elem.addEventListener(
        "click",
         ()=>{
        console.log(`capturing phase: ${elem.tagName}`);
    },
    {capture:true}
    );
    //bubbling phase
    elem.addEventListener("click",()=>{
        console.log(`Bubbling phase: ${elem.tagName}`);
    });
}
