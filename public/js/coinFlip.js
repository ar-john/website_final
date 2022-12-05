spantext = document.querySelector("#resultspan");
button = document.querySelector("#flipButton");
const flips = [];

button.onclick  = () => {
   
    let y = Math.random();
    if (y < 0.5) {
        textt = 'heads'; 
        spantext.textContent = ' Heads';
    }else{
        textt= 'tails';
        spantext.textContent = ' Tails';
    }
    console.log(textt)
    flips.push(textt);
    console.log(flips);
    
}
