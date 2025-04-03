
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
let count = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;

    average = sum / count;
}

console.log(average);