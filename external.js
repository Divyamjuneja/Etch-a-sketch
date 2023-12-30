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
let confirmationButton = document.querySelector('#gridNum');
let side =16;

function gridFormation(side,changeColor){
    let container = document.getElementById('container');
    container.innerHTML ='';
    for(let i=1;i<=Math.pow(side,2);i++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        container.appendChild(cell);
    }
}
function changeColor(){
    const boxes = document.querySelectorAll('.cell');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'yellow';
        });
    });

        }

function sizeCheck(side){
    if(side>0 && side<100){
        return true;
    }
    else{
        return false;
    }
}
function sizeChecker(side){
    let parsedSide = parseInt(side);
        let dimensionSide = 100/parsedSide;
        let flexValue = dimensionSide;
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell=>{
            cell.style.flexBasis = "calc("+flexValue+"% - 1px)"
            cell.style.height = "calc("+flexValue+"% - 1px)"
        });
        
}
function main(){
    gridFormation(side);
    sizeChecker(side);
    changeColor();
    confirmationButton.addEventListener('click',()=>{
        // gridRemoval(side);
        side = prompt("enter the total number of sides");
        if(sizeCheck(side) == true){
        gridFormation(side);
        sizeChecker(side);
        changeColor();
            
        }
        else{
            alert("enter size between 0-100");
            gridFormation(16);
            sizeChecker(16);
            changeColor();

        }
    })
} 

main();
// changeColor();
// .style.flexBasis = "calc("+flexValue+"%)";