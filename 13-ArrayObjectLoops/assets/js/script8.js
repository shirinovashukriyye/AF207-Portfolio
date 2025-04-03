
const arr = [203, 19, 2, 13, 196, 86, 35, 77]

let max = arr[0];
let min = arr[0];

let sum = 0;
let sumMinAndMax = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i]
    } else if (arr[i] < min) {
        min = arr[i];
    }

    sum += arr[i];
}

sumMinAndMax = max + min;
console.log(sum - sumMinAndMax)