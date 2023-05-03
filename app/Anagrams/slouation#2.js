function anagram(strA, strB) {
    return str(strA) === (strB);

}
anagram();
function str(st) {
    return st.replace(/ [^\w] /g, '').split('').sort().join('')


}
