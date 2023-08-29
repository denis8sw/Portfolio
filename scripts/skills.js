var skilL1 = document.getElementById("skill1")
var imG1 = document.getElementById("img1")
var skText1 = document.getElementById("sktext1")

var skilL2 = document.getElementById("skill2")
var imG2 = document.getElementById("img2")
var skText2 = document.getElementById("sktext2")

var skilL3 = document.getElementById("skill3")
var imG3 = document.getElementById("img3")
var skText3 = document.getElementById("sktext3")

var skilL4 = document.getElementById("skill4")
var imG4 = document.getElementById("img4")
var skText4 = document.getElementById("sktext4")

var skilL5 = document.getElementById("skill5")
var imG5 = document.getElementById("img5")
var skText5 = document.getElementById("sktext5")

skilL1.addEventListener("click", clearit)

skilL2.addEventListener("click", clearit2)

skilL3.addEventListener("click", clearit3)

skilL4.addEventListener("click", clearit4)

skilL5.addEventListener("click", clearit5)

function clearit() {
    imG1.style.height = "60px"
    skText1.style.fontSize = "14px"
    skText1.innerHTML = "Loading..."
    skText1.style.top = "20px"

    imG1.classList.toggle("check")

    setTimeout(() => {
        if (imG1.classList.contains("check")) {
            skText1.innerHTML = "Intermediate" + "</br>" + "2 Year Experience" + "</br>" + "30 + Projects"
            skText1.style.color = 'darkorange'
            skText1.style.fontSize = "14px"
        }
        if (imG1.classList.contains("check") && x.matches) {
            skText1.innerHTML = "Intermediate" + "</br>" + "2 Year Experience" + "</br>" + "30 + Projects"
            skText1.style.color = 'darkorange'
            skText1.style.fontSize = "10px"
        }

    }, 1000);

    if (!imG1.classList.contains("check")) {
        imG1.style.height = "80px"
        skText1.style.fontSize = "20px"
        skText1.innerHTML = "Java Script"
        skText1.style.color = 'white'

    }
    if (!imG1.classList.contains("check") && y.matches) {
        imG1.style.height = "80px"
        skText1.style.fontSize = "14px"
        skText1.innerHTML = "Java Script"
        skText1.style.color = 'white'

    }
}


function clearit2() {
    imG2.style.height = "60px"
    skText2.style.fontSize = "14px"
    skText2.innerHTML = "Loading..."
    skText2.style.top = "20px"

    imG2.classList.toggle("check")

    setTimeout(() => {
        if (imG2.classList.contains("check")) {
            skText2.innerHTML = "Good" + "</br>" + "1 Year Experience" + "</br>" + "5 + Projects"
            skText2.style.color = 'lightgreen'
            skText2.style.fontSize = "14px"
        }
        if (imG2.classList.contains("check") && x.matches) {
            skText2.innerHTML = "Good" + "</br>" + "1 Year Experience" + "</br>" + "5 + Projects"
            skText2.style.color = 'lightgreen'
            skText2.style.fontSize = "10px"
        }

    }, 1000);

    if (!imG2.classList.contains("check")) {
        imG2.style.height = "80px"
        skText2.style.fontSize = "20px"
        skText2.innerHTML = "Java"
        skText2.style.color = 'white'

    }
    if (!imG2.classList.contains("check") && y.matches) {
        imG2.style.height = "80px"
        skText2.style.fontSize = "14px"
        skText2.innerHTML = "Java"
        skText2.style.color = 'white'

    }
}

function clearit3() {
    imG3.style.height = "60px"
    skText3.style.fontSize = "14px"
    skText3.innerHTML = "Loading..."
    skText3.style.top = "20px"

    imG3.classList.toggle("check")

    setTimeout(() => {
        if (imG3.classList.contains("check")) {
            skText3.innerHTML = "Good" + "</br>" + "1 Year Experience" + "</br>" + "20 + Projects"
            skText3.style.color = 'lightgreen'
            skText3.style.fontSize = "14px"
        }
        if (imG3.classList.contains("check") && x.matches) {
            skText3.innerHTML = "Good" + "</br>" + "1 Year Experience" + "</br>" + "20 + Projects"
            skText3.style.color = 'lightgreen'
            skText3.style.fontSize = "10px"
        }

    }, 1000);

    if (!imG3.classList.contains("check")) {
        imG3.style.height = "80px"
        skText3.style.fontSize = "20px"
        skText3.innerHTML = "C#"
        skText3.style.color = 'white'

    }
    if (!imG3.classList.contains("check") && y.matches) {
        imG3.style.height = "80px"
        skText3.style.fontSize = "14px"
        skText3.innerHTML = "C#"
        skText3.style.color = 'white'

    }
}

function clearit4() {
    imG4.style.height = "60px"
    skText4.style.fontSize = "14px"
    skText4.innerHTML = "Loading..."
    skText4.style.top = "20px"

    imG4.classList.toggle("check")

    setTimeout(() => {
        if (imG4.classList.contains("check")) {
            skText4.innerHTML = "Advanced" + "</br>" + "4 Years Experience" + "</br>" + "60 + Projects"
            skText4.style.color = 'lightblue'
            skText4.style.fontSize = "14px"
        }
        if (imG4.classList.contains("check") && x.matches) {
            skText4.innerHTML = "Advanced" + "</br>" + "4 Years Experience" + "</br>" + "60 + Projects"
            skText4.style.color = 'lightblue'
            skText4.style.fontSize = "10px"
        }

    }, 1000);

    if (!imG4.classList.contains("check")) {
        imG4.style.height = "80px"
        skText4.style.fontSize = "20px"
        skText4.innerHTML = "HTML"
        skText4.style.color = 'white'

    }
    if (!imG4.classList.contains("check") && y.matches) {
        imG4.style.height = "80px"
        skText4.style.fontSize = "14px"
        skText4.innerHTML = "HTML"
        skText4.style.color = 'white'

    }
}

function clearit5() {

    
    imG5.style.height = "60px"
    skText5.style.fontSize = "14px"
    skText5.innerHTML = "Loading..."
    skText5.style.top = "20px"

    imG5.classList.toggle("check")

    setTimeout(() => {
        if (imG5.classList.contains("check")) {
            skText5.innerHTML = "Advanced" + "</br>" + "3 Years Experience" + "</br>" + "40 + Projects"
            skText5.style.color = 'lightblue'
            skText5.style.fontSize = "14px"
        }
        if (imG5.classList.contains("check") && x.matches) {
            skText5.innerHTML = "Advanced" + "</br>" + "3 Years Experience" + "</br>" + "40 + Projects"
            skText5.style.color = 'lightblue'
            skText5.style.fontSize = "10px"
        }

    }, 1000);

    if (!imG5.classList.contains("check")) {
        imG5.style.height = "80px"
        skText5.style.fontSize = "20px"
        skText5.innerHTML = "CSS"
        skText5.style.color = 'white'

    }
    if (!imG5.classList.contains("check") && y.matches) {
        imG5.style.height = "80px"
        skText5.style.fontSize = "14px"
        skText5.innerHTML = "CSS"
        skText5.style.color = 'white'

    }
}


  var x = window.matchMedia("(max-width: 626px)")
  var y = window.matchMedia("(max-width: 438px)")