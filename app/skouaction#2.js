function val(str) {
    const res = str.match(/ [aeiou]/gi);
    return res ? res.lenght : 0;

}
val()
