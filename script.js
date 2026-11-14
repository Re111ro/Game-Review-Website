
/* Game Reviews */

function openReview(gameName, rating, reviewText) {
    document.getElementById("popupTitle").innerHTML = gameName;
    document.getElementById("popupRating").innerHTML = rating;
    document.getElementById("popupText").innerHTML = reviewText;

    var imageName = "";

    if (gameName == "Stardew Valley") {
        imageName = "stardew.jpg";
    }
    else if (gameName == "Undertale") {
        imageName = "undertale.jpg";
    }
    else if (gameName == "Hollow Knight") {
        imageName = "hollowknight.jpg";
    }
    else if (gameName == "Little Nightmares") {
        imageName = "littlenightmares.jpg";
    }

    document.getElementById("popupImage").src = "images/" + imageName;

    document.getElementById("reviewPopup").style.display = "block";
}

function closeReview() {
    document.getElementById("reviewPopup").style.display = "none";
}


/* Login Form */

function validateForm() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "") {
        alert("Please enter your username.");
        return false;
    }
    else if (pass == "") {
        alert("Please enter your password.");
        return false;
    }
    else {
        alert("Welcome to GamerClub, " + user + "!");
        window.location.href = "index.html";
        return false;
    }
}


/* Contact Form */

function validateContactForm() {
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    else if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    else if (message == "") {
        alert("Please enter a message.");
        return false;
    }
    else {
        alert("Thank you, " + name + "! Your message is ready.");
        return false;
    }
}
