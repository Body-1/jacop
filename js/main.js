// Toggle Navbar Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle("active")
};

// Scroll Sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*= '+ id +']').classList.add("active");
            });
            // active section for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show-animate");
        }
    });

    // Remove Toggle icon And Navbar When Click Navbar Links (Scroll)
    menuIcon.classList.remove("fa-xmark")
    navbar.classList.remove("active")
    
}