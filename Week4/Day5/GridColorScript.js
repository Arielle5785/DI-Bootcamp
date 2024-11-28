//define the sidebar colors
let color_list = ['red', 'orangered', 'orange', 'yellow', 'yellowgreen', 'lightgreen', 'green', 'turquoise', 'cyan', 'lightskyblue', 'dodgerblue', 'blue', 'darkblue', 'indigo', 'darkmagenta', 'violet', 'lightpink', 'lightgray', 'gray', 'black', 'white'];
let pick_color = 'white'
let sidebar = document.querySelector('#sidebar');
color_list.forEach(color => {
    let div_color = document.createElement('div');
    div_color.style.backgroundColor = color;
    sidebar.appendChild(div_color)
    div_color.addEventListener('click', () => {
        pick_color = color
    });
});

// sidebar.addEventListener('click', () => {
//         console.log(`Global pick_color: ${pick_color}`);
// });


// definie the grid
const gridContainer = document.querySelector('.grid');
//set the number of cells. for the moment fixed. should be able to do it dynamically.
let celltot = 2209;
//create the cell, with the border, width and height.
for(let i = 0; i <= celltot; i++){
    let cell = document.createElement("div");
    cell.style.border = "1px solid grey";
    cell.style.width = '10px';
    cell.style.height = '10px';

    gridContainer.appendChild(cell);
}

//set teh clear button function and the action on fill the blocks in the grid. 
// need to declare both first.
let clear_button = document.getElementsByTagName("button")[0];
let fill_blocks = document.querySelectorAll('.grid div');
clear_button.addEventListener("click", function () {
    fill_blocks.forEach(fill_block => {
        fill_block.style.backgroundColor = "white";
    });
});

//set the actions on the click of the mouse before filling the grid.
//add the preventDefault

let drawing = false;
fill_blocks.forEach(fill_block => {
    fill_block.addEventListener("mousedown", function () {
        drawing = true
        if (pick_color != 'white') {fill_block.style.backgroundColor = pick_color;}
    });
    fill_block.addEventListener("mouseup", function () {
        drawing = false
    });
    fill_block.addEventListener("mouseover", function () {
        if ( drawing && pick_color != 'white') {fill_block.style.backgroundColor = pick_color};
    });
});



