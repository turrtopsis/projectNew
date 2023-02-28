//Условия

// let num = 50;

// if (num > 40) {
//     console.log('OK');
// } else 
//     console.log('Error');


// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В Точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//     break;
// };

//Циклы

// let num = 50;
//     while (num <= 50) {
//         console.log(num);
//         num++;
//     };

//     do {
//         console.log(num);
//         num++;
//     } while (num < 55);


//     for (let i = 1; i < 8; i++) {
//         console.log(i);
//     };

// break; - прерывание цикла
// continue; - пропуск шага цикла

//Вложенные циклы

// let result = '';
// const lenght = 7;

// for (let i = 0; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// };
// console.log(result);

//Метки

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level ${k}`);
//         }
//     }
// }

// Функции
// function declaration
// function showFirstMesage(text) {
//     console.log(text);
// }
// showFirstMesage("Hello world!");

// function calc(a , b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

//function expression

// const logger = function() {
//     console.log("Hello!");
// };

// logger();


// Стрелочная функция

// const calc = (a, b) => a + b;
// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// const usdCurr = 28;
// const eurCurr = 32;gi
// const discount = 0.9;

// function convert(amount, curr) {
//     return amount * curr;
// }

// function promotion(result) {
//         console.log(result * discount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);
// promotion(convert(500, usdCurr));


// Перебор
// for ( let key in options) {

// };

// object 
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(options).length);

// forEach

// const arr = [2, 4, 6, 8, 10];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // for of 

// for (let value of arr) {
//     console.log(value);
// }