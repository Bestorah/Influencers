var menuBtn = document.querySelector(".menuBtn");
var sideNav = document.querySelector(".sideNav"); 
var menu = document.querySelector("#menu");
var sideNav = document.querySelector(".sideNav");  
sideNav.style.right = "-250px"; 

menuBtn.addEventListener("click", function() {
    if (sideNav.style.right === "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://i.ibb.co/rc6Kkny/close-24dp-E8-EAED-FILL0-wght400-GRAD0-opsz24.png";
    } else {
        sideNav.style.right = "-250px"; 
        menu.src = "https://i.ibb.co/rHWjwTQ/menu-24dp-E8-EAED-FILL0-wght400-GRAD0-opsz24.png";
    }
});

console.log("menuBtn clicked");



// My dropdown button
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");


dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle("show");
});

// My scroll speed settings
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
