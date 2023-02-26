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