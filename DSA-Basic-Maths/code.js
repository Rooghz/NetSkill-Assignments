//Count digits in a number:

function countDigit(n) {
    let num = n.toString();
    return num.length;
}

console.log(countDigit(11123));

//5

//Reverse a number

const revNum = (n) => {
    let num = n.toString().split('').reverse().join('');
    console.log(num);

}

revNum(123);

//321

//Check if a number is Palindrome or Not

const PalNum = (n) => {
    let num = n.toString().split('').reverse().join('');
    n === parseInt(num) ? console.log("yes") : console.log("no");

}

PalNum(253);

//no

//Find GCD of two numbers

const gcdNum = (x, y) => {
    while (y !== 0) {
        const rem = x % y;
        x = y;
        y = rem;
    }
    console.log("GCD:", x);
};

gcdNum(4, 8);

//4

//Print all Divisors of a given Number

const printDivisors = (num) => {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
};

printDivisors(24);

//1 2 3 4 6 8 12 24

//Armstrong number

const isArmstrongNumber = (num) => {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += digit ** numDigits;
    }

    return sum === num;
};


console.log(isArmstrongNumber(153));

//true

//Prime number

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(3));

// true


