function getArea(width, height, unit) {
    let area = width * height
    return `${area} ${unit}`
}

console.log(getArea(10, 20, "sq.ft"))

function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(max(100, 210))