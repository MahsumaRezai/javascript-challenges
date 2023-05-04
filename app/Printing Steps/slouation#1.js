function step(n) {
    for (let row = 0; row < n; row++) {
        let start = "";
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                start += "#";
            }
            else {
                start += " "
            }
        }
        console.log(start)
    }
}
step();