function printform() {
    // Getting the values of the form fields by their IDs
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const number = document.getElementById("number").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;

    // Regex for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Regex for password validation (at least 8 characters, at least one number, one lowercase, one uppercase letter)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Regex for phone number validation (simple 10-digit check)
    const numberPattern = /^\d{10}$/;

    // Checking if all fields are filled
    if (!fname || !email || !password || !number || !lname || !address) {
        alert("Please fill in all fields.");
        return; // If not all fields are filled, stop the function
    }

    // Email validation
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // If the email is invalid, stop the function
    }

    // Password validation
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
        return; // If the password doesn't meet the requirements, stop the function
    }

    // Phone number validation
    if (!numberPattern.test(number)) {
        alert("Please enter a valid 10-digit phone number.");
        return; // If the phone number is invalid, stop the function
    }
    console.log(fname)
}
