angular.module('inj', [])
    .controller('injctl', function() {
        this.linkedin = 'https://www.linkedin.com/in/avidor-torgeman-37884b104';
        this.github = 'https://github.com/avidort';
        this.email = 'mailto:avidor98@gmail.com';
        this.titles = ['Software Engineer', '{fancyTitle}', 'Web Developer'];
    });

window.onload = function() { document.body.className = ''; }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }
document.getElementById('bg').style.backgroundImage = 'url("/img/bg' + (Math.floor(Math.random() * 2) + 0) + '.jpg")';
