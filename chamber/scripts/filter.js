const cnt = document.querySelector('#container');
const btnGrid = document.querySelector('#grid');
const btnList = document.querySelector('#list');


function showGrid() { 
    cnt.classList.add('grid');
    cnt.classList.remove('list');
};
function showList() { 
    cnt.classList.add('list');
    cnt.classList.remove('grid');
};

btnGrid.addEventListener('click', showGrid);
btnList.addEventListener('click', showList);

