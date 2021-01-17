var wallpaperLoc = "url(https://s27688.pcdn.co/wp-content/uploads/2013/08/canstockphoto1830254.jpg)";
document.getElementById("background").style.backgroundImage = wallpaperLoc;
const {ipcRenderer} = require('electron');
function newProj() {
    ipcRenderer.send('makeproj', {message: "Do it"})
}
function openProj() {
    ipcRenderer.send('openproj', {message: "lmao"})
}
function editSettings() {
    ipcRenderer.send('settings', {message: "idc, just do it"})
}