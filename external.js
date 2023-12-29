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

let input =16;
function gridFormation(row,column){
    for(let i=1;i<=row*column;i++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        container.appendChild(cell);
    }
}

// function change(){
//     document.querySelector('cell').addEventListener('click',changeCOlor());
//         return "0";
//     }

// function changeCOlor(){
//     return 0;
// }
gridFormation(input,input);
// change();
