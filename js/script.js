
// menu navigation
const toggle = document.querySelector(".toggle_menu");
const navbar = document.querySelector(".nav");

toggle.addEventListener("click" , function() {
	// alert("gggg");
	navbar.classList.toggle("slide");
	toggle.classList.toggle("change");
})



// header sticky scrolling

const header = document.querySelector("header");

window.addEventListener("scroll" ,function() {
	if(this.scrollY > 0) {
		header.classList.add("sticky");
		navbar.classList.remove("slide");
		toggle.classList.remove("change");
	} else {
		header.classList.remove("sticky");
	}
})