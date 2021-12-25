//global selections and varibales
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");



// color generator
function generateHex(){
    const hexColor = chroma.random();
    return hexColor;
}

function randomColors() {
    colorDivs.forEach((div,index) =>{
        const hexText = div.children[0];
        const randomColor = generateHex();
        
        //add color to the background
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}

randomColors();