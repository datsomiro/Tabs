let button1 =document.querySelector('.uno')
let button2 = document.querySelector('.dos')
let button3 = document.querySelector('.tre')

const divOne = document.querySelector('.unoDiv')
const divTwo = document.querySelector('.dueDiv')
const divThr = document.querySelector('.treDiv')

button1.addEventListener('mousedown', () => {
    button1.style.backgroundColor = 'darkgray'; 
    /*button2.style.backgroundColor = 'lightgrey';
    button3.style.backgroundColor = 'lightgrey';
    divTwo.classList.remove("hidden--active");
    divThr.classList.remove("hidden--active");
    divOne.classList.add("hidden--active");*/
    if (document.querySelector('text') !== divOne ) {
        
    }
});

button2.addEventListener('mousedown', () => {
    button2.style.backgroundColor = 'darkgray';
    /*button3.style.backgroundColor = 'lightgrey';
    button1.style.backgroundColor = 'lightgrey';
    divOne.classList.remove("hidden--active");
    divThr.classList.remove("hidden--active");
    divTwo.classList.add("hidden--active");*/
});

button3.addEventListener('mousedown', () => {
    button3.style.backgroundColor = 'darkgray';
    /*button1.style.backgroundColor = 'lightgrey';
    button2.style.backgroundColor = 'lightgrey';
    divOne.classList.remove("hidden--active");
    divTwo.classList.remove("hidden--active");
    divThr.classList.add("hidden--active");*/
});