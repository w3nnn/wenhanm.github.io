
  
const svg = document.getElementById("vis2");

svg.addEventListener("click", function(){
    if (event.target.tagName === 'rect'){
        event.target.setAttribute("fill","black");
    }

});

function createSquare(x, y, w, h, color) {
  const rect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", w);
  rect.setAttribute("height", h);
  rect.setAttribute("fill", color);
  svg.appendChild(rect);
}




for (let i = 0; i < 9; i++) {
    createSquare(100 + i * 60, 50, 20 + i*5, 20, "hotpink");
}
for (let i = 0; i < 9; i++) {
    createSquare(100 + i * 60, 150, 20 + i*5, 20, "grey");
}