const myHeight = document.getElementById("myHeight")
const myWeight =  document.getElementById("myWeight")
const displayResult = document.getElementById("displayResult")
const calculate = document.getElementById("calculate")

calculate.addEventListener('click', event => {
    event.preventDefault()


    if (myWeight.value ==="" && myHeight.value === '') {
        showError( myHeight, "Weight and Height cannot be empty")
    }
    else if (isNaN(myWeight.value) || isNaN(myHeight.value)) {
        showError(myHeight, "Please enter valid numbers for Weight and Height")
    } 
    else if (Number(myHeight.value) === 0) {
        showError(myHeight, "Height cannot be zero")
    } 
    else if (Number(myWeight.value) === 0) {
        showError(myHeight, "Weight cannot be zero")
    } 
    else{


        const getWeight = Number(myWeight.value) 

        const getheight = Number(myHeight.value)

        const BMI = getWeight / (getheight * getheight)

        displayResult.textContent = BMI.toFixed(2)
    }

    // const getWeight = Number(myWeight.value) 

    // const getheight = Number(myHeight.value)

    // const BMI = getWeight / (getheight * getheight)

    // displayResult.textContent = BMI
})



showError = (element, message) =>{
    const inputControl = element.parentElement
    const displayError = inputControl.querySelector(".error")

    displayError.innerText = message
    displayError.classList.add("error")
    displayError.classList.remove('success')
}

clearError = (element) =>{
    const inputControl = element.parentElement
    const displayError = inputControl.querySelector(".error")

    displayError.innerText = ''
    displayError.classList.add("success")
    displayError.classList.remove('error')
}

clearCalculator = () =>{

}