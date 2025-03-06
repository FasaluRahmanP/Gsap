document.addEventListener('DOMContentLoaded', () => {
    gsap.to("#overlay", {
        y: "-100%",
        duration: 1.5,
        delay: 0,
        ease: "power2.inOut",
        onComplete: () => {
            document.querySelector("#overlay").style.display = "none";
            document.body.style.overflow = "auto";
        }
    });


    const headings = document.querySelectorAll('.line-mask h1');
    const tl = gsap.timeline(); 

    headings.forEach((heading, index) => {
        tl.to(heading, {
            y: 0, 
            duration: 0.9,
            ease: 'powe1.out',
            delay: index * 0.3
        });
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".expand-image", {
    scale: 20, 
    ease: "none", 
    scrollTrigger: {
        trigger: "body", 
        start: "top top", 
        end: "bottom bottom",
        scrub: true, 
    }
});