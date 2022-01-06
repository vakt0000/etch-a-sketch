const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "strech";
container.style.justifyContent = "center";
document.querySelector("body").appendChild(container);

const button = document.querySelector("#resetButton");
button.addEventListener('click', reset);

// We fill the square grid row by row
// Each row will be a div containing more divs

function createInnerContainer() {
  const auxContainer = document.createElement("div");
  container.appendChild(auxContainer);
  auxContainer.setAttribute('id', 'innerContainer');
  auxContainer.style.display = "flex";
  auxContainer.style.flexDirection = "column";
  auxContainer.style.alignItems = "strech";
  auxContainer.style.justifyContent = "center";
  auxContainer.classList= "red";
  return auxContainer;
}

function createSquareGrid(n) {
  const containerInner = createInnerContainer();
  for(let i = 0; i < n; i++) {
    const divRow= document.createElement("div");
    divRow.classList = `row-${i}`;
    divRow.style.display = "flex";
    for(let k = 0; k < n; k++){
      const newDiv = document.createElement('div');
      newDiv.style.flexGrow = "1";
      newDiv.style.flexShrink = "1";
      newDiv.style.aspectRatio = "1/1";
      newDiv.setAttribute('id', `#${k+(i)*n}`);
      newDiv.addEventListener('mouseover', changeColor);
      newDiv.addEventListener('mouseout', changeColor);
      divRow.appendChild(newDiv);
    }
    containerInner.appendChild(divRow);
  }
}

function changeColor() {
  if(!this.classList.contains("green")) this.classList.toggle("green");
  else {
    this.classList.toggle("green");
    this.classList.toggle("blue");
    this.removeEventListener('mouseover', changeColor);
    this.removeEventListener('mouseout', changeColor);
  }
}
 
function reset() {
  container.removeChild(container.lastChild);
  let newSize = +prompt("Introduce the new size (max=100)", 14);
  createSquareGrid(newSize);
}

createSquareGrid(4);