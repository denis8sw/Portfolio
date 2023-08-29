var menuIcon = document.getElementById("menuicon")
var theDrop = document.getElementById("thedrop")

var theHref1 = document.getElementById("thehref1")
var theHref2 = document.getElementById("thehref2")
var theHref3 = document.getElementById("thehref3")

const theHtml = document.querySelector("html")

const theParticles = document.getElementById("particles-js")

menuIcon.addEventListener("click", openMenu)

theDrop.style.left = "-1300px"

function openMenu() {
    theHtml.style.overflowY = "hidden"
    theDrop.classList.add("check")
    if (theDrop.classList.contains("check")) {
        theDrop.classList.add("drop2")

        theDrop.style.left = "0px"
      
    }
}

function closeMenu() {
    theDrop.classList.remove("check")

    theDrop.classList.remove("drop2")

    theDrop.style.left = "-1300px"
    theHtml.style.overflowY = "visible"
}


function autoScroll11() {
    theHtml.style.overflowY = "visible"

    theDrop.classList.remove("check")
    theDrop.classList.remove("drop2")


    theDrop.style.left = "-1300px"
    
    if (!x33.matches) {
        window.scrollTo(0, 2100);
    } 
     else if (x33.matches) {
        window.scrollTo(0, 1800);
    }

}

function autoScroll12() {
    theHtml.style.overflowY = "visible"
    theDrop.classList.remove("check")
    theDrop.classList.remove("drop2")
  
    theDrop.style.left = "-1300px"
    window.scrollTo(0, 3500000000);
}



var x33 = window.matchMedia("(max-width: 439px)")