let mainBlock = document.body.querySelector("main")

gsap.registerPlugin(ScrollTrigger);
const entryAnim = gsap.timeline(
{
    ScrollTrigger:{
        scrub:true,
        pin:true,
        trigger:'.main',
        start:"top top",
        end:"+=90000px",
    },
    yoyo:true,

}
);
entryAnim.pause()
entryAnim.to(".pic1",{xPercent:'500'})