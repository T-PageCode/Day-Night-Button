document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
let button1 = document.getElementById("button1");
let sunMoon = document.getElementById("sunMoon");
let body = document.body;
sunMoon.onclick = () => {
    button1.classList.toggle("night");
    body.classList.toggle("night");
}
["dragenter", "dragover", "dragleave", "drop"].forEach(type => {
    document.addEventListener(type, e => {
        e.preventDefault();
        e.stopPropagation();
    });
});