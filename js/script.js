import { phrases } from "./phrases.js";

const d = document,
    $container = d.querySelector(".container"),
    $frase = d.querySelector(".frase"),
    $type = d.querySelector(".type"),
    $number = d.querySelector(".number");


const getColor = () => {
    let rgb, r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

$container.style.backgroundColor = getColor();
const changeColor = setInterval(() => {
    $container.style.backgroundColor = getColor();
}, 5000);

const getFrase = () => {
    let index = Math.floor(Math.random() * (phrases.length - 1)),
        frase = phrases[index].phrase;

    $frase.textContent = frase;
    $type.textContent =  phrases[index].type;
    $number.textContent =  `#${phrases[index].id}`;
}

getFrase();
const changeFrase = setInterval(() => {
    getFrase();
}, 10000);







