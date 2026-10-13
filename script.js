const buttons = document.querySelectorAll(".details_button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const dropdown = button.nextElementSibling;

        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }

    });

});
