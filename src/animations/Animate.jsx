window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.animated')

    for (var y = 0; y < reveals.length; y++) {
        var windowHeight = window.innerHeight
        var revealTop = reveals[y].getBoundingClientRect().top;
        var revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            reveals[y].classList.add('active')
        } else {
            reveals[y].classList.remove('active')
        }
    }
}