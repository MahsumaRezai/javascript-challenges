function chares(str) {
    let max = 0;
    let maxchar = '';
    let obj = {};
    for (let word of str) {
        if (obj[word]) {
            obj[word]++;
        }
        else {
            obj[word] = 1;
        }
    }
    for (let word in obj) {
        if (obj[word] > max) {
            max = obj[word];
            maxchar = word
        }
        return maxchar;

    }
}
chares();