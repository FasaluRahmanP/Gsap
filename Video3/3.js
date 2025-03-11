var intialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`
var string = document.querySelector("#string")
string.addEventListener("mousemove", function (dets) {
    intialPath = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to("svg path", { 
        attr: { d: intialPath } 
    })
})