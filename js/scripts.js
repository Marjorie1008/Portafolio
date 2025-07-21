
const typedText = document.getElementById("typed-text");
const frases = [
    "Desarrolladora Web",
    "Ingeniería de Sistemas"
];

let fraseIndex = 0;
let charIndex = 0;
let currentText = "";

function escribir() {
    if (fraseIndex < frases.length) {
        const currentFrase = frases[fraseIndex];
        if (charIndex < currentFrase.length) {
            currentText += currentFrase.charAt(charIndex);
            typedText.innerHTML = currentText + '<span class="cursor">|</span>';
            charIndex++;
            setTimeout(escribir, 50);
        } else {
            currentText += "<br>"; 
            fraseIndex++;
            charIndex = 0;
            setTimeout(escribir, 500); 
        }
    } else {
        typedText.innerHTML = currentText;
    }
}



document.addEventListener("DOMContentLoaded", escribir);
