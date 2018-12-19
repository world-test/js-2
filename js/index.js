let whichNum = parseInt(prompt('Enter number:'));

function recursion(n) {
    if (n <= 2) {
        return 1;
    }
    return recursion(n - 1) + recursion(n - 2);
}

function mas(n) {
    let mas = [1, 1];
    for (i = 2; i <= n; i++) {
        mas.push(mas[i - 1] + mas[i - 2]);
    }
    return matrix[n - 1];
}

function variables(n) {
    let firstNum = 1;
    let secondNum = 1;
    let next;
    for (i = 3; i <= n; i++) {
        next = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = next;
    }
    return next;
}
document.write(`Recursion method: ${recursion(whichNum)} <br>
Mas method: ${mas(whichNum)} <br>
Method variables : ${variables(whichNum)}`);