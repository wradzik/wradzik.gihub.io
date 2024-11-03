window.onload = function() {

    setTimeout(function() {
        window.location.href = "mainpage.html";
    }, 3000);
    document.addEventListener("keydown", (event) => {
        if (event.keyCode === 66) {
            document.getElementById("bod").className = "blu";
            document.cookie="color=blue";
        }
    });
        document.addEventListener("keydown", (event) => {
        if (event.keyCode === 80) {
            document.getElementById("bod").className = "pik";
            document.cookie="color=pink";
        }
    });
};

