const person={
    name:"Musthafa",
    place:"Thanjavur",
    myself(){
        return "my name is "+ this.name;
    }
}
console.log(person.myself())

person.name="mohamed"
console.log(person.name)
console.log(person.myself())

console.log(document.body.children[0].children[0].innerText=person.name)


let username=prompt("what is your name?");
console.log(document.body.children[0].children[0].innerText=username)
let address=prompt("where are you from");
console.log(document.body.children[0].children[1].innerText=address)
