
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEL.innerHTML = count;
}


function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    countEL.innerHTML = 0;
    count = 0;
}
