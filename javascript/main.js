const nav = document.querySelector("#menu");
const button = document.querySelector("#showmenu");
if (button) {
	button.addEventListener("click", (e) => {
		nav.classList.toggle("show-hide");
		button.classList.toggle("button--active");
	});
}

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		document.getElementById("scroll-top").style.display = "block";
	} else {
		document.getElementById("scroll-top").style.display = "none";
	}
}

const scrollToTop = document.querySelector("#scroll-top");
if (scrollToTop) {
	scrollToTop.addEventListener("click", (e) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}
