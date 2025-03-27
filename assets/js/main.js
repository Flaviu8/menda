document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

        fetch("components/hero.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

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


