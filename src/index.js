module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0)
        return false;

    var arr = [],
        s = 0;

    for (var i = 0; i < bracketsConfig.length; i++) {
        arr[i] = bracketsConfig[i].join('');
    }

    while ((str.length > 1) && (s < str.length)) {
        var bracketsTemp = str.substring(s, s + 2);

        if (arr.includes(bracketsTemp)) {
            str = str.replace(bracketsTemp, '');
            s = 0;

        } else {
            s++;
        }
    }

    if (str.length === 0){
        return true;

    } else {
        return false;
    }
}
