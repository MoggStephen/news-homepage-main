const burgerBtn = document.querySelector(".burger-dropdown");
const overlay = document.querySelector(".overlay-none");
const linksContainer = document.querySelector(".links-container");

let dropDownActive = false;
burgerBtn.addEventListener("click", () => {

    if (dropDownActive === false){
        dropDownActive = true;
        overlay.classList.replace("overlay-none", "overlay-active");
        burgerBtn.classList.replace("burger-dropdown", "burger-dropdown-active");
        linksContainer.classList.replace("links-container", "links-container-active");
    }
    else if (dropDownActive === true){
        dropDownActive = false;
        overlay.classList.replace("overlay-active", "overlay-none");
        burgerBtn.classList.replace("burger-dropdown-active", "burger-dropdown");
        linksContainer.classList.replace("links-container-active", "links-container");
    }
})

//TO fix issue with burger drop down menu being active and a user resizing the window
//This leaves unwanted mobile screen size classnames
//Event listener on window for when it resizes!
//THis is abit overkill as you can just add the mobile classnames in the desktop and duplicate
//  desktop classes and leave the user in the same state that they left it before they changed to desktop

let prevScreenWidth = null;
function toggleNavLinks() {

  console.log(window.innerWidth)
  if (window.innerWidth > prevScreenWidth && window.innerWidth > 1300 && window.innerWidth < 1315) {
    let burgerBtn = null;
    let linksContainer = null;
    let overlay = null;
  
    //GET elements
    //Factoring in different classnames that there could be
    burgerBtn = document.querySelector(".burger-dropdown");
    if (burgerBtn === null){
      burgerBtn = document.querySelector(".burger-dropdown-active");
    }
    linksContainer = document.querySelector(".links-container");
    if(linksContainer === null){
      linksContainer = document.querySelector(".links-container-active");
    }
    overlay = document.querySelector(".overlay-none");
    if(overlay === null){
      overlay = document.querySelector(".overlay-active");
    }

    //RESET TO BASE CLASSNAMES
    burgerBtn.classList.replace(burgerBtn.className, "burger-dropdown");
    linksContainer.classList.replace(linksContainer.className, "links-container");
    overlay.classList.replace(overlay.className, "overlay-none");
  }
  prevScreenWidth = window.innerWidth;
}

window.addEventListener('resize', toggleNavLinks);