const { app, BrowserWindow, ipcMain, dialog } = require('electron');
require('v8-compile-cache');

var registerHandlers = require('./internal/channelListeners') //Event handlers
var devCfg =  require("./boot/devSecretConfig") //Secret developer configs

//Settings for the Nodejs window.
function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  //Set whether or not this is a production app
  if(devCfg.production == true) {
    win.removeMenu()
    console.log("Workflow: Is Production App")
  }
  //Loads index.html - the foundation of our app
  win.loadFile('index.html')
}

app.whenReady().then(function() {
  registerHandlers(ipcMain)
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