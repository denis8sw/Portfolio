const languageBtn = document.getElementById("languagebtn")
const languageDiv = document.getElementById("languagediv")

const theImgs = document.querySelectorAll(".imgs")

languageDiv.style.display = "none"

theImgs.forEach(element => {
    element.style.opacity = "0"
});

languageBtn.addEventListener("click", function() {
    console.log("hello")

    theBtns.forEach(element => {
         element.style.opacity = "0"
         element.style.cursor = "default"
         setTimeout(() => {
              element.style.display = "none"
              languageDiv.style.display = "flex"
              playBack.style.display = "block"
            
         }, 100);

         setTimeout(() => {
            if(languageDiv.style.display == "flex") {
                theImgs.forEach(element => {
                    element.style.opacity = "1"
                });
              }
         },200);
         

    });
})