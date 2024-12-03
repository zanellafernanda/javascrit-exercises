function count(n) {

    if(n >= 3){ return count(n - 2) + count(n -1)}
    else if (n === 2) { return 2 }
    else if (n ===1) { return 1 }
    else { return 0}
}

console.log(count(11));