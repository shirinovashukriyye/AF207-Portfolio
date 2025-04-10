let inputOne = document.querySelector(".number-one")
let inputTwo = document.querySelector(".number-two");



// Plus

let plsBtn = document.querySelector(".pls_btn");
let result = document.querySelector(".result")

let pls = () => {
    if (inputOne.value == "" && inputTwo.value == "") {
        alert("Enter the number!")
    } else if (inputOne.value == "") {
        alert("Enter first number")
    } else if (inputTwo.value == "") {
        alert("Enter second number")
    } else {
        result.textContent = +inputOne.value + +inputTwo.value
        inputOne.value = "";
        inputTwo.value = ""
    }

}

plsBtn.addEventListener("click", pls)




// Minus


let minBtn = document.querySelector(".min_btn");
let results = document.querySelector(".result")

let min= () => {
    if (inputOne.value == "" && inputTwo.value == "") {
        alert("Enter the number!")
    } else if (inputOne.value == "") {
        alert("Enter first number")
    } else if (inputTwo.value == "") {
        alert("Enter second number")
    } else {
        result.textContent = +inputOne.value - +inputTwo.value
        inputOne.value = "";
        inputTwo.value = ""
    }

}

minBtn.addEventListener("click", min)




// Mult


let multBtn = document.querySelector(".mult_btn");
let resultss= document.querySelector(".result")

let mult= () => {
    if (inputOne.value == "" && inputTwo.value == "") {
        alert("Enter the number!")
    } else if (inputOne.value == "") {
        alert("Enter first number")
    } else if (inputTwo.value == "") {
        alert("Enter second number")
    } else {
        result.textContent = +inputOne.value * +inputTwo.value
        inputOne.value = "";
        inputTwo.value = ""
    }

}

multBtn.addEventListener("click", mult)





// Devide


let devBtn = document.querySelector(".dev_btn");
let resultsss= document.querySelector(".result")

let dev= () => {
    if (inputOne.value == "" && inputTwo.value == "") {
        alert("Enter the number!")
    } else if (inputOne.value == "") {
        alert("Enter first number")
    } else if (inputTwo.value == "") {
        alert("Enter second number") 
    }else if(inputTwo.value == 0) {
        alert("Cannot be divided by zero!")
    }
    else {
        result.textContent = +inputOne.value / +inputTwo.value
        inputOne.value = "";
        inputTwo.value = ""
    }

}

devBtn.addEventListener("click", dev)