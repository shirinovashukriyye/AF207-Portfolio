const arr=[203, 19, 2, 13, 196, 86, 35, 77]

let minIndex=0;
let maxIndex=0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
}

let temp = arr[minIndex];

arr[minIndex] = arr[maxIndex];
arr[maxIndex] = temp;

console.log(arr);