let wrapper = document.querySelector(".wrapper");
let undo = document.querySelector(".undo");
let redo = document.querySelector(".redo");
let reset = document.querySelector(".reset");
undo.disabled = true;
redo.disabled = true;
reset.disabled = true;

let colors = ["red", "blue", "green", "yellow", "aqua", "aquamarine"]
let deletedData = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

undo.addEventListener("click", () => {
    let child = wrapper.childNodes;
    if (child.length > 7) {
        deletedData.push(wrapper.lastChild);
        wrapper.removeChild(wrapper.lastChild);
    }
})

redo.addEventListener("click", () => {
    let child = wrapper.childNodes;
    if (child.length > 7 && deletedData.length != 0) {
        wrapper.appendChild(deletedData.pop());
    }
})

reset.addEventListener("click", () => {
   let allcircle = document.querySelectorAll("span");
   allcircle.forEach((el)=>{
    wrapper.removeChild(el);
   })
})

wrapper.addEventListener("click", (e) => {
    let index = getRandomNumber(colors.length, 0)
    // console.log(e);
    if (e.target.nodeName !== "BUTTON") {
        let box = document.createElement("span");
        box.id = "circle"
        box.style.backgroundColor = colors[index];
        box.style.position = "absolute";
        box.style.left = e.pageX + 'px';
        box.style.top = e.pageY + 'px';
        wrapper.append(box);
    }
})

document.addEventListener("click", (e) => {
    e.preventDefault();
    let child = wrapper.childNodes;
    console.log(child)
    if (child.length === 7) {
        undo.disabled = true;
        redo.disabled = true;
        reset.disabled = true;
    } else {
        reset.disabled = false;
        undo.disabled = false;
    }
    if (deletedData.length == 0) {
        redo.disabled = true;
    }
})

