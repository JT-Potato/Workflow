var backend = require('./backend_functions')
var errorHandler = require('./errorHandle')
var fs = require('fs');
var path = require('path');
const notifier = require('node-notifier');
const { dialog } = require('electron');

var registerHandlers = function(ipcMain) {
    //Open a project
    ipcMain.on('openproj', (event, arg) => {
        dialog.showOpenDialog({properties: ['openDirectory']}).then(
            result => {
                var filepath = result.filePaths
                if (backend.filePathCheck(filepath)) {
                    console.log(filepath)
                }
            }
        )
        .catch(error => errorHandler(error))
    })

    //Make a project
    ipcMain.on('makeproj', (event, arg) => {
        dialog.showOpenDialog({properties: ['openDirectory']}).then(
            result => {
                var filepath = result.filePaths
                if (backend.filePathCheck(filepath)) {
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
        .catch(error => errorHandler(error))
    })
}
module.exports = registerHandlers