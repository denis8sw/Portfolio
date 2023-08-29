const theGame = document.getElementById("thegame")
const playBtn = document.getElementById("playbtn")

const mainText = document.getElementById("maintext")
const theBtns = document.querySelectorAll(".btns")

const theBoxes = document.getElementById("theboxes")
const realBoxes = document.querySelectorAll(".box8")

const playBack = document.getElementById("playback")

const theBox1 = document.getElementById("thebox1")
const theBox2 = document.getElementById("thebox2")
const theBox3 = document.getElementById("thebox3")

const boxText1 = document.getElementById("boxtext1")
const boxText2 = document.getElementById("boxtext2")
const boxText3 = document.getElementById("boxtext3")

const theThird = document.getElementById("thethird")

const theText1 = document.getElementById("thetext1")
const theText2 = document.getElementById("thetext2")
const theText3 = document.getElementById("thetext3")

theBoxes.style.display = "none"
playBack.style.display = "none"

theText1.style.display = "none"
theText2.style.display = "none"
theText3.style.display = "none"

let track;

playBtn.addEventListener("click", function () {
     console.log("hello")

     theBtns.forEach(element => {
          element.style.opacity = "0"
          element.style.cursor = "default"
          setTimeout(() => {
               element.style.display = "none"

               theBoxes.style.display = "flex"
               playBack.style.display = "block"

               if (theBoxes.style.display == "flex") {
                    realBoxes.forEach(element => {
                         element.style.opacity = "0"
                         theBox2.style.marginRight = "10px"
                         theBox2.style.marginLeft = "10px"
                         setTimeout(() => {
                              element.style.opacity = "1"
                              theBox2.style.marginRight = "30px"
                              theBox2.style.marginLeft = "30px"
                         }, 100);

                    });
               }


          }, 100);

     });
})


playBack.addEventListener("click", goBack)

function goBack() {
     if (!(track == "inprojects1" || track == "inprojects2" || track == "inprojects3")) {

          theBoxes.style.display = "none"
          playBack.style.display = "none"
          theGame.style.border = "0px"

          languageDiv.style.display = "none"

          theImgs.forEach(element => {
               element.style.opacity = "0"
          });

          theBtns.forEach(element => {
               element.style.display = ""

               setTimeout(() => {
                    element.style.opacity = "1"
                    element.style.cursor = "pointer"
               }, 100);

          });
     } else if (track == "inprojects1") {

          if (!x.matches) {
               boxText1.style.fontSize = "20px"
               theBox1.style.height = "200px"
               boxText1.style.top = "55px"
          } else {
               boxText1.style.fontSize = "12px"
               theBox1.style.height = "140px"
               boxText1.style.top = "40px"
          }
          theGame.style.height = "800px"
          theText1.style.display = "none"

          if (!x55.matches) {
               theThird.style.height = "800px"
          } else {
               theThird.style.height = "660px"
          }

          setTimeout(() => {
               if (!x.matches) {
                    theBox1.style.width = "200px"
               } else {
                    theBox1.style.width = "120px"
               }

          }, 600);

          setTimeout(() => {
               theBox2.style.display = ""
               theBox3.style.display = ""
          }, 1000);

          setTimeout(() => {
               theBox1.style.cursor = "pointer"
               boxText1.classList.add("hover")
               theBox2.style.opacity = "1"
               theBox3.style.opacity = "1"
               track = "0"
               theBox1.addEventListener("click", openBox1)
               theBox2.addEventListener("click", openBox2)
               theBox3.addEventListener("click", openBox3)

          }, 1300);
     } else if (track == "inprojects2") {

          if (!x.matches) {
               boxText2.style.fontSize = "20px"
               theBox2.style.height = "200px"
               boxText2.style.top = "55px"
          } else {
               boxText2.style.fontSize = "12px"
               theBox2.style.height = "140px"
               boxText2.style.top = "40px"
          }


          theGame.style.height = "800px"
          theText2.style.display = "none"
          if (!x55.matches) {
               theThird.style.height = "800px"
          } else {
               theThird.style.height = "660px"
          }

          setTimeout(() => {
               if (!x.matches) {
                    theBox2.style.width = "200px"
               } else {
                    theBox2.style.width = "120px"
               }
          }, 600);

          setTimeout(() => {
               theBox1.style.display = ""
               theBox3.style.display = ""
          }, 1000);

          setTimeout(() => {
               theBox2.style.cursor = "pointer"
               boxText2.classList.add("hover")

               theBox2.style.marginRight = "30px"
               theBox2.style.marginLeft = "30px"
               theBox1.style.opacity = "1"
               theBox3.style.opacity = "1"
               track = "0"
               theBox1.addEventListener("click", openBox1)
               theBox2.addEventListener("click", openBox2)
               theBox3.addEventListener("click", openBox3)
          }, 1300);
     } else if (track == "inprojects3") {

          if (!x.matches) {
               boxText3.style.fontSize = "20px"
               theBox3.style.height = "200px"
               boxText3.style.top = "55px"
          } else {
               boxText3.style.fontSize = "12px"
               theBox3.style.height = "140px"
               boxText3.style.top = "40px"
          }

          theText3.style.display = "none"
          theGame.style.height = "800px"

          if (!x55.matches) {
               theThird.style.height = "800px"
          } else {
               theThird.style.height = "660px"
          }

          setTimeout(() => {
               if (!x.matches) {
                    theBox3.style.width = "200px"
               } else {
                    theBox3.style.width = "120px"
               }
          }, 600);

          setTimeout(() => {
               theBox1.style.display = ""
               theBox2.style.display = ""
          }, 1000);

          setTimeout(() => {
               theBox3.style.cursor = "pointer"
               boxText3.classList.add("hover")
               theBox1.style.opacity = "1"
               theBox2.style.opacity = "1"
               track = "0"
               theBox1.addEventListener("click", openBox1)
               theBox2.addEventListener("click", openBox2)
               theBox3.addEventListener("click", openBox3)
          }, 1300);
     }
}




