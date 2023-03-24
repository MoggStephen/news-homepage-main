//Get elements
const burgerBtn = document.querySelector(".burger-dropdown");
const linksContainer = document.querySelector(".links-container");
const overlay = document.querySelector(".overlay-none");

//Used to figure out if burger menu is collapsed or not
let dropDownActive = false;


//Burger icon is only visible in mobile
//Replace classlist names when clicked on
burgerBtn.addEventListener("click", () => {
    if (dropDownActive === false){
        dropDownActive = true;
        burgerBtn.classList.replace(burgerBtn.className, "burger-dropdown-active");
        linksContainer.classList.replace(linksContainer.className, "links-container-active");
        overlay.classList.replace(overlay.className, "overlay-active");
    }
    else if (dropDownActive === true){
        dropDownActive = false;
        burgerBtn.classList.replace("burger-dropdown-active", "burger-dropdown");
        linksContainer.classList.replace("links-container-active", "links-container");
        overlay.classList.replace("overlay-active", "overlay-none");
    }
})

//When we click on a link in mobile we need to remove the active classnames to remove the dropdown menu!
const links = document.querySelectorAll("nav a.link");
links.forEach(link =>{
  link.addEventListener("click", () =>{

    //Check if we are in mobile screenwidth
    if (window.innerWidth < 1300) {
      dropDownActive = false;

      //RESET TO BASE CLASSNAMES
      burgerBtn.classList.replace(burgerBtn.className, "burger-dropdown");
      linksContainer.classList.replace(linksContainer.className, "links-container");
      overlay.classList.replace(overlay.className, "overlay-none");
    }
  })
})

//To fix issue with burger drop down menu being active and a user resizing the window
//  this leaves unwanted mobile screen size classnames resulting in elements not being styled.

//This is abit overkill as you can just add the mobile classnames outside of the media query and duplicate
//  desktop screen size classes so there are no visual issues with the elements. This would result in
//  the user resizing back to the mobile version and if they left with the menu active they would return to it active!

//Event listener on window for when it resizes and change classnames where neccessary based of window.innerWidth
let previousScreenWidth = null;
window.addEventListener('resize', () =>{

  //Is true when => (screen size increases && screensize is between 1300 and 1315)
  if (window.innerWidth > previousScreenWidth && window.innerWidth > 1300 && window.innerWidth < 1315) {

    //RESET TO BASE CLASSNAMES
    burgerBtn.classList.replace(burgerBtn.className, "burger-dropdown");
    linksContainer.classList.replace(linksContainer.className, "links-container");
    overlay.classList.replace(overlay.className, "overlay-none");
  }
  previousScreenWidth = window.innerWidth;
});