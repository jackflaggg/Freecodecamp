 function removeWhitespaces(string) {
    return string.split(' ').filter(s => s !== '').join('_')
}
    console.log(removeWhitespaces('you are JS developer'))
