function fibo(n) {
    let res = [0, 1];
    for (let i = 2; i <= n; i++) {
        let a = res[i - 1];
        let b = res[i - 2];
        res.push(a + b)


    }
    return res[n]
}
fibo();
