const box = document.querySelector('.grid-container');
const titulo = document.querySelector('#titulo');
const info = document.querySelector('.informacion');
info.style.display = 'none'
titulo.addEventListener('click',()=> {
    info.style.display === 'none' ? info.style.display = 'block' : info.style.display = 'none';
})
let value = "X";
box.addEventListener('click', (event)=>{
    if(event.target.className === 'grid-container') return
    else {
        event.target.innerHTML =`<p class=${value === "O" ? "lime" : "red"}>${value}</p>`;
   value === "O" ? value = "X" : value = "O";
    //  if (value === "O") value = "X";
    //  else value = "O"
    }
})
