const btn = document.querySelector(".btn");
const color = document.querySelector(".color")

const randomColorCode = [
    "#19E786",
    "#FF0000",
    "#00FFFF",
    "#0000FF",
    "#00008B",
    "#ADD8E6",
    "#800080"
];

btn.addEventListener("click", () =>{
    const random = randomColorCode[Math.floor(Math.random() * randomColorCode.length)];
    document.body.style.background = random;

    color.textContent = random;
})