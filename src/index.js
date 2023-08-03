module.exports = function reverse(n) {
    let str = n.toString().split('');
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (!Number.isNaN(+str[i])) {
            newStr += str[i];
        }
    }

    return newStr.split('').reverse().join('');
}