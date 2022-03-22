// respond to clicks , boxes different sizes
let selectedDisc;

let tower1 = document.querySelector("#tower-1");
tower1.addEventListener("click", () => towerClickHandler(tower1));

let tower2 = document.querySelector("#tower-2");
tower2.addEventListener("click", () => towerClickHandler(tower2));

let tower3 = document.querySelector("#tower-3");
tower3.addEventListener("click", () => towerClickHandler(tower3));

let colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "gray",
  "orange",
  "black",
  "purple",
];

for (let i = 0; i < colorArray.length; i++) {
  const pixelNumber = 150 - i * 20;
  createDisc(pixelNumber + "px", colorArray[i]);
}

function createDisc(width, backgroundColor) {
  let discElement = document.createElement("div");
  discElement.style.height = "20px";
  discElement.style.width = width;
  discElement.style.backgroundColor = backgroundColor;
  tower1.appendChild(discElement);
}

function towerClickHandler(towerElement) {
  topDisc = towerElement.children[towerElement.children.length - 1];
  if (selectedDisc) {
    if (
      topDisc === undefined ||
      topDisc.offsetWidth > selectedDisc.offsetWidth
    ) {
      towerElement.appendChild(selectedDisc);
      selectedDisc.style.border = "";
      selectedDisc = undefined;
    }
  } else if (topDisc) {
    selectedDisc = topDisc;
    selectedDisc.style.border = "1px black dashed";
  }
}
