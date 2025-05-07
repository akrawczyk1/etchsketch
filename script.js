const container = document.querySelector(".sketch-container");

const containerSize = 960;
let sideLength = 16;

let count = 0;

for (let i = 0; i < sideLength; i++){
    const sketchNodeRow = document.createElement("div");
    sketchNodeRow.classList.add("sketch-container", "flex");

    for (let j = 0; j < sideLength; j++){
        const sketchNode = document.createElement("div");
        sketchNode.classList.add("white", "sketch-node");
        sketchNode.style.height = ((containerSize / sideLength) - 2) + "px";
        sketchNode.style.width = ((containerSize / sideLength) - 2) + "px";
        sketchNode.addEventListener("mouseenter", (event) => {
            event.target.classList.remove("white");
            event.target.classList.add("black");
        })
        sketchNodeRow.appendChild(sketchNode);
    }

    container.appendChild(sketchNodeRow);
}


console.log(count);


