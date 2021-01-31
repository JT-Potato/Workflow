var desktop = document.createElement("div")
document.getElementById("body").appendChild(desktop)
var config = {
                "wallpaper": "os/desktop/Brighton/rock4.jpg",
                "dockHeight": "5"
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
var dock  = document.createElement("div")
desktop.appendChild(dock)
dock.setAttribute(
                    "style",
                    `background-color: rgba(170, 170, 170, 0.4);
                    height: ${config["dockHeight"]}%;
                    width: 100vw;
                    position: fixed;`
                )