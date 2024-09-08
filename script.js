const myHeight = document.getElementById("myHeight")
const myWeight =  document.getElementById("myWeight")
const displayResult = document.getElementById("displayResult")
const calculate = document.getElementById("calculate")

calculate.addEventListener('click', event => {
    event.preventDefault()

    const getWeight = Number(myWeight.value) 

    const getheight = Number(myHeight.value)

    const BMI = getWeight / (getheight * getheight)

    displayResult.textContent = BMI
})