theBox1.addEventListener("click", openBox1)

function openBox1() {
     playBack.removeEventListener("click", goBack)

     theBox1.style.cursor = "default"
     boxText1.classList.remove("hover")

     theBox1.removeEventListener("click", openBox1)
     theBox2.removeEventListener("click", openBox2)
     theBox3.removeEventListener("click", openBox3)

     track = "inprojects1"

     theBox2.style.opacity = "0"
     theBox3.style.opacity = "0"

     setTimeout(() => {
          theBox2.style.display = "none"
          theBox3.style.display = "none"
     }, 700);

     setTimeout(() => {
          theBox1.style.width = "600px"
     }, 1200);

     setTimeout(() => {
          boxText1.style.fontSize = "30px"
          boxText1.style.top = "-10px"
          theBox1.style.height = "500px"
          theGame.style.height = "1100px"

          theThird.style.height = "1200px"
          theText1.style.display = ""
          playBack.addEventListener("click", goBack)
     }, 1700);
}



theBox2.addEventListener("click", openBox2)

function openBox2() {
     playBack.removeEventListener("click", goBack)

     theBox2.style.marginRight = "0px"
     theBox2.style.marginLeft = "0px"

     theBox2.style.cursor = "default"
     boxText2.classList.remove("hover")

     theBox1.removeEventListener("click", openBox1)
     theBox2.removeEventListener("click", openBox2)
     theBox3.removeEventListener("click", openBox2)

     track = "inprojects2"

     theBox1.style.opacity = "0"
     theBox3.style.opacity = "0"

     setTimeout(() => {
          theBox1.style.display = "none"
          theBox3.style.display = "none"
     }, 700);

     setTimeout(() => {
          theBox2.style.width = "600px"
     }, 1200);

     setTimeout(() => {
          boxText2.style.fontSize = "30px"
          boxText2.style.top = "-10px"
          theBox2.style.height = "500px"
          theGame.style.height = "1100px"
          theText2.style.display = ""
          theThird.style.height = "1200px"
          playBack.addEventListener("click", goBack)
     }, 1700);
}

theBox3.addEventListener("click", openBox3)

function openBox3() {
     playBack.removeEventListener("click", goBack)

     theBox3.style.cursor = "default"
     boxText3.classList.remove("hover")

     theBox1.removeEventListener("click", openBox1)
     theBox2.removeEventListener("click", openBox2)
     theBox3.removeEventListener("click", openBox3)

     track = "inprojects3"

     theBox1.style.opacity = "0"
     theBox2.style.opacity = "0"

     setTimeout(() => {
          theBox1.style.display = "none"
          theBox2.style.display = "none"
     }, 700);

     setTimeout(() => {
          theBox3.style.width = "600px"
     }, 1200);

     setTimeout(() => {
          boxText3.style.fontSize = "30px"
          boxText3.style.top = "-10px"
          theBox3.style.height = "500px"
          theGame.style.height = "1100px"
          theText3.style.display = ""

          theThird.style.height = "1200px"
          playBack.addEventListener("click", goBack)
     }, 1700);
}


var x = window.matchMedia("(max-width: 616px)")
var x55 = window.matchMedia("(max-width: 738px)")