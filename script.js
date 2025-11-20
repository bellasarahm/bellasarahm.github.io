let isShown = true;

document.getElementById("menuIcon").addEventListener("click", showHide);

function showHide(){


let sideBarHideShow = document.getElementsByClassName('sidebar')[0];


let content = document.getElementsByClassName('container-content')[0];

// classes return as an array

if(isShown){

    sideBarHideShow.style.display = "none";

    if(window.innerWidth <=1000){

   content.style.position = "absolute";
   content.style.left = "0px"
   content.style.width = "100%"
   isShown = false;
    }
    else {content.style.position = "absolute";
    content.style.left = "0px"
    content.style.width = "calc(100%-50px)"
    isShown = false;
    }
}

else{ 

    sideBarHideShow.style.display = "block";

    if(window.innerWidth <= 1000){
    content.style.position = "absolute";
    content.style.left = "20px"
    content.style.width = "100%"
    isShown = true;

    }
    else{
    content.style.position = "absolute";
    content.style.left = "200px"
    content.style.width = "calc(100%-200px)"
    isShown = true;

    }
}

// changing colors (surviving a crashout haha)
// step 1: identify what it is we want to fire event

document.getElementById("one").addEventListener("click", changeColors);

// step 2: tell js what to do when event fired

function changeColors() {


    let content = document.getElementsByClassName('content')[0]
    
    if(content.style.color == 'white')
    {
        content.style.color == 'var(--chili-red)'
    }

    if(content.style.color == 'var(--chili-red)')
        {
        content.style.color = 'white'
    }

    if(content.style.color == 'white')
    {
        content.style.color = 'var(--chili-red)'
    }
 }
}
