const { app, BrowserWindow, BrowserView } = require('electron');
require('v8-compile-cache');

//Settings for the Nodejs window.
var win
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webviewTag: true
    },
    width: 815,
    height: 800
  })
  win.removeMenu()
  win.loadFile('./internal/sidebar.html')
}

function openWindow(url) {
    let view = new BrowserView()
    view.webContents.loadURL(url)
    view.setBounds({x: 80, y: 0, width: 720, height: 800})
    view.setAutoResize({width: true, height: true})

    win.addBrowserView(view)
}

app.whenReady().then(function() {
  createWindow()
})

//Quits the app when all windows are closed.
//Yes this violates Apple's HIG, but do I really care?
app.on('window-all-closed', () => {
    app.quit()
})

//Starts the app
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

module.exports = { openWindow }