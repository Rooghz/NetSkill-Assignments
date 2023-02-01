var numbers = [34, 7, 23, 32, 5, 62];

numbers.sort(Compare);
console.log(numbers);

// This function compare values and if a-b is positive then b comes before a, example 34,7 34-7=27 which is positive so it swap the position and becomes 7,34.
// It does this untill everything sorted and for every pair a-b = positive.

function Compare(a,b){  
    return a-b;
}


/*

Output - 

[ 5, 7, 23, 32, 34, 62 ]

*/
