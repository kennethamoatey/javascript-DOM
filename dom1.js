const img =document.querySelector("img")
let btn=document.querySelector(".btn")
btn.addEventListener('click',()=>{
    if(img.classList.contains('show')){
        img.classList.remove('show')
        img.classList.add('hide')
         btn.textcontent='show'

    } else{
        img.classList.add('show')
        img.classList.remove('hide')
        btn.textcontent='hide'
    }
})


let userName = "kenneth";
if (userName){
    console.log(`Hello ${userName}`)
} else{
    console.log('Hello!')
}
let userQuestion='How are you doing today'
console.log(userQuestion)
let randomNumber=Math.floor(Math.random()*3);
console.log(randomNumber);
let eightBall= '';



