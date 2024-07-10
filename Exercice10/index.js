//votre code ici
function printNumbers(n) {
    let numbers = "1";
    for (let i = 2; i <= n; i++) {
        numbers += ` ${i}`;
    }
    return numbers;
}
export default printNumbers;