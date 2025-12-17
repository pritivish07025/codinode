gsap.to("#page-2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page-2 h1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        
        scrub:2,
        pin:true,
        markers:true,
       
    },
})