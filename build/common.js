function lpad(str, length) {
    while (str.length < length)
        str = "0" + str;
    return str;
}
exports.lpad = lpad;
;
