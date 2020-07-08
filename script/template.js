
//the zooming function on when the small pictures are clicked
let imageDiv = document.body.querySelectorAll('.imgDiv');
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
        zoomedImage.style.width = "500px";
        zoomedImage.style.height ="auto";
        zoomedImage.style.display ="block";
        zoomedImage.style.margin = "0 auto";
        
        document.body.querySelector("#imageZoom").append(zoomedImage);


        document.body.querySelector("#imageZoom").style["display"] = "block";
    }
}

//add a closing functionality to the zoom display div
document.body.querySelector(".closeZoom").addEventListener("click",closeZoomWindow);
function closeZoomWindow(){
    document.body.querySelector("#imageZoom").children[1].remove();
    document.body.querySelector("#imageZoom").style["display"] = "none";
}

