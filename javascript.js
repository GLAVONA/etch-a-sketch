const container = document.getElementById("container");

function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',cols);
    
    for (let i = 0; i < (rows*cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";  
     }
}
makeGrid(16,16);

const boxes = document.querySelectorAll(".grid-item");

boxes.forEach(box => {
    box.addEventListener('mouseover',()=>{box.style.backgroundColor = "red"})
});
