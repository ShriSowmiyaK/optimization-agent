(function () {
    var button = document.querySelector(".buy-btn");

    if (button) {
        var btn = document.querySelector(".buy-btn");

        if (btn) {
            btn.addEventListener("click", function () {
                console.log("Button clicked");
            });

            btn.addEventListener("click", function () {
                console.log("Button clicked");
            });
        }
    }

    if (false) {
        console.log("This is dead code");
    }

    var title = document.querySelector(".title");

    if (title) {
        title.style.color = "red";
        title.offsetHeight; // Forces layout
        title.style.fontWeight = "bold";
    }

    var x = 10;
    var y = x;
})();