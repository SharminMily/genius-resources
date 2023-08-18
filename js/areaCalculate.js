/* Triangle */
function calculateTriangleArea(){
     const base = getInputValue('triangle-base');     
    //  ------------
    const height= getInputValue('triangle-height');   
    // Calculate
    const area = 0.5 * base * height;   
    // show area 
    setElementInnerText('triangle-area', area);
    // if(isNaN(base) || isNaN(height)){
    //     alert('width not a number')
    //     return;
    // }
    isNan(base,height)
    addToCalculationEntry('triangle',  area);
}

/*Rectangle */
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');     
    //  ------------
    const height = getInputValue('rectangle-height');
    const area = width * height;
    // show area 
    setElementInnerText('rectangle-area', area); 
    isNan(width,height)

    addToCalculationEntry('rectangle',  area);    
}
/* Parallelogram */
function calculateParallelogramArea(){
    const width = getInputValue('parallelogram-base')    
    //  ------------
    const height = getInputValue('parallelogram-height')    
    const area = width * height;    
    // show area   
    setElementInnerText('parallelogram-area', area);
    isNan(width,height)

    addToCalculationEntry('parallelogram',  area);    
}

/* Rhombus*/
function calculateRhombusArea(){
    const width = getInputValue('rhombus-base')    
    //  ------------
    const height = getInputValue('rhombus-height')    
    const area =  0.5 * width * height;    
    // show area   
    setElementInnerText('rhombus-area', area);
    isNan(width,height)

    addToCalculationEntry('rhombus',  area);    
}
/*Pentagon*/
function calculatePentagonArea(){
    const width = getInputValue('pentagon-base')    
    //  ------------
    const height = getInputValue('pentagon-height')    
    const area =  0.5 * width * height;    
    // show area   
    setElementInnerText('pentagon-area', area);
    isNan(width,height)

    addToCalculationEntry('pentagon',  area);    
}


/* ellipse */
function calculateEllipseArea(){
    const width = getInputValue('ellipse-base')    
    //  ------------
    const height = getInputValue('ellipse-height')    
    const area = 3.14 * width * height;  
    const areaToDecimal = area.toFixed(2)  
    // show area   
    isNan(width,height)
    setElementInnerText('ellipse-area', areaToDecimal);

    addToCalculationEntry('ellipse',  areaToDecimal);
}




// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area; 
}


function isNan(id){    
    if(isNaN(id) || isNaN(id)){
        alert('width not a number')
        return;
    }
}

// add to calculation entry 
function addToCalculationEntry(areaType, area){
    console.log(areaType +' '+ area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount; 

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML= `${count + 1}. ${areaType}` + ' = ' + `${area} cm<sup>2</sup> <button class="rounded-lg p-2 bg-pink-600 text-white text-lg ">Convert</button>` ;

    calculationEntry.appendChild(p);
}