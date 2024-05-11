var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
    x.style.display = 'block';
    y.style.display = 'none';
    document.querySelector('.form-box').style.display = 'block'; // Show the form box
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
    x.style.display = 'none';
    y.style.display = 'block';
    document.querySelector('.form-box').style.display = 'block'; // Show the form box
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
    if (!x.style.display && !y.style.display) {
        document.querySelector('.home').style.display = 'block'; // Show the home content
    }
}



function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className == "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var formBox = document.querySelector(".form-box");

    a.addEventListener("click", login); // Adjusted event listener for signin button
    b.addEventListener("click", register); // Adjusted event listener for signup button

    document.querySelectorAll('.cut-btn i').forEach(btn => {
        btn.addEventListener('click', function () {
            closeForm(btn.parentElement.parentElement.parentElement.id); // Pass the parent form's ID
        });
    });
});


// Add event listener for dropbox link
document.getElementById("dropboxLink").addEventListener('click', function (e) {
    e.preventDefault();
    alert("Please sign in or sign up first.");
});

document.getElementById("home").addEventListener('click', function (e) {
    e.preventDefault();
    alert("Please sign in or sign up first.");
});

document.getElementById("collection").addEventListener('click', function (e) {
    e.preventDefault();
    alert("Please sign in or sign up first.");
});

document.getElementById("about").addEventListener('click', function (e) {
    e.preventDefault();
    alert("Please sign in or sign up first.");
});

// Add this code to your existing JavaScript

// Check if the current page is the page where scrolling should be disabled
if (window.location.pathname === 'index.html') {
    document.body.style.overflow = 'hidden'; // Disable scrolling
} else {
    document.body.style.overflow = ''; // Enable scrolling for other pages
}


