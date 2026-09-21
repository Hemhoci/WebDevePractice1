var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    /* toggle betweeen adding and removing the "active" class,
    to hightlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding  and show the active panel */
    var panel = this.nextElementSibling;
    if(panel.style.display === "block"){
        panel.style.display = "none";
    }else{
        panel.style.display = "block";
    }
});
}