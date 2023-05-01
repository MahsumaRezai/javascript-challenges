function str(s) {
    return s.split('').reduce((a, b) => {
        return b + a;
    })
}
str();