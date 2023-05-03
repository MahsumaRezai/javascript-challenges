function name(arr, size) {
    let arr1 = [];
    let index = 0;
    while (index < arr.length) {
        arr1.push(arr.slice(index + index + size));
        index += size
    }
    return arr1;
}
name();