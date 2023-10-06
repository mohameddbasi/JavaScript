// const tableEL=document.querySelector("table")

// let selectedId;
// tableEL.addEventListener("click",(event) =>{
//     const target=event.target
//     const closestTr=target.closest("tr");

//     if(target.tagName==="TH")return;//ignoring TH

// if(selectedId != undefined){
//     selectedId.classList.remove("active");
// }
// selectedId=closestTr;

// closestTr.classList.add("active");
//     alert(`hello ${closestTr.children[0].textContent}`);
// })

// //Task:show a donate page on Toogle
// document.addEventListener("click",(event)=>{
//     const id=event.target.dataset.toggleId;
//     if (!id)return; //ignore all target place
//     const el=document.getElementById(id);
//     el.hidden=!el.hidden;
// });
// const formEl=document.querySelector("#donate-form")

// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//    const donateamount= event.target.querySelector("input").value;
//    console.log(donateamount);
// alert(`Thanks you for donating $${donateamount}.`)
// });


// document.addEventListener("mousedown",(event) => {
//     console.log("Mousedown",event);
// });

// document.addEventListener("copy",(event)=>{
//     event.preventDefault();
//     alert("copying is prohibited")
// })


// document.addEventListener("mouseup",(event)=>{
//     console.log("Mouseup",event);
// })


// document.addEventListener("mouseenter",(event)=>{
//     console.log("Mouseenter");
// })

// document.addEventListener("mouseleave",(event)=>{
//     console.log("Mouseleave");
// })

// document.addEventListener("mousemove",(event)=>{
//         console.log("Mousemove");
//  })

// document.addEventListener("mouseout",(event)=>{
//     console.log("Mouseout");
// })

// document.addEventListener("mouseover",(event)=>{
//     console.log("Mouseover");
// })


// document.addEventListener("dblclick",(event)=>{
//     console.log("dblclick");
// })

// const foodcontainerEl=document.getElementById("food-container")
// foodcontainerEl.addEventListener("mouseenter",(event)=>{
//     console.log("mouseenter",event);
// })



//Task:create an mouse tester app which should display respective messsage when that button is clicked.

// document.addEventListener("mouseup",(event)=>{
//     switch (event.which) {
//         case 1:
//             alert("right click");
//             break;
//         case 2:
//             alert("middle click");
//             break;
//         case 3:
//             alert("left click");
//             break;  
//         default:
//             alert("ivalid or unknown detected")
//             break;
//     }
// })


//keyboard event

// document.addEventListener("keydown",(event)=>{
//     console.log("keydown",event);
// })

// document.addEventListener("keyup",(event)=>{
//     console.log("keyup",event);
// })





//Task:build a simple typing-test screen
// document.addEventListener("keyup",(event)=>{
//     console.log("keyup",event);

//     switch(event.key){
//             case "Arrowup":
//             alert("you have pressed Arrowup key");
//             break;

//             case "Arrowdown":
//             alert("you have pressed Arrowdown key");
//             break;

//             case "Arrowleft":
//             alert("you have pressed Arrowleft key");
//             break;

//             case "ArrowRight":
//             alert("you have pressed Arrowright key");
//             break;

//           default:
//             alert("unknown key detected");
//             break;
//     }
// })









