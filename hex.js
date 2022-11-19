const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
const btn = document.getElementById("btn")
const color = document.getElementById("color")

btn.addEventListener("click",function()  {
    let hexcolor ="#";
    for(let i=0;i<6;i++){
        hexcolor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent =hexcolor;
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*hex.length);
 }