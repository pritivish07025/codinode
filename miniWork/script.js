var navi=document.querySelector("#nav i")
var boxi=document.querySelector("#box i")

function breakLines(){
var h2=document.querySelector("h2")
var h2Text=h2.textContent
 var splitedText =h2Text.split("")
 var clutter=""

 splitedText.forEach(function(elem){
  clutter=clutter+`<span>${elem}</span>`
 })
  h2.innerHTML=clutter

}
breakLines()

gsap.from("h2 span",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"back.out(1.7)"
})

var tl=gsap.timeline();

tl.to("#box",{
    right:0,
    duration:0.5
    
    })

tl.from("#box h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

tl.from("#box i",{
    opacity:0
})

tl.pause()

navi.addEventListener("click",function(){
    tl.play()
})

boxi.addEventListener("click",function(){
tl.reverse()
})

