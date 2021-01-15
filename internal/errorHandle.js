const notifier = require('node-notifier');
var errorHandle = function(error) {
    notifier.notify({title: 'Workflow', message: 'Something went very wrong. Error: ' + error})
}

module.exports = errorHandle