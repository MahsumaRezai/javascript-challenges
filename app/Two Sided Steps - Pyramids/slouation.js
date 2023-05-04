function pyremid(n) {
    const mid = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let start = '';
        for (let col = 0; col < n; col++) {
            if (mid - row <= col && mid + row >= col) {
                start += '#'
            }
            else {
                start += ''
            }
        }
        console.log(start)
    }
}
pyremid();