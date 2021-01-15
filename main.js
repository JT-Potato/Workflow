const { app, BrowserWindow, ipcMain, dialog } = require('electron');
var registerHandlers = require('./internal/channelListeners')

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('html/index.html')
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