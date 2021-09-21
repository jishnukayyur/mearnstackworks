function secondLargestAmoungThree(a, b, c) {
    if ((a > b && a < c) || (a > c && a < b)) {
        return a
    }
    else if ((b > a && b < c) || b > c && b < a) {
        return b
    }
    else {
        return c
    }
}
console.log(secondLargestAmoungThree(4, 7, 5));