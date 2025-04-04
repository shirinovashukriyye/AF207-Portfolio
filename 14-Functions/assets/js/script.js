// 1.


// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {

//     return a / b;
// }



// console.log(sum(10, 2));
// console.log(sub(10, 2));
// console.log(mult(10, 2));
// console.log(div(10, 2));






// 2.


// function oddandeven(...ededler) {
//     const odd = [];
//     const even = [];

//     ededler.forEach(eded => {
//         if (eded % 2 === 0) {
//             even.push(eded);
//         } else {
//             odd.push(eded);
//         }
//     });

//     console.log("Tək ədədlər:", odd);
//     console.log("Cüt ədədlər:", even);
// }

// oddandeven(14, 20, 35, 40, 57, 60, 100);





// 3.


// function customsum(arr) {
//     let sum = 0;

//     arr.forEach(eded => {
//         if (eded % 4 === 0 && eded % 5 === 0) {
//             sum += eded;
//         }
//     });

//     return sum;
// }

// const ededler = [14, 20, 35, 40, 57, 60, 100];
// const result = customsum(ededler);
// console.log(result);





// 4.


// function number(sen, sym) {
//     let num = 0;

//     for (let i = 0; i < sen.length; i++) {
//         if (sen[i] === sym) {
//             num++;
//         }
//     }

//     return num;
// }


// const sen = "Salam! Mənim adım Şükriyyədir.";
// const sym = "a";

// const result = number(sen, sym);
// console.log(`${sym} = ${result}`);




// 5.









// 6.


// function array(arr) {
//     return arr.map(element => element ** 2);
// }


// const number = [2, 3, 4, 5];
// const Array = array(number);

// console.log(number);
// console.log(Array);





// 7.


// function number(arr) {
//     if (arr.length === 0) return [];

//     let min = arr[0].age;
//     let max = arr[0].age;

//     for (let i = 1; i < arr.length; i++) {
//         let age = arr[i].age;

//         if (age < min) {
//             min = age;
//         }

//         if (age > max) {
//             max = age;
//         }
//     }

//     let result = max - min;

//     return [min, max, result];
// }

// const person = [
//     { name: "Şükriyyə", age: 13 },
//     { name: "Fərhad", age: 54 },
//     { name: "Abbas", age: 67 },
    
// ];

// const netice = number(person);
// console.log(netice); 
