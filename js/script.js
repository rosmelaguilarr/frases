import { phrases } from "./phrases.js";

const d = document,
    $frase = d.querySelector(".frase"),
    $number = d.querySelector(".number");

const getFrase = () => {
    let index = Math.floor(Math.random() * (phrases.length - 1)),
        frase = phrases[index].phrase;

    $frase.textContent = frase;
    $number.textContent =  `#${phrases[index].id}`;
}

getFrase();

const changeFrase = setInterval(() => {
    getFrase();
}, 10000);
