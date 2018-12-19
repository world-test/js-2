let whichNum = parseInt(prompt('Enter which number u want:'));

function recursion(n) {
    if (n <= 2) {
        return 1;
    }
    return recursion(n - 1) + recursion(n - 2);
}

function matrix(n) {
    let arr = [1, 1];
    for (i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n - 1];
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
document.write(`Method variables : ${variables(whichNum)} <br>
Matrix method: ${matrix(whichNum)} <br>
Recursion method: ${recursion(whichNum)}`);