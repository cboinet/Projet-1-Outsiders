const boutonJS = document.getElementById("icon")
boutonJS.addEventListener("click", hamburger)


function hamburger() {
    const menu = document.getElementById("links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
} 
