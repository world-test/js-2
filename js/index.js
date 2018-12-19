let whichNum = parseInt(prompt('Enter number:'));

function recursion(n) {
    if (n <= 2) {
        return 1;
    }
    return recursion(n - 1) + recursion(n - 2);
}

function array(n) {
    let array = [1, 1];
    for (i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[n - 1];
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
Array method: ${array(whichNum)} <br>
Method variables : ${variables(whichNum)}`);