gsap.from("#page1 #box", {
    scale: 0,
    // delay: 1,
    duration: 2,
    rotate: 360,
    scrub:10,
    pin:true,
})
// gsap.from("#page2 #box", {
//     scale: 0,
//     // delay: 2,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: { 
//         trigger: "#page2 #box",
//         markers:true,
//         start:"top 10%"
//      }
// })

gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers:true

    }
})