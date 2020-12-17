function filepathCheck(filepath) {
    if (typeof filepath !== 'undefined' && filepath.length > 0) {
        return true
    }
    else {
        return false
    }
}
module.exports = {filepathCheck: filepathCheck()}