let indexValue = 1;
let i;

function changePosition(n){
    changeSlides(indexValue += n);
}

function changeSlides(n){
    let slides = document.getElementsByClassName("box");

    if(n > slides.length) {
        indexValue = 1;
    }
    if(n < 1) {
        indexValue = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indexValue-1].style.display = "block";
    
}