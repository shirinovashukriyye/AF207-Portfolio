const arr = [1634];

let item = arr[0];

let arr1 = [];

while (item > 0) {
    arr1.push(item % 10);
    item = Math.floor(item / 10);
}

console.log(arr1)

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr1[i] * arr1[i] * arr1[i];
};

if (sum !== arr[0]) {
    console.log("deyil")
} else {
    console.log("eledi")
};
