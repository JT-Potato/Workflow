const fs = require('fs')
var desktop = document.createElement("div")
document.getElementById("body").appendChild(desktop)
var config = {
                "wallpaper": "os/desktop/Brighton/rock4.jpg",
                "dockHeight": "50",
                "blur": "5"
            } //replace with config from cookiieee
desktop.setAttribute(
                        "style",
                        `background-image: url(${config["wallpaper"]});
                        width: 100vw;
                        height: 100vh;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: 100%;`
                    )

//Dock
var dockParent = document.createElement("div")
dockParent.setAttribute("style", "height: 100vh; width: 100vw; display: flex; justify-content: center;")
desktop.appendChild(dockParent)
var dock  = document.createElement("div")
dockParent.appendChild(dock)
dock.setAttribute(
                    "style",
                    `background-color: rgba(40, 40, 40, 0.4);
                    backdrop-filter: blur(${config["blur"]}px);
                    height: ${config["dockHeight"]}px;
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    padding-left: 10px;
                    padding-right: 10px;`
                )
//dock icons
var dockIcons
try {
    const jsonString = fs.readFileSync('os/dock.json')
    dockIcons = JSON.parse(jsonString)
  } 
catch(err) {
    console.log(err)
}
dockIcons.forEach(function(item, index) {
    var icon = document.createElement("img")
    icon.setAttribute("style", `height: ${config["dockHeight"]}px; margin-left: 5px; margin-right: 5px;`)
    icon.src = item["icon"]
    dock.appendChild(icon)
})