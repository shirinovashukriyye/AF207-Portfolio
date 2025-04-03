const arr = [203, 19, 2, 13, 196, 86, 35, 77]

let oneDigitCount = 0;
let twoDigitCount = 0;
let threeDigitCount = 0;

for (let i = 0; i < arr.length; i++) {
    let number = Math.abs(arr[i]); 

    if (number < 10) {
        oneDigitCount++; 
    } else if (number < 100) {
        twoDigitCount++; 
    } else if (number < 1000) {
        threeDigitCount++; 
    }
}

console.log(`Bir rəqəmli ədədlər: ${oneDigitCount}`);
console.log(`İki rəqəmli ədədlər: ${twoDigitCount}`);
console.log(`Üç rəqəmli ədədlər: ${threeDigitCount}`);
