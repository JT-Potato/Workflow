const fs = require('fs');
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
//Dock icon CSS behaviours:
var iconStyle = document.createElement("link")
iconStyle.setAttribute("href", "./os/desktop/dock_icons/iconLabels.css")
iconStyle.setAttribute("rel", "stylesheet")
document.head.appendChild(iconStyle)

var dockIcons
try {
    const jsonString = fs.readFileSync('os/dock.json')
    dockIcons = JSON.parse(jsonString)
  } 
catch(err) {
    errorHandler.errorHandle(err)
}

dockIcons.forEach(function(item, index) {
    //icon
    var icon = document.createElement("div")

    //Icon image
    var iconImage = document.createElement("img")
    iconImage.setAttribute("style", `height: 80%; margin-left: 5px; margin-right: 5px; margin-bottom: 12%; margin-top: 8%;`)
    iconImage.src = item["icon"]
    iconImage.setAttribute("class", "iconImage")

    //Icon hover text
    var hlText = document.createElement("p")
    hlText.innerText = item['name']
    hlText.setAttribute("class", "iconTxt")

    //Append all things to the icon
    icon.appendChild(iconImage)
    icon.appendChild(hlText)
    dock.appendChild(icon) //Attach icon to dock
})