
function resetSketchpad(container, sideLength){

    container.replaceChildren();

    const containerSizePixels = container.offsetHeight;

    for (let i = 0; i < sideLength; i++){

        const sketchNodeRow = document.createElement("div");
        sketchNodeRow.classList.add("sketch-container", "flex");
    
        for (let j = 0; j < sideLength; j++){
    
            const sketchNode = document.createElement("div");
            sketchNode.classList.add("white", "sketch-node");
            sketchNode.style.height = ((containerSizePixels / sideLength) - 2) + "px";
            sketchNode.style.width = ((containerSizePixels / sideLength) - 2) + "px";
            sketchNode.addEventListener("mouseenter", (event) => {
                if (mouseDown){
                    event.target.classList.remove("white");
                    event.target.classList.add("black");
                }
            })
    
            sketchNodeRow.appendChild(sketchNode);
        }
    
        container.appendChild(sketchNodeRow);
    }

    console.log("End of resetSketchpad");

}

function resizeSketchpad(container, resizeText, containerSizeSquares){

    const newSize = parseInt(resizeText.value);
    if (newSize <= 0) return;

    sessionStorage.setItem("numPixelsPerSide", newSize);

    resetSketchpad(container, newSize);
    resizeText.value = "";

}

// Initialize size of the canvas
const STARTING_SIZE_PIXELS = 10;
sessionStorage.setItem("numPixelsPerSide", "10");


// Grab references to relevant elements
const container = document.querySelector(".sketch-container");
const resetButton = document.querySelector(".reset");
const resizeButton = document.querySelector(".resize-button");
const resizeText = document.querySelector(".resize-text");

// Track mouse button status
let mouseDown = false;

document.addEventListener("mousedown", () => {mouseDown = true;});
document.addEventListener("mouseup", () => {mouseDown = false;});

// Functionality for clearing the canvas but not changing the size
resetButton.addEventListener("click", () => {
    const numPixelsPerSide = parseInt(sessionStorage.getItem("numPixelsPerSide"));
    resetSketchpad(container, numPixelsPerSide)
});

// Functionality for clearing the canvas and changing the size
resizeButton.addEventListener("click", () => {
    resizeSketchpad(container, resizeText);
});

// Initialize the canvas
resetSketchpad(container, STARTING_SIZE_PIXELS);






