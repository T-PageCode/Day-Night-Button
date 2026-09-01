document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
let button1 = document.getElementById("button1");
let body = document.body;
button1.onclick = () => {
    button1.classList.toggle("night");
    body.classList.toggle("night");
}
["dragenter", "dragover", "dragleave", "drop"].forEach(type => {
    document.addEventListener(type, e => {
        e.preventDefault();
        e.stopPropagation();
    });
});