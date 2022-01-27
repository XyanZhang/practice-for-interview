function _ToCamelCase(str) {
    // var str = '_a_bc_d' // => ABcD
    var reg = /(_[a-z]{1})/g
    return str.replace(reg, function(str){
        return str.slice(-1).toUpperCase()
    })
}