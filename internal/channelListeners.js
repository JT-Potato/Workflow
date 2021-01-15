var backend = require('./backend_functions')
var fs = require('fs');
var path = require('path');
const notifier = require('node-notifier');
const { dialog } = require('electron');

var registerHandlers = function(ipcMain) {
    ipcMain.on('openproj', (event, arg) => {
        dialog.showOpenDialog({properties: ['openDirectory']}).then(
            result => {
                var filepath = result.filePaths
                if (backend.filepathCheck(filepath)) {
                    console.log(filepath)
                }
            }
        )
    })
    .catch(error => console.log("im dying"))
    .finally(() => console.log("is it done yet"))
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
    })
    .catch(error => console.log("im dying"))
    .finally(() => console.log("is it done yet"))
}
module.exports = registerHandlers