// gsap.to("#box",{
//     // scale:0,
//     // stagger:0.2,
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     // repeat:1,
//     yoyo:true
// })
var tl=gsap.timeline()
tl.from("h2",{
y:-30,
opacity:0,
duration:2
})
tl.from("h4",{
    y:-30,
opacity:0,
duration:2,
stagger:0.2
})