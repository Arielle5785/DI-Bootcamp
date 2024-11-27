function myMove() {
    let animate = document.getElementById('animate');
    let container = document.getElementById('container');
    let position = 0;
    let containerWidth = container.offsetWidth;
    let animateWidth = animate.offsetWidth;
    let interval = setInterval(function () {
        if (position + animateWidth >= containerWidth) {
            clearInterval(interval);
        }
        else {
            position++;
            animate.style.left = position + 'px';
        }
    }
    ,1)
}