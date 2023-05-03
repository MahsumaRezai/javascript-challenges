function captizle(str) {
    let words = [];
    for (let word of str.split(' ')) {
        return words.push(word[0].toUpperCase() + word.slice(1));

    }
    let res = words.join('');
    console.log(res)

}
captizle()
