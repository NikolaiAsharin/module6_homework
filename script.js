// Валидация числа
let flag = true;

function validation(numV) {
    let number = +numV;
    if (number !== 0) {
        if (typeof number === "number") {
            if (isNaN(number)) {
                flag = false;
                return flag;
            } else {
                flag = true;
                return flag;
            }
        } else {
            flag = false;
            return flag;
        }
    } else {
        flag = false;
        return flag;
    }
}

// Задание 1
// Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Оформите решение в виде функции
let answer1 = document.querySelector('.answer1');
let input1 = document.querySelector('.input1');
let btn1 = document.querySelector('.btn1');
let btn11 = document.querySelector('.btn1-1');
let arrayFromInput = [];

// Собираем массив
btn1.onclick = () => {
    arrayFromInput.push(input1.value);
    input1.value = '';
}

//Выводим решение
function checkingData() {
    let num = 0;
    let chet = 0;
    let nechet = 0;
    let nich = 0;
    let minus = 0;
    for (let i = 0; i < arrayFromInput.length; i++) {
        if (arrayFromInput[i].length !== 0) {
            if(!isNaN(Number(arrayFromInput[i]))) {
                if (Number(arrayFromInput[i]) > 0) {
                    num = Number(arrayFromInput[i]) % 2;
                    if (num == 1) {
                        nechet++;
                    } else {
                        chet++;
                    }
                } else if (Number(arrayFromInput[i]) === 0) {
                    nich++;
                } else {
                    minus++;
                }
            } 
        } else {
            nich++;
        }
    }
    answer1.innerHTML = `В массиве: четных значений - ${chet}, нечетных - ${nechet}, нулевых -  ${nich}, отрицательных - ${minus}`;
}
btn11.onclick = checkingData;

// Задание 2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.
let answer2 = document.querySelector('.answer2');
let input2 = document.querySelector('.input2');
let btn2 = document.querySelector('.btn2');

function checkingNumber(num) {
    validation(num); // проверка на число смотри в вверху

    if (flag === true) {
        //Проверяем число: простое или нет
        if (num > 1 && num < 1001) {
            let ok = true;
            for(i = 2; i <= num - 1; i++)
                if (num % i == 0) {
                    ok = false;
                    break;
                }
            // Выводим сообщение
            if (ok == true)
            answer2.innerHTML = (result + " - число является простым");
            else
            answer2.innerHTML = (result + " - число не является простым");

        } else {
            answer2.innerHTML = '!!!Данные не верны!!!';
        }
    } else {
        answer2.innerHTML = '!!!Ввели не число!!!';
    }
}

btn2.onclick = () => {
    let result2 = +input2.value;
    checkingNumber(result2);
    input2.value = '';
}


// Задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.

let answer3 = document.querySelector('.answer3');
let input3 = document.querySelector('.input3');
let btn3 = document.querySelector('.btn3');
function summ3(a, b) {
    return a + b;
}
function numNew(num1) {
    return  num1;
}
function addNumber(num) {
    validation(num); // проверка на число смотри в вверху
    const num2 = numNew(num);
    if (flag === true) {
        return summ3(num, num2);
    } else {
        return '!!!Ввели не число!!!';
    }
}
btn3.onclick = () => {
    let result3 = +input3.value;
    const resultFunc = addNumber(result3);
    input3.value = '';
    answer3.innerHTML = resultFunc;
}

// Задание 4
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.

let answer4 = document.querySelector('.answer4');
let input41 = document.querySelector('.input4-1');
let input42 = document.querySelector('.input4-2');
let btn4 = document.querySelector('.btn4');

function addNumber4(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        answer4.innerHTML = '!!!Не ввели число!!!';
    } else {
        if (num2 > num1) {
            answer4.innerHTML = '';
            const intervalNumber1 = setInterval(function () {
                                
                    answer4.innerHTML = answer4.innerHTML + `<li> ${num1++} </li>`;

                if (num1 === num2 + 1) {
                    clearInterval(intervalNumber1);
                } 
            }, 1000);
        } else {
            answer4.innerHTML = '';
            const intervalNumber2 = setInterval(function () {
                                
                    answer4.innerHTML = answer4.innerHTML + `<li> ${num1--} </li>`;

                if (num1 === num2 - 1) {
                    clearInterval(intervalNumber2);
                } 
            }, 1000);
        }
    }
}

btn4.onclick = () => {
    let result41 = +input41.value;
    let result42 = +input42.value;
    addNumber4(result41, result42);
    input41.value = '';
    input42.value = '';
}


// Задание 5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.

let answer5 = document.querySelector('.answer5');
let input51 = document.querySelector('.input5-1');
let input52 = document.querySelector('.input5-2');
let btn5 = document.querySelector('.btn5');

function addNumber5(num51, num52) {
    if (isNaN(num51) || isNaN(num52)) {
        answer5.innerHTML = '!!!Не ввели число!!!';
    } else {
        answer5.innerHTML = `Число ${num51} в степени ${num52} = ${Math.pow(num51, num52)}`;
    }
}

btn5.onclick = () => {
    let result51 = +input51.value;
    let result52 = +input52.value;
    addNumber5(result51, result52);
    input51.value = '';
    input52.value = '';
}





