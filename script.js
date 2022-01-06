const container = document.createElement("div");
container.style.backgroundColor = "blue"
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "strech";
container.style.justifyContent = "center";
document.querySelector("body").appendChild(container);



/*
divCollection.push(document.createElement("div"));
container.appendChild(divCollection[0]);
divCollection[0].style.backgroundColor= "red";
divCollection[0].style.display = "flex";
divCollection[0].style.width = "100%";
*/

// We fill the square grid row by row
// Each item in the array will be another array containing elements
function createSquareGrid(n) {
  for(let i = 0; i < n; i++) {
    const divRow= document.createElement("div");
    divRow.classList = `row-${i}`;
    divRow.style.display = "flex";
    for(let k = 0; k < n; k++){
      const newDiv = document.createElement('div');
      newDiv.style.backgroundColor = "red";
      newDiv.style.flexGrow = "1";
      newDiv.style.flexShrink = "1";
      newDiv.style.aspectRatio = "1/1";
      newDiv.setAttribute('id', `#${k+(i)*n}`);
      newDiv.addEventListener('mouseover', changeColor);
      newDiv.addEventListener('mouseout', changeColor);
      divRow.appendChild(newDiv);
    }
    container.appendChild(divRow);
  }
}

function changeColor() {
  if(this.style.backgroundColor==="red") this.style.backgroundColor = "green";
  else if(this.style.backgroundColor==="green") this.style.backgroundColor = "blue";
}
 
createSquareGrid(32);