const container = document.createElement("div");
container.style.display = "flex";
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
  auxContainer.style.aspectRatio = "1/1";
  auxContainer.style.borderColor = "blue";
  auxContainer.style.borderStyle = "solid";
  auxContainer.style.flexGrow = "1";
  auxContainer.style.maxWidth = "50%";
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
      divRow.appendChild(newDiv);
    }
    containerInner.appendChild(divRow);
  }
}

function changeColor() {
  console.log("hello")
  if(this.style.backgroundColor === "") {
    this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }
  else {
    let tempAux = this.style.backgroundColor;
    tempAux = tempAux.slice(0, tempAux.length-1);
    tempAux = tempAux.split("(");
    let backgroundColorRGB = tempAux[1].split(",");
    for (let i = 0; i < backgroundColorRGB.length; i++) {
      backgroundColorRGB[i] = Math.floor(+backgroundColorRGB[i]-25.5);
      if(backgroundColorRGB[i] < 0) backgroundColorRGB[i] = 0;
    }
    this.style.backgroundColor = `rgb(${backgroundColorRGB[0]}, ${backgroundColorRGB[1]}, ${backgroundColorRGB[2]})`;
    if(backgroundColorRGB[0]=== 0 &&
       backgroundColorRGB[1]=== 0 && 
       backgroundColorRGB[2]=== 0) {
      this.removeEventListener('mouseover', changeColor);
    }
  }
}
 
function reset() {
  container.removeChild(container.lastChild);
  let newSize = "";
  do {
    newSize = +prompt("Introduce the new size (max=100; min=2)", 14);
  } while(isNaN(newSize) || newSize > 100 || newSize < 2);
  createSquareGrid(newSize);
}

createSquareGrid(4);