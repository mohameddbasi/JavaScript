const formEl=document.querySelector("form");
const inputEl=document.querySelector("form input");
const checkboxEl=document.querySelector("form input[type='checkbox']");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();  //stop default ations
    if(
        inputEl.value !="" ||
        inputEl.value.length <=3 ||
        inputEl.value.length >20
    ){
        alert("validation Error:Name Invalid");
        return;
    }

    if(!checkboxEl.checked){
        alert("validation error:check the term.");
        return;
    }
    
console.log("form submitted",inputEl.value, checkboxEl.checked);
console.log("DefaultPrevented",event.defaultPrevented);
});




 