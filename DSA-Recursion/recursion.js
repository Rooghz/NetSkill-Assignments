//Recursive function that takes a number and returns the sum of all the numbers from zero to that number.

const recSum = (n) => {

    if (n == 0)
        return 1;
    let num = recSum(n - 1);
    while (n > 0)
        return n + num;
}

console.log(recSum(3));

//7

//Factorial of a number

const facNum = (n) => {
    if (n == 0)
        return 1;
    let num = facNum(n - 1);
    return n * num;
}

console.log(facNum(5));

//120

//Reverse a string

const revStr = (str) => {
    if (str.length === 0)
        return "";
    return revStr(str.slice(1)) + str[0];
}

console.log(revStr("Netskill"));

//lliksteN

//Reverse an array

const revArr = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } else {
        return [arr[arr.length - 1]].concat(revArr(arr.slice(0, arr.length - 1)));
    }
}

console.log(revArr([1, 2, 3, 4]))

//[ 4, 3, 2, 1 ]

