const result = document.querySelector(".calculator__display");
const calculatorNumbers = document.querySelectorAll(".calculator__key");
const calculatorOperators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");



function clear() {
  result.value = "";
}

calculatorNumbers.forEach((button) => {
  button.addEventListener("click", () => {
        result.value += button.textContent;
        const resultArr = result.value.split(/[\+\-\*\/]/);
        console.log(resultArr);
  });
});

clearBtn.addEventListener("click", clear);



calculatorOperators.forEach((button) => {
    button.addEventListener('click', () => {
        
    })
});

equalBtn.addEventListener("click", () => {
    
});