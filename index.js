const imagePrev = document.getElementsByClassName("aa");
const imageNext = document.getElementsByClassName("ab");

console.log(imagePrev[0])
console.log(imageNext[0])

const slider1=document.getElementsByClassName("slider1")

console.log(slider1[0])

let count=0

imagePrev[0].addEventListener("click",()=>{
    if(count==0){
        slider1[0].setAttribute("style","background-image: url(images/slider_1.jpg);")
        count=1
    }
    else{
        slider1[0].setAttribute("style","background-image: url(images/slider_5.jpg);")
        count=0
    }
})
imageNext[0].addEventListener("click",()=>{
    if(count==0){
        slider1[0].setAttribute("style","background-image: url(images/slider_1.jpg);")
        count=1
    }
    else{
        slider1[0].setAttribute("style","background-image: url(images/slider_5.jpg);")
        count=0
    }
})

setInterval(()=>{
    if(count==0){
        slider1[0].setAttribute("style","background-image: url(images/slider_1.jpg);")
        count=1
    }
    else{
        slider1[0].setAttribute("style","background-image: url(images/slider_5.jpg);")
        count=0
    }},5000)

