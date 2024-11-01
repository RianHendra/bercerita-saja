function toggleText(id) {
    var textElement = document.getElementById(id);
    let spanBaca = document.getElementById('baca');
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        spanBaca.style.display = "none";
    } else {
        textElement.style.display = "none";
    }
}