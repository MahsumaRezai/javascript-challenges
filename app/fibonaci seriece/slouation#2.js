function fio(n) {
    if (n < 2) {
        return n;
    }
    return fio(n - 1) + fio(n - 2)
}
fio();