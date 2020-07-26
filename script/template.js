
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
        zoomedImage.style.width = "400px";
        zoomedImage.style.height ="auto";
        zoomedImage.style.display ="block";
        zoomedImage.style.margin = "0 auto";
        

        
        document.body.querySelector("#photo").append(zoomedImage);
        document.body.querySelector("#pictureDiscription").innerText =  div.children[0].children[0].alt


        document.body.querySelector("#imageZoom").style["display"] = "block";
    }
}

//add a closing functionality to the zoom display div
document.body.querySelector(".closeZoom").addEventListener("click",closeZoomWindow);
function closeZoomWindow(){
    document.body.querySelector("#photo").children[0].remove();
    document.body.querySelector("#imageZoom").style["display"] = "none";
}

//the more button funtion
let moreButton = document.body.querySelector(".fullBodyImage").querySelector("button");
moreButton.addEventListener("click",displayMoreInfo);

function displayMoreInfo(){
    console.log("button clicked")
    document.body.querySelector("#moreInfo").style.display = "block";
}


//add a closing functionality to the moreInfo display div
document.body.querySelector(".closeMoreInfo").addEventListener("click",closeMoreInfo);
function closeMoreInfo(){
    
    document.body.querySelector("#moreInfo").style.display = "none";
}