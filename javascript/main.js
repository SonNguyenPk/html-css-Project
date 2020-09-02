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