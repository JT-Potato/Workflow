const fs = require('fs')
const errorHandler = require('./internal/errorHandle') //from the perspective of index.html

var desktop = document.createElement("div")
document.getElementById("body").appendChild(desktop)
var config = {
                "wallpaper": "os/desktop/Brighton/rock4.jpg",
                "dockHeight": "60",
                "blur": "10"
            } //replace with config from cookiieee

//Styles
var styleTransparent = `background-color: rgba(200, 200, 200, 0.5); backdrop-filter: blur(${config["blur"]}px);

height: ${config["dockHeight"]}px; position: absolute; bottom: 0; display: flex; justify-content: center; align-items: center; padding-left: 10px; padding-right: 10px;

border-radius: 15px;`

//Desktop
desktop.setAttribute(
                        "style",
                        `background-image: url(${config["wallpaper"]});
                        width: 100vw;
                        height: 100vh;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;`
                    )

//Dock
var dockParent = document.createElement("div")
dockParent.setAttribute("style", "height: 100vh; display: flex; justify-content: center;")
desktop.appendChild(dockParent)
var dock  = document.createElement("div")
dockParent.appendChild(dock)
dock.setAttribute("style", styleTransparent + "margin-bottom: 5px;")

//dock icons
var dockIcons
try {
    const jsonString = fs.readFileSync('os/dock.json')
    dockIcons = JSON.parse(jsonString)
  } 
catch(err) {
    errorHandler.errorHandle(err)
}

dockIcons.forEach(function(item, index) {
    var icon = document.createElement("div")
    var iconImage = document.createElement("img")
    iconImage.setAttribute("style", `height: 80%; margin-left: 5px; margin-right: 5px; margin-bottom: 12%; margin-top: 8%;`)
    iconImage.src = item["icon"]
    icon.appendChild(iconImage)
    dock.appendChild(icon)
})