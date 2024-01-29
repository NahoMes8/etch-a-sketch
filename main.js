const container=document.getElementById('container');
const inputValue=document.getElementById('inputValue');
const gridSize=document.getElementById('gridSize');
const submitBtn=document.getElementById('submitBtn');
const clearBtn=document.getElementById('clearBtn');
const hint=document.getElementById('hint');



submitBtn.addEventListener('click',e=>{
    e.preventDefault();
    makeGrid();
});

clearBtn.addEventListener('click',e=>{
    e.preventDefault();
    clearGrid();
});
inputValue.addEventListener('keyup', e=>{
    gridSize.textContent='x '+ inputValue.value;
});
inputValue.addEventListener('focus', e=>{
    hint.textContent="Enter a number between 2 & 99";
    hint.style.color="red";
})

makeGrid();

function makeGrid(){

   const number=inputValue.value;
    
    if(number>99||isNaN(number)){
        hint.innerText="Try again";
    }else{
        hint.innerText="";
        gridSize.innerText="";
        container.innerText="";
        if(number==0||number>99||number==""){
            for(let i=0;i<10;i++){
                let row=document.createElement('div');
                row.classList.add('row');
                container.appendChild(row);
                for(let j=0;j<10;j++){
                    let column=document.createElement('div');
                    column.classList.add('column');
                    row.appendChild(column);
                }
            }
            
        }else{
            
            for(let i=0;i<number;i++){
                let row=document.createElement('div');
                row.classList.add('row');
                container.appendChild(row);
                for(let j=0;j<number;j++){
                    let column=document.createElement('div');
                    column.classList.add('column');
                    row.appendChild(column);
                }
            }
        }
    }
    draw();
}


function draw() {
    let column = document.getElementsByClassName('column');
    for (let i = 0; i < column.length; i++) {
        column[i].addEventListener('mouseover',changeColor);
    }

    function changeColor() {
        const colorP = document.getElementById('colorPicker');
        const colorV = document.getElementById('colorVariation');
        const blackP = document.getElementById('blackPen');
        const rainbowP = document.getElementById('rainbowPen');
        const eraser = document.getElementById('eraser');

        if (colorP.checked) {
            this.style.backgroundColor = colorV.value;
        } else if (blackP.checked) {
            this.style.backgroundColor="#252525"
        } else if (eraser.checked) {
            this.style.backgroundColor = "";
        } else if (rainbowP.checked) {
            let randomC = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = randomC;
        }
    }
}

function clearGrid(){
    let column=document.getElementsByClassName('column');
    for(let i=0;i<column.length;i++){
        column[i].style.backgroundColor="";
    }
}