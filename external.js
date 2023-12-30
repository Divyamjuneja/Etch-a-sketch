// let container = document.getElementById('container');
// let body = document.body;

// // This function is used to create grid of 16x16
// function gridFormation(row,column){
//     for(let i=1;i<=row;i++){
//         let parentDiv = document.createElement('div');
//         parentDiv.classList.add('parentDiv');
//         console.log(parentDiv);
//         container.appendChild(parentDiv);
//         for(let j=1;j<=column;j++){
//             console.log(j);
//             let childDiv = document.createElement('div');
//             childDiv.classList.add('childDiv');

//             parentDiv.appendChild(childDiv);
//         }
//     }
// }

// gridFormation(16,16);

/* Option 2 for grid formation */
let container = document.getElementById('container');
let confirmationButton = document.querySelector('#gridNum');
let side =16;

function gridFormation(side){
    for(let i=1;i<=Math.pow(side,2);i++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        container.appendChild(cell);
    }
}
function changeColor(){
    const boxes = document.querySelectorAll('.cell');

    boxes.forEach(box => {
      box.addEventListener('mouseover', ()=> {    
        box.setAttribute('style', 'background-color: yellow;');
      });
    });
        }


function gridRemoval(side){
    for(let i=1;i<=Math.pow(side,2);i++){
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell =>{
            container.removeChild(cell);
        });
    }
}

function main(){
    gridFormation(side);
    
    confirmationButton.addEventListener('click',()=>{
        gridRemoval(side);
        side = prompt("enter the total number of sides");
        gridFormation(side);
    })
} 

main();