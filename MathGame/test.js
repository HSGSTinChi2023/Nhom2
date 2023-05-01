const problemElement1 = document.querySelector(".problem1")
const problemElement2 = document.querySelector(".problem2")
const problemElement3 = document.querySelector(".problem3")
const problemElement4 = document.querySelector(".problem4")
const ourForm = document.querySelector(".our-form")
const ourField1 = document.querySelector(".our-field1")
const ourField2 = document.querySelector(".our-field2")
const ourField3 = document.querySelector(".our-field3")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")
const endMessage = document.querySelector(".end-message")
const resetButton = document.querySelector(".reset-button")
const vis = document.getElementsByClassName("overlay")[0];

let state = {
    score: 0,
    wrongAns: 0,
}

function preCal(){
    let correctAnswer
    const p = state.currentProb
    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo + p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo + p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo + p.numThree * p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo - p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo - p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo - p.numThree * p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo * p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo * p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo * p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo + p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo + p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo + p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo - p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo - p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo - p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo * p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo * p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo * p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo + p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo + p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo + p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo - p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo - p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo - p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo * p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo * p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo * p.numThree * p.numFour
    return correctAnswer
}
function genProb(){
    return{
        numOne: getRan(10),
        numTwo: getRan(10),
        numThree: getRan(10),
        numFour: getRan(10),
        opOne: ['+', '-', '*','+'] [getRan(3)],
        opTwo: ['+', '-', '*','+'] [getRan(3)],
        opThree: ['+', '-', '*','+'] [getRan(3)],
    }
}

function updProb(){
    state.currentProb = genProb()
    let ans = preCal()
    problemElement1.innerHTML = `${state.currentProb.numOne}`
    problemElement2.innerHTML = `${state.currentProb.numTwo}`
    problemElement3.innerHTML = `${state.currentProb.numThree}`
    problemElement4.innerHTML = `${state.currentProb.numFour} ${"="} ${ans}`
    ourField1.value = ""
    ourField2.value = ""
    ourField3.value = ""
    ourField1.focus()
    ourField2.focus()
    ourField3.focus()
}
updProb()

function getRan(max){
    return Math.ceil(Math.random() * (max))
}


