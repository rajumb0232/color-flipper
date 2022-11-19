const colors = ["red","blue","green","yellow","rgb(103,439,323)","#d3c4c9"]
const btn = document.getElementById("btn")
const color = document.getElementById("color")

btn.addEventListener('click',function(){
    const randomnumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];
    
})

const getRandomNumber = ()=>{
   return Math.floor(Math.random()*colors.length);
}