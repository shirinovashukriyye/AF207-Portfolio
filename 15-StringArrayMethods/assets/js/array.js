// 1.


// function func(arr) {
//     const num = {};
//     const unikal = [];
  
//     arr.forEach((eded) => {
//       if (num
// [eded]) {
//         num
// [eded]++;
//       } else {
//         num
// [eded] = 1;
//       }
//     });
  
//     for (const eded in num

//     ) {
//       if (num
// [eded] === 1) {
//         unikal.push(Number(eded));
//       }
//     }
  
//     console.log(unikal);
//     console.log();
//     for (const eded in num

//     ) {
//       if (num[eded] > 1) {
//         console.log(`${eded}: ${num
//     [eded]}`);
//       }
//     }
//   }
  
 
//   const array = [1, 2, 3, 2, 4, 5, 1, 6, 2, 3, 7,7,7]
//   func(array)  





// 2.


// function array(word) {
//     const ters = word.split('').reverse().join('');
//     if (word === ters) {
//       console.log(`${word}polidromdur`);
//     } else {
//       console.log(`${word}deyil`)
//     }
//   }
  

// array("salam")
// array("radar")
// array("ana")
  









// 3.


// function array(arr, n) {
//     let say = 0;
  
//     arr.forEach((num) => {
//       if (num < n) {
//         say++;
//       }
//     });
  
//     console.log(`${n} ${say}`)
//   }
  
 
//   const array = [5, 3, 8, 1, 6, 2, 10]
//   const daxilEdilenEded = 6
//   array(array, daxilEdilenEded)
  





// 4.


// const customers = [
//     {
//       name: "Tyrone",
//       personal: {
//         age: 33,
//         hobbies: ["Bicycling", "Camping"],
//       },
//     },
//     {
//       name: "Elizabeth",
//       personal: {
//         age: 25,
//         hobbies: ["Guitar", "Reading", "Gardening"],
//       },
//     },
//     {
//       name: "Penny",
//       personal: {
//         age: 36,
//         hobbies: ["Comics", "Chess", "Legos"],
//       },
//     },
//   ];



//   const all = customers.reduce((arr, customer) => {
//     return arr.concat(customer.personal.hobbies);
//   }, []);
  
//   console.log(all);







// 5.


// const arr=[25,39,5,98,47,10,23,6,19]



// const random = Array.from({ length: 10 }, () =>
//     Math.floor(Math.random() * 101)
//   )
//   console.log(random)
  

//   const max = Math.max(...random)
//   const min = Math.min(...random)
//   console.log(max)
//   console.log(min)
  
 
//   const result = random.reduce((sum, num) => sum + num, 0)
//   console.log(result)
  

//   const orta = result / random.length
//   console.log(orta.toFixed(2))
  

//   const func = random.map(num => Math.pow(num, 2))
//   console.log(func)
  