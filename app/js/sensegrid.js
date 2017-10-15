var senseGridData = window.getComputedStyle(
    document.querySelector('html'), ':after')    // selector
    .getPropertyValue('content')                 // nombre propiedad Css
    .replace(/^(")|(\\)|(")$/g, '');

//senseGridData = senseGridData.replace(/\\/g, '');


console.log(senseGridData);

// convert to object
senseGridData = JSON.parse(senseGridData);

// loop trought senseGridData object
for (property in senseGridData) {
  if (senseGridData.hasOwnProperty(property)) {
      console.log(property + " -> " + senseGridData[property]);
  }
} 

// create elements
function createGrid() {
    var containerGrid = document.createElement("DIV");
    // add atributes
    containerGrid.setAttribute("id", "grid_guide");
    containerGrid.setAttribute("class", "btn_class");
    
    for (var i = 0; i < senseGridData.grid; i++) {
        
        // append elements to contaner 
        var column = document.createElement("DIV");
        column.setAttribute("id", "col_"+i+1);
        column.setAttribute("class", "col");
        column.appendChild(document.createTextNode(i+1));

        containerGrid.appendChild(column);  

    }

    document.body.appendChild(containerGrid);
}


//createGrid();