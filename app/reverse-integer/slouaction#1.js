function rever_int(s) {
    let res = s.split('').reverse().join('');
    return (parseInt(res)) * Math.sign(s)



}
rever_int();