const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const items = document.querySelectorAll(".item");
const x = document.querySelector(".x");
const o = document.querySelector(".o");
const reset = document.querySelector(".restart");

const selector = [x,o];
let value = "X";

selector.forEach((s)=>{
    s.addEventListener("click", ()=>{
        value = s.innerText;
        console.log(value);
    });
});

items.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(!item.innerText){
            item.innerText = value;
        }
    });
});

reset.addEventListener("click",()=>{
    items.forEach((item)=>{
        item.innerText = "";
    });
});

