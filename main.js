const { app, BrowserWindow, ipcMain, dialog } = require('electron');
require('v8-compile-cache');

//Settings for the Nodejs window.
function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  //Loads index.html - the foundation of our app
  win.loadFile('./index.html')
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