// Function to validate the form
function validateForm() {
    // Get values from input fields
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    // Validate: Is name empty?
    if (name == "") {
        alert("⚠️ Please enter your name.");
        return false; // Prevent submission
    }

    // Validate: Is email empty?
    if (email == "") {
        alert("⚠️ Please enter your email.");
        return false;
    }

    // Validate: Is message empty?
    if (message == "") {
        alert("⚠️ Please enter a message.");
        return false;
    }

    // If validation passes
    alert("✅ Thank you, " + name + "! Your message has been sent (Simulated).");
    return true; // Allow submission
}