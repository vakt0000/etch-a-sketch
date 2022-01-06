const container = document.createElement("div");
container.style.backgroundColor = "blue"
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
      const newSpan = document.createElement('div');
      newSpan.style.flexGrow = "0";
      newSpan.style.flexShrink = "1";
      newSpan.style.height = "30px";
      newSpan.style.width = "30px";
      newSpan.style.backgroundColor = "red";
      newSpan.setAttribute('id', `#${k+(i)*n}`);
      newSpan.addEventListener('mouseover', changeColor)
      divRow.appendChild(newSpan);
    }
    container.appendChild(divRow);
  }
}

function changeColor(e) {
  console.log(this.getAttribute('id'));
  this.style.backgroundColor = "green";
}
 
createSquareGrid(32);