// var img=document.querySelectorAll(".img")
// img.forEach(function(e){
//     gsap.to
// })
gsap.from(".img img",{
    y:"100%",
    duration:2,
    stagger:.2
})
gsap.from(".text h1,.text h2",{
    opacity:0,
    duration:2,
    stagger:.3
})
gsap.from("a",{
    opacity:0,
    y:10,
    duration:2,
    stagger:.2
})