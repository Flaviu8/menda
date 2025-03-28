async function registerUser() {
    // Get values from individual or company fields based on the selected tab
    const userType = document.querySelector('.tab-btn.active').innerText.toUpperCase(); // Get the active tab text
    const username = document.getElementById(userType === "COMPANY" ? "company-username" : "username").value;
    const email = document.getElementById(userType === "COMPANY" ? "company-email" : "email").value;
    const password = document.getElementById(userType === "COMPANY" ? "company-password" : "password").value;

    // Only include company details if "Company" is selected
    const companyName = userType === "COMPANY" ? document.getElementById("company-name").value : null;
    const companyRegistrationNumber = userType === "COMPANY" ? document.getElementById("company-registration-number").value : null;

    // Request data to send to the backend
    const requestData = {
        username,
        email,
        password,
        userType,
        companyName,
        companyRegistrationNumber
    };

    console.log("Sending registration data:", requestData);

    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert("Error: " + response.statusText);
        }
    } catch (error) {
        console.error("Request failed:", error);
        alert("An error occurred.");
    }
}


async function loginUser() {
    // Get the form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;
    event.preventDefault(); // Prevents form from submitting via GET


    const requestData = {
        email,
        password,
        remember
    };

    try {
        const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            credentials:"include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            // Handle successful login
            const data = await response.json(); // Assuming the server sends back user data or a token
            alert("Login successful!");
            // Optionally, redirect to a dashboard or home page
        } else {
            // Handle error
            alert("Login failed. Please check your credentials.");
            window.location.href = "dashboard.html"; // Redirect after login

        }
    } catch (error) {
        console.error("Login request failed:", error);
        alert("An error occurred. Please try again later.");
    }
}





function showTab(tabName) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tabBtn => tabBtn.classList.remove('active')); // Remove active class from all tabs
       const allBtns = document.querySelectorAll('.tab-btn');
    allBtns.forEach(btn => btn.classList.remove('active'));
    // Show selected tab
    document.getElementById(tabName).classList.add('active');

      // Set the selected tab button as active
      const selectedBtn = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
      selectedBtn.classList.add('active');

    // Save the selected tab to localStorage
    localStorage.setItem('selectedTab', tabName);
}


// On page load, check if a tab is saved in localStorage and activate it
document.addEventListener('DOMContentLoaded', function() {
    const savedTab = localStorage.getItem('selectedTab'); // Retrieve the selected tab from localStorage
    if (savedTab) {
        // If a tab is stored in localStorage, show that tab
        showTab(savedTab);
    } else {
        // Default to 'individual' tab if no tab is saved
        showTab('individual');
    }
});
