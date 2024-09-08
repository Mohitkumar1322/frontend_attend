// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration, allow any user to login
    if (username && password) {
        localStorage.setItem('studentName', username);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// On Dashboard Page Load, Populate Details
if (window.location.pathname.includes('dashboard.html')) {
    const studentName = localStorage.getItem('studentName');
    document.getElementById('studentName').textContent = studentName;

    // Dummy data for demonstration
    const studentDetails = {
        branch: "Computer Science",
        course: "Web Development",
        attendance: "90%"
    };

    document.getElementById('branch').textContent = studentDetails.branch;
    document.getElementById('course').textContent = studentDetails.course;
    document.getElementById('attendance').textContent = studentDetails.attendance;
}
function logout() {
    // Clear any session storage or authentication tokens
    sessionStorage.clear(); // Example: Clearing session storage

    // Optionally, clear cookies if your authentication uses cookies
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to the login page
    window.location.href = "login.html"; // Change to the actual login page URL
}
