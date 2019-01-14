document.addEventListener("click", changeColor);
var pic = document.body.ge

var x = 0;
function changeColor() {
    if (x) {
        document.body.style.backgroundColor = 'white';
        document.body.style.backgroundImage = 'url(128invert.png)';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundImage = 'url(128.png)';
    }
    x = !x;

}