const box = document.querySelector('.grid-container');
let value = "X";
box.addEventListener('click', (event)=>{
   event.target.innerHTML =`<p class=${value === "O" ? "red" : "lime"}>${value}</p>`;
   value === "O" ? value = "X" : value = "O";
    //  if (value === "O") value = "X";
    //  else value = "O"
})