var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
function updateDimention() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    vh = Math.max(document.documentElement.clienthHeight || 0, window.innerHeight || 0)
}
let height = function(){return vh};
let width = function(){return vw};

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
function Animation(){
    const entryAnim = gsap.timeline(
        {
            scrollTrigger:{
                scrub:true,
                pin:true,
                trigger:".main",
                start:"top top",
                end:"+=6000px",
            },
            // yoyo:true,
        }
        );
        entryAnim.to(

            ".pic1",
            gsapToObj([[0,0],[0.155,0.2],[0.18,0.25],[0.23,0.395]]),
            
            ).to(

            ".pic2",
            gsapToObj([[0.18,0],[0.15,0.21],[0,0.40],[-0.000503,0.75]]),
            
            ).to(
            ".pic3",{
            motionPath:{
                path:[[-0.15,-0.10],[-0.10,-0.5],[0,0],[0.4245,0.324]],
                // type:"cubic",
                autorotate:false,
            }, 
           

        }).to(
            ".pic4",{
            motionPath:{
                path:[[0,-0.2*height()],[0,-0.4],[0,-0.5],[0,-0.6209]],
                // type:"cubic",
                autorotate:false,
            }, 
           
        }).to(
            ".pic5",{
            motionPath:{
                path:[[-0.02,0],[-0.1,0},[-0.2,0},[-0.65,0}],
                // type:"cubic",
                autorotate:false,
            }, 
           
        
        }).to(
            ".pic6",{
            motionPath:{
                path:[[0,-0.232*height()],[0.43,-0.532],[0.1,-0.632],[0.13,-0.677]],
                // type:"cubic",
                autorotate:false,
            }, 
           
        
        });
        entryAnim.pause()
              
        const rotationAnim = gsap.timeline(
        {
            scrollTrigger:{
                trigger:".main",
                start:"top top",
                end:"+=6000px",
                pin:true,
                scrub:true
            },
            // yoyo:true,
        }
        );
        rotationAnim.pause()
        rotationAnim.to(".pic1",{
            rotation:295,
        }).to(".pic2",{
            rotation:329,
        }).to(".pic3",{
            rotation:48,
        }).to(".pic4",{
            rotation:186,
        }).to(".pic5",{
            rotation:17,
        }).to(".pic6",{
            rotation:126,
        })
}
Animation()
function updateAnimation (){
    updateDimention();
    Animation();

}

window.onresize=updateAnimation;


function gsapToObj(cords){
    
    let obj = {
        motionPath:{
            path:[],
            autorotate:true,
        },
        display:"block",

    }
    for(let i = 0; i<cords.length;i++){
        let xcomp = cords[i][0] 
        let ycomp =  cords[i][1]
        obj.motionPath.path.push({
            x:xcomp,
            ycomp*height(),
        })
        console.log(obj)
    }
    

    return obj
}
  