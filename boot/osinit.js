//Boot program
var devCfg =  require("./boot/devSecretConfig")
if(devCfg.production == true) {
    //Create black screen
    var bootscreen = document.createElement("div")
    document.getElementById("body").appendChild(bootscreen)
    //W3schools does not recommend this, 
    //however we do not see a need to not overwrite other properties specified.
    bootscreen.setAttribute("style", `width: 100vw;
    height: 100vh;
    background-color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;`)

    //Make and position logo:
    var logo = document.createElement("img")
    logo.src = "boot/assets/logo.png"
    logo.setAttribute("style", "width: 10%; margin-bottom: 2%;")
    bootscreen.appendChild(logo)

    //Chime
    var chime = new Audio("boot/assets/chime.mp3");
    chime.play()

    //End boot
    chime.onended = function() {
        bootscreen.remove()
        //Hand it to the desktop and window manager
        var desktopScript = document.createElement("script")
        desktopScript.src = "os/desktop.js"
        document.getElementById("body").appendChild(desktopScript)
    }
}
else {
    //Hand it to the desktop and window manager
    var desktopScript = document.createElement("script")
    desktopScript.src = "os/desktop.js"
    document.getElementById("body").appendChild(desktopScript)
}