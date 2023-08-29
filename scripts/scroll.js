


function autoScroll() {

    if(!cv.matches) {
        window.scrollTo(0, 1600);
    } else {
        window.scrollTo(0, 2900);
    }
   

}

function autoScroll2() {

    window.scrollTo(0, 300000);

}


var cv = window.matchMedia("(max-height: 580px)")