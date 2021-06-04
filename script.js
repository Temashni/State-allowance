const COUNT_SLIDE = 4;
let indexActiveSlide = 0;

function nextSlide() {
    if (indexActiveSlide === COUNT_SLIDE-1) {
        indexActiveSlide = 0
    } else {
        indexActiveSlide += 1;
    }

    updateMargin();
}

function prevSlide() {
    if (indexActiveSlide === 0) {
        indexActiveSlide = COUNT_SLIDE-1
    } else {
        indexActiveSlide -= 1;
    }

    updateMargin();
}

function updateMargin() {
    document.getElementById("manager-slide")
        .style.marginLeft = indexActiveSlide * 100 * -1 + '%';
}

function show(){ document.getElementById("modal").style.display="flex";
document.getElementById("scroll").style.overflow="hidden";
}

function unshow(){
  document.getElementById("modal").style.display="none";
  document.getElementById("scroll").style.overflow="auto";
}

