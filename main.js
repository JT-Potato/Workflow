const { app, BrowserWindow, ipcMain, dialog } = require('electron');
var fs = require('fs');
var path = require('path');
const notifier = require('node-notifier');
var backend = require('./internal/backend_functions')

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
            var filepath = result.filePaths
            if (backend.filepathCheck(filepath)) {
                filepath = filepath[0]
                var arr = filepath.split('/');
                var name = arr[arr.length-1] || arr[arr.length-2];
                console.log(filepath)
                console.log(name)
                let project = {"name": name}
                project = JSON.stringify(project);
                fs.writeFileSync(path.join(filepath, 'project.json'), project)
                notifier.notify({
                    title: 'Workflow',
                    message: 'Project Created Successfully'
                });
            }
        }
    )
});

ipcMain.on('openproj', (event, arg) => {
    dialog.showOpenDialog({properties: ['openDirectory']}).then(
        result => {
            var filepath = result.filePaths
            if (backend.filepathCheck(filepath)) {
                
            }
        }
    )
})

ipcMain.on('settings', (event, arg) => {
    //idk
})