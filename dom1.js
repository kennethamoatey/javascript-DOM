/*let img =document.querySelector('img')
let press=document.querySelector('.btn')
press.addEventListener('click'()=>{
    if(img.classList.contains('show')){
        img.classList.remove('show')
        img.classList.add('hide')
        press.textcontent='show'

    } else{
        img.classList.add('show')
        img.classList.remove('hide')
        press.textcontent='hide'
    }
})

class Square{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
const User1=new Square(20,15)
console.log(User1)

const User2=new Square(30,13)
console.log(User2)*/

class Profile{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    getName(){
        return this.name +" "+ this.age
    }
}
User1=new Profile('Kenneth Amoatey',28,'male')
console.log(User1.getName())