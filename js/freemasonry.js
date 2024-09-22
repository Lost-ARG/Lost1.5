document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var passwordInput = document.querySelector("input[name='password']").value;

        if (passwordInput === "library") {
            
            window.location.href = "./freemasonry_PWD.html"; 
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
