function minval(...arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.reduce((a, b) => {
            if (b > a) {
                return b;
            }
            else if (b < a) {
                return a;
            }
        })
    }
}