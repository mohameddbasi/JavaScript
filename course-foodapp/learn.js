const tableEL=document.querySelector("table")

let selectedId;
tableEL.addEventListener("click",(event) =>{
    const target=event.target
    const closestTr=target.closest("tr");

    if(target.tagName==="TH")return;//ignoring TH

if(selectedId != undefined){
    selectedId.classList.remove("active");
}
selectedId=closestTr;

closestTr.classList.add("active");
    alert(`hello ${closestTr.children[0].textContent}`);
})

//Task:show a donate page on Toogle
document.addEventListener("click",(event)=>{
    const id=event.target.dataset.toggleId;
    if (!id)return; //ignore all target place
    const el=document.getElementById(id);
    el.hidden=!el.hidden;
});
const formEl=document.querySelector("#donate-form")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
   const donateamount= event.target.querySelector("input").value;
   console.log(donateamount);
alert(`Thanks you for donating $${donateamount}.`)
});


