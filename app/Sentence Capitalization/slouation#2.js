function cap(str) {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            res += str[i].toUpperCase();
        }
        else {
            res += str[i]
        }

    }
    return res;
}
cap()