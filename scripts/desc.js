var titlE1 = document.getElementById("title1")
var texT1 = document.getElementById("text1")
var clicK1 = document.getElementById("click1")

var titlE2 = document.getElementById("title2")
var texT2 = document.getElementById("text2")
var clicK2 = document.getElementById("click2")

var titlE3 = document.getElementById("title3")
var texT3 = document.getElementById("text3")
var clicK3 = document.getElementById("click3")


clicK1.addEventListener("click", clear1)

clicK2.addEventListener("click", clear2)

clicK3.addEventListener("click", clear3)


function clear1() {
    if(!x2.matches) {
        titlE1.style.fontSize = "0px"
        texT1.style.fontSize = "0px"
    }
    clicK1.innerHTML = ""
    clicK1.classList.toggle("check")

    setTimeout(() => {
        if (clicK1.classList.contains("check")) {
            titlE1.style.fontSize = "26px"
            texT1.style.fontSize = "16px"
            titlE1.innerHTML = "Calisthenics"
            texT1.innerHTML = "I am a calisthenics athlete with 3 years of experience"
            clicK1.innerHTML = "[Go Back]"
        }
        if (clicK1.classList.contains("check") && x2.matches) {
            titlE1.style.fontSize = "26px"
            texT1.style.fontSize = "14px"
            titlE1.innerHTML = "Calisthenics"
            texT1.innerHTML = "I am a calisthenics athlete with 3 years of experience"
            clicK1.innerHTML = "[Go Back]"
        }
    }, 1000);

    if (!clicK1.classList.contains("check")) {
        if(!x2.matches) {
            titlE1.style.fontSize = "0px"
            texT1.style.fontSize = "0px"
        }
        setTimeout(() => {
            titlE1.style.fontSize = "26px"
            texT1.style.fontSize = "16px"
            titlE1.innerHTML = "More About Me"
            texT1.innerHTML = "Programming is not the only special thing about me.."
            clicK1.innerHTML = "[Show Info]"
        }, 1000);

    }
    if (!clicK1.classList.contains("check") && x2.matches) {
        if(!x2.matches) {
            titlE1.style.fontSize = "0px"
            texT1.style.fontSize = "0px"
        }
        setTimeout(() => {
            titlE1.style.fontSize = "26px"
            texT1.style.fontSize = "14px"
            titlE1.innerHTML = "More About Me"
            texT1.innerHTML = "Programming is not the only special thing about me.."
            clicK1.innerHTML = "[Show Info]"
        }, 1000);

    }
}

function clear2() {
    if(!x2.matches) {
        titlE2.style.fontSize = "0px"
        texT2.style.fontSize = "0px"
    }
 
    clicK2.innerText = ""
    clicK2.classList.toggle("check")

    setTimeout(() => {
        if (clicK2.classList.contains("check")) {
            titlE2.style.fontSize = "26px"
            texT2.style.fontSize = "16px"
            titlE2.innerHTML = "FASTKEYWRITER"
            texT2.innerHTML = "You can find out more in the projects section"
            clicK2.innerHTML = "[Go Back]"
        }
        if (clicK2.classList.contains("check") && x2.matches) {
            titlE2.style.fontSize = "26px"
            texT2.style.fontSize = "14px"
            titlE2.innerHTML = "FASTKEYWRITER"
            texT2.innerHTML = "You can find out more in the projects section"
            clicK2.innerHTML = "[Go Back]"
        }
    }, 1000);

    if (!clicK2.classList.contains("check")) {
        if(!x2.matches) {
            titlE2.style.fontSize = "0px"
            texT2.style.fontSize = "0px"
        }
        setTimeout(() => {
            titlE2.style.fontSize = "26px"
            texT2.style.fontSize = "16px"
            titlE2.innerHTML = "Current Project"
            texT2.innerHTML = "My current project is.."
            clicK2.innerHTML = "[Show Info]"
        }, 1000);

    }
    if (!clicK2.classList.contains("check") && x2.matches) {
        if(!x2.matches) {
            titlE2.style.fontSize = "0px"
            texT2.style.fontSize = "0px"
        }
        setTimeout(() => {
            titlE2.style.fontSize = "26px"
            texT2.style.fontSize = "14px"
            titlE2.innerHTML = "Current Project"
            texT2.innerHTML = "My current project is.."
            clicK2.innerText = "[Show Info]"
        }, 1000);

    }
}

function clear3() {
    if(!x2.matches) {
        titlE3.style.fontSize = "0px"
        texT3.style.fontSize = "0px"
    }
    clicK3.innerHTML = ""
    clicK3.classList.toggle("check")

    setTimeout(() => {
        if (clicK3.classList.contains("check")) {
            titlE3.style.fontSize = "26px"
            texT3.style.fontSize = "16px"
            titlE3.innerHTML = "Find me on"
            texT3.innerHTML = "Instagram: denis8.sw"
            clicK3.innerHTML = "[Go Back]"
        }
        if (clicK3.classList.contains("check") && x2.matches) {
            titlE3.style.fontSize = "26px"
            texT3.style.fontSize = "14px"
            titlE3.innerHTML = "Find me on"
            texT3.innerHTML = "Instagram: denis8.sw"
            clicK3.innerHTML = "[Go Back]"

            
        }
    }, 1000);

    if (!clicK3.classList.contains("check")) {
        if(!x2.matches) {
            titlE3.style.fontSize = "0px"
            texT3.style.fontSize = "0px"
        }
        setTimeout(() => {
            titlE3.style.fontSize = "26px"
            texT3.style.fontSize = "16px"
            titlE3.innerHTML = "Socials"
            texT3.innerHTML = "Find me on.."
            clicK3.innerHTML = "[Show Info]"
        }, 1000);
    }

        if (!clicK3.classList.contains("check") && x2.matches) {
            if(!x2.matches) {
                titlE3.style.fontSize = "0px"
                texT3.style.fontSize = "0px"
            }
            setTimeout(() => {
                titlE3.style.fontSize = "26px"
                texT3.style.fontSize = "14px"
                titlE3.innerHTML = "Socials"
                texT3.innerHTML = "Find me on.."
                clicK3.innerHTML = "[Show Info]"
            }, 1000);

    }
}


var x2 = window.matchMedia("(max-width: 508px)") 