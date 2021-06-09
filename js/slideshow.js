var slideindex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {
        slideindex = 1;
    }
    console.log(slides);
    slides[slideindex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}