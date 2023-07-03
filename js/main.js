let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // экран операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const action = ['-', '+', '*', '/'];

const result = document.querySelector('.calculator__display');
const buttons = document.querySelectorAll('.calculator__key');

function clear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    result.value = 0;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.classList.contains('clear')) {
            clear();
        }


        const key = e.target.textContent;


        if(digit.includes(key)) {
            if(b === '' & sign === ''){
                a += key;
                result.value = a;
            }else if(a !== '' && b !== '' & finish)  {
                b = key;
                finish = false;
                result.value = b;
            }else {
                b += key;
                result.value = b;
            }
            return
        }

        if(action.includes(key)) {
            sign = key;
            result.value = sign;
            return
        }


        if(key === '=') {
            switch(sign) {
                case "+":
                a = Number(a) + Number(b);
                break;
                case '-':
                a = a -b;
                break;
                case '*':
                a = a * b;
                break;
                case '/':
                a = a / b;
                break;
            }
            finish = true;
            result.value = a;
        }
    })
})