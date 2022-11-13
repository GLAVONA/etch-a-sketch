const container = document.getElementById("container");
const askUserButton = document.createElement("button");

askUserButton.textContent = "Click me!";
document.body.appendChild(askUserButton);
container.before(askUserButton);

let mouseDown = false;

document.body.onmousedown = () => (mouseDown=true);
document.body.onmouseup = () => (mouseDown=false);

askUserButton.addEventListener('click',function promptUser(){
    container.replaceChildren();
    let userRows = prompt("Insert number of rows:", 1);
    let userCols = prompt("Insert number of columns", 1);

    if (userCols>100 || userRows>100){
        alert("Rows/columns can be max 100 each!")
        return promptUser();
    }

    makeGrid(userRows,userCols);
    const boxes = document.querySelectorAll(".grid-item");

boxes.forEach(box => {
    let brightness = 0;
    let randomR = Math.floor(Math.random() * 256)
    let randomG = Math.floor(Math.random() * 256)
    let randomB = Math.floor(Math.random() * 256)
    box.addEventListener('mouseover',()=>{
        if(mouseDown){
            randomR-=50;
            randomG-=50;
            randomB-=50;
            brightness +=0.1;
            box.style.background = `rgba(${randomR}, ${randomG}, ${randomB}, ${brightness})`
            
            
        }
        })
});
})

function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',cols);
    
    for (let i = 0; i < (rows*cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";  
     }
}