ourForm.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    
    let yourAns
    let correctAnswer
    const p = state.currentProb
    if (ourField1.value == "+" && ourField2.value == "+" && ourField3.value == "+") yourAns = p.numOne + p.numTwo + p.numThree + p.numFour
    if (ourField1.value == "+" && ourField2.value == "+" && ourField3.value == "-") yourAns = p.numOne + p.numTwo + p.numThree - p.numFour
    if (ourField1.value == "+" && ourField2.value == "+" && ourField3.value == "*") yourAns = p.numOne + p.numTwo + p.numThree * p.numFour
    if (ourField1.value == "+" && ourField2.value == "-" && ourField3.value == "+") yourAns = p.numOne + p.numTwo - p.numThree + p.numFour
    if (ourField1.value == "+" && ourField2.value == "-" && ourField3.value == "-") yourAns = p.numOne + p.numTwo - p.numThree - p.numFour
    if (ourField1.value == "+" && ourField2.value == "-" && ourField3.value == "*") yourAns = p.numOne + p.numTwo - p.numThree * p.numFour
    if (ourField1.value == "+" && ourField2.value == "*" && ourField3.value == "+") yourAns = p.numOne + p.numTwo * p.numThree + p.numFour
    if (ourField1.value == "+" && ourField2.value == "*" && ourField3.value == "-") yourAns = p.numOne + p.numTwo * p.numThree - p.numFour
    if (ourField1.value == "+" && ourField2.value == "*" && ourField3.value == "*") yourAns = p.numOne + p.numTwo * p.numThree * p.numFour
    if (ourField1.value == "-" && ourField2.value == "+" && ourField3.value == "+") yourAns = p.numOne - p.numTwo + p.numThree + p.numFour
    if (ourField1.value == "-" && ourField2.value == "+" && ourField3.value == "-") yourAns = p.numOne - p.numTwo + p.numThree - p.numFour
    if (ourField1.value == "-" && ourField2.value == "+" && ourField3.value == "*") yourAns = p.numOne - p.numTwo + p.numThree * p.numFour
    if (ourField1.value == "-" && ourField2.value == "-" && ourField3.value == "+") yourAns = p.numOne - p.numTwo - p.numThree + p.numFour
    if (ourField1.value == "-" && ourField2.value == "-" && ourField3.value == "-") yourAns = p.numOne - p.numTwo - p.numThree - p.numFour
    if (ourField1.value == "-" && ourField2.value == "-" && ourField3.value == "*") yourAns = p.numOne - p.numTwo - p.numThree * p.numFour
    if (ourField1.value == "-" && ourField2.value == "*" && ourField3.value == "+") yourAns = p.numOne - p.numTwo * p.numThree + p.numFour
    if (ourField1.value == "-" && ourField2.value == "*" && ourField3.value == "-") yourAns = p.numOne - p.numTwo * p.numThree - p.numFour
    if (ourField1.value == "-" && ourField2.value == "*" && ourField3.value == "*") yourAns = p.numOne - p.numTwo * p.numThree * p.numFour
    if (ourField1.value == "*" && ourField2.value == "+" && ourField3.value == "+") yourAns = p.numOne * p.numTwo + p.numThree + p.numFour
    if (ourField1.value == "*" && ourField2.value == "+" && ourField3.value == "-") yourAns = p.numOne * p.numTwo + p.numThree - p.numFour
    if (ourField1.value == "*" && ourField2.value == "+" && ourField3.value == "*") yourAns = p.numOne * p.numTwo + p.numThree * p.numFour
    if (ourField1.value == "*" && ourField2.value == "-" && ourField3.value == "+") yourAns = p.numOne * p.numTwo - p.numThree + p.numFour
    if (ourField1.value == "*" && ourField2.value == "-" && ourField3.value == "-") yourAns = p.numOne * p.numTwo - p.numThree - p.numFour
    if (ourField1.value == "*" && ourField2.value == "-" && ourField3.value == "*") yourAns = p.numOne * p.numTwo - p.numThree * p.numFour
    if (ourField1.value == "*" && ourField2.value == "*" && ourField3.value == "+") yourAns = p.numOne * p.numTwo * p.numThree + p.numFour
    if (ourField1.value == "*" && ourField2.value == "*" && ourField3.value == "-") yourAns = p.numOne * p.numTwo * p.numThree - p.numFour
    if (ourField1.value == "*" && ourField2.value == "*" && ourField3.value == "*") yourAns = p.numOne * p.numTwo * p.numThree * p.numFour

    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo + p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo + p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo + p.numThree * p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo - p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo - p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo - p.numThree * p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne + p.numTwo * p.numThree + p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne + p.numTwo * p.numThree - p.numFour
    if (p.opOne == "+" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne + p.numTwo * p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo + p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo + p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo + p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo - p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo - p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo - p.numThree * p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne - p.numTwo * p.numThree + p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne - p.numTwo * p.numThree - p.numFour
    if (p.opOne == "-" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne - p.numTwo * p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo + p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo + p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "+" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo + p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo - p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo - p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "-" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo - p.numThree * p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "+") correctAnswer = p.numOne * p.numTwo * p.numThree + p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "-") correctAnswer = p.numOne * p.numTwo * p.numThree - p.numFour
    if (p.opOne == "*" && p.opTwo == "*" && p.opThree == "*") correctAnswer = p.numOne * p.numTwo * p.numThree * p.numFour

    if (yourAns === correctAnswer){
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updProb()
    }
    else{
        state.wrongAns++
        mistakesAllowed.textContent = 3 - state.wrongAns
    }

    checkLogic()
}

function checkLogic(){
    // if won
    if (state.score === 10){
        endMessage.textContent = "Ghê vậy sao :o"
        vis.getElementsByClassName("overlay-inner")[0].style.visibility = "visible";
        document.body.classList.add("open") 
    }
    // if loss
    if (state.wrongAns === 4){
        endMessage.textContent = "Gà :)"
        vis.getElementsByClassName("overlay-inner")[0].style.visibility = "visible";
        document.body.classList.add("open") 
    }
}

resetButton.addEventListener("click", resetGame);

function resetGame(){
    document.body.classList.remove("open")
    vis.getElementsByClassName("overlay-inner")[0].style.visibility = "hidden";
    updProb()
    state.score = 0
    state.wrongAns = 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 3
}