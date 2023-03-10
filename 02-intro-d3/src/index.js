import {select} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!

// Création du board avec le SVG

const width = 500;
const height = 500;

select("#board")
.append("svg")
.attr("width", width)
.attr("height", height);

const svg = select("svg");

const groupe1 = svg.append('g');
const groupe2 = svg.append('g');
const groupe3 = svg.append('g');

// Premier cercle
groupe1.append("circle")
.attr("cx", "50")
.attr("cy", "50")
.attr("r", "40")
.attr('id', 'circle1');

groupe1.append("text")
.text("Premier cercle")
.attr("x", "6")
.attr("y", "110");

// Deuxième cercle
groupe2.append("circle")
.attr("cx", "150")
.attr("cy", "150")
.attr("r", "40")
.attr('id', 'circle2');

groupe2.append("text")
.text("Deuxième cercle")
.attr("x", "99")
.attr("y", "210");

// Troisième cercle
groupe3.append("circle")
.attr("cx", "250")
.attr("cy", "250")
.attr("r", "40")
.attr('id', 'circle3');

groupe3.append("text")
.text("Troisième cercle")
.attr("x", "202")
.attr("y", "310");

const circle2 = select("#circle2")
.attr("fill","#208323")
.attr("cx","200");
const circle1 = select("#circle1")
.attr("cx","100");
const circle3 = select("#circle3");

circle3.on("click", () => {
    circle1.attr("cx", "250");
    circle2.attr("cx", "250");
    circle3.attr("cx", "250");
});

const data = [20, 5, 25, 8, 15];

svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr('x', (d, i) =>  i * (width/data.length))
.attr('width', (width/data.length) - 5)
.attr('y', d => height - d)
.attr('height', d => d)