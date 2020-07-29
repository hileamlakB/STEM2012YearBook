
//the zooming function on when the small pictures are clicked
let imageDiv = document.body.querySelectorAll('.picAndCaption');
imageDiv.forEach(zoomImage)
function zoomImage(div){

    div.addEventListener("click",displayZoomPage);

    function displayZoomPage(){

        
        //There is something weird about javascript that happens here
        //something I will need to investigate. The thing is  when 
        // the child element is appended to another parent it is deleted from its parent
        let zoomedImageSRC = div.children[0].children[0].src;
        let zoomedImage = document.createElement('img');
        zoomedImage.src = zoomedImageSRC;
        zoomedImage.style.minWidth = "10vw";
        zoomedImage.style.maxWidth = "90vw";
        zoomedImage.style.height ="auto";
        zoomedImage.style.maxHeight ="90vh";
        zoomedImage.style.display ="block";
        zoomedImage.style.margin = "0 calc((10vw - 20px) / 2)";
        zoomedImage.style.border = "10px solid #000000";
        

        
        document.body.querySelector("#photo").append(zoomedImage);
        document.body.querySelector("#pictureDiscription").innerText =  div.children[0].children[0].alt


        document.body.querySelector("#imageZoom").style["display"] = "flex";
        document.body.querySelector("#imageZoom").style["flex-wrap"] = "wrap";        
        togleScroll(0);
    }
}

//add a closing functionality to the zoom display div
document.body.querySelector(".closeZoom").addEventListener("click",closeZoomWindow);
function closeZoomWindow(){
    document.body.querySelector("#photo").children[0].remove();
    document.body.querySelector("#imageZoom").style["display"] = "none";
    togleScroll(1);
}

//the more button funtion
let moreButton = document.body.querySelector(".fullBodyImage").querySelector("button");
moreButton.addEventListener("click",()=>{
    document.body.querySelector("#moreInfo").style.display = "block";
    togleScroll(0)
});

//add a closing functionality to the moreInfo display div
document.body.querySelector(".closeMoreInfo").addEventListener("click",()=>{
    document.body.querySelector("#moreInfo").style.display = "none";
    togleScroll(1);

});

    
    


//preven the gsap animation from hapeneing while the more info or the image zoom is opened
function togleScroll(state){
    
    document.documentElement.style.overflowY = (state)? "scroll":"hidden";
}

