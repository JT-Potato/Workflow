const { app, BrowserWindow, ipcMain, dialog } = require('electron');
var registerHandlers = require('./internal/channelListeners')
var devCfg =  require("./boot/devSecretConfig")
function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  if(devCfg.production == true) {
    win.removeMenu()
    console.log("Workflow: Is Production App")
  }
  win.loadFile('index.html')
}

app.whenReady().then(function() {
  registerHandlers(ipcMain)
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})