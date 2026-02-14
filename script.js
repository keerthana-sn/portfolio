function openBox(id) {
    document.getElementById("contentBox").style.display = "block";

    // Hide all sections
    let contents = document.querySelectorAll(".content");
    contents.forEach(c => c.style.display = "none");

    // Show selected section
    document.getElementById(id).style.display = "block";
}

function closeBox() {
    document.getElementById("contentBox").style.display = "none";
}
