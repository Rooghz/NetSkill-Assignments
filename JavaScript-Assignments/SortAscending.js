var numbers = [34, 7, 23, 32, 5, 62];

numbers.sort(Compare);
console.log(numbers);

function Compare(a,b){
    return a-b;
}


/*

Output - 

[ 5, 7, 23, 32, 34, 62 ]

*/
