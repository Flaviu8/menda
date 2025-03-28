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

// Function to switch between tabs
function showTab(tabName) {
    // Get all tab content elements
    const allTabs = document.querySelectorAll('.tab-content');
    // Remove 'active' class from all tabs
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Hide all tab buttons
    const allBtns = document.querySelectorAll('.tab-btn');
    allBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Set the selected tab button as active
    const selectedBtn = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
    selectedBtn.classList.add('active');
}




