let flag = 0;

let input = document.querySelector("#inputField");
let button = document.querySelectorAll(".btn");
let calc = document.querySelector(".calc");
let clearAll = document.querySelector(".allClear");
let deleteLast = document.querySelector(".del");


button.forEach((val) => {
    val.addEventListener("click", () => {
        if (flag == 1) {
            input.value = "";
            flag = 0;
        }
        let expression = (input.value += val.value);
        return expression
    })
})



calc.addEventListener("click", () => {
    flag = 1;
    // console.log(flag);
    let inputValue = input.value;
    try {
        let sol = eval(inputValue);
        if (Number.isInteger(sol)) {
            input.value = sol;
        } else {
            input.value = sol.toFixed(2);
        }
    }
    catch (err) {
        input.value = "Invalid Input"
    }
})


clearAll.addEventListener("click", () => {
    input.value = ""
})

deleteLast.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1)
})