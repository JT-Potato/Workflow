const { app, BrowserWindow, ipcMain, dialog } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('html/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('makeproj', (event, arg) => {
        dialog.showOpenDialog({properties: ['openDirectory']}).then(
            result => {
                var filepath = result.filepaths
                if (typeof filepath !== 'undefined' && filepath.length > 0) {
                    //idk
                }
            }
        )
});