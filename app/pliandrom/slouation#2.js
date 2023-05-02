function str(s) {
    return s.split('').every((a, i) => {
        return a === s[s.lenght - i - 1];
    })
}
str()