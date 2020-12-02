var e = document.getElementById("splashid");
e.classList.add("splash");
e.classList.add("hide");
function pageLoad() {
    console.log("a");
    var e = document.getElementById("splashid");
    e.classList.remove("hide");
    setTimeout(() => { e.classList.add("hide") }, 1000);
}