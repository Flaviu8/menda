document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

        fetch("components/hero.html")
        .then(response => response.text())
        .then(data => document.getElementById("hero").innerHTML = data);

        fetch("components/main.html")
        .then(response => response.text())
        .then(data => document.getElementById("main").innerHTML = data);

        fetch("pricing.html")
        .then(response => response.text())
        .then(data => document.getElementById("pricing").innerHTML = data);


        fetch("components/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navBar = document.getElementById("nav-bar");

    hamburger.addEventListener("click", function() {
        navBar.classList.toggle("active");

    });
});


document.getElementById("hamburger").addEventListener("click", function () {
    let menuIcon = document.getElementById("menu-icon");
    let isOpen = menuIcon.src.includes("burger-menu.svg");

    menuIcon.src = isOpen 
        ? "./assets/icons/cross.svg" 
        : "./assets/icons/burger-menu.svg";
});





