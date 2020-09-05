// function showmenu() {
//     var x = document.getElementById("menu");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


const nav = document.querySelector('#menu');
const button = document.querySelector('#showmenu');
if (button) {
    button.addEventListener('click', (e) => {
        nav.classList.toggle('show-hide');
    });
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-top").style.display = "block";
    } else {
        document.getElementById("scroll-top").style.display = "none";
    }
}

const scrolltotop = document.querySelector('#scroll-top');
// if (scrolltotop) {
//     window.addEventListener('scroll', (e) => {
//         scrolltotop.classList.add('scrollbutton');
//     });
// }
if (scrolltotop) {
    scrolltotop.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}