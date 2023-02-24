document.querySelector("#rectangle").addEventListener("click", (event) => {
    if(event.target.getAttribute("fill") === "red") {
        event.target.setAttribute("fill", "blue");
    } else {
        event.target.setAttribute("fill", "red");
    }
});

document.querySelector("#donutrempli").addEventListener("mouseover", (event) => {
    event.currentTarget.setAttribute("r", "55");
    event.currentTarget.setAttribute("stroke-width", "50");
});
document.querySelector("#donutrempli").addEventListener("mouseout", (event) => {
    event.currentTarget.setAttribute("r", "45");
    event.currentTarget.setAttribute("stroke-width", "30");
});


document.querySelector("#donutvide").addEventListener("mouseover", (event) => {
    event.currentTarget.setAttribute("r", "80");
});
document.querySelector("#donutvide").addEventListener("mouseout", (event) => {
    event.currentTarget.setAttribute("r", "60");
});