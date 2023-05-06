function vol(str) {
    let con = 0;
    let list = ['a', 'o', 'e', 'i', 'u']
    for (let char of str.toLowerCase()) {
        if (list.includes(char)) {
            con++;
        }
    }
    return con;

}
vol()