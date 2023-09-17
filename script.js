const MyBtn = document.querySelector(".MyBtn button")
const RulesBox = document.querySelector(".RulesBox")
const ExitButton = document.querySelector(".ExitButton")
const ContinueButton = document.querySelector(".ContinueButton")
const Questions = document.querySelector(".Questions")
const MyOptions = document.querySelector(".MyOptions")
const Seconds = document.querySelector(".Seconds")
const time_lines = document.querySelector(".time_lines")




MyBtn.onclick = () => {
    RulesBox.classList.add("activeInfo")
}
ExitButton.onclick = () => {
    RulesBox.classList.remove("activeInfo")

}
ContinueButton.onclick = () => {
    RulesBox.classList.remove("activeInfo")
    Questions.classList.add("activeQuiz")
    showQuestion(0)
    startTime(15)
    startTimerLine(0)
}







function showQuestion(index) {
    const text = document.querySelector(".text")
    let que_tag = "<span>" + questions[index].numb + '.' + questions[index].question + "</span>"
    text.innerHTML = que_tag
    

    // options
    const MyOptions = document.querySelector(".MyOptions")
    let option_tag = `<div class="options">${questions[index].options[0]}</div>`
                    + `<div class="options">${questions[index].options[1]}</div>`
                    + `<div class="options">${questions[index].options[2]}</div>`
                    + `<div class="options">${questions[index].options[3]}</div>`
    MyOptions.innerHTML = option_tag


// total_que
    const total_que = document.querySelector(".total_que")
    let total_queNum = `<p>` + questions[index].numb + " Of 5" + `</p>`
    total_que.innerHTML = total_queNum



// option 
const option = MyOptions.querySelectorAll(".options")
    option.forEach((value,index,array) => {
        option[index].setAttribute("onclick", "optionSelected(this)")
    
})
}



///icon
let tickIcon = '<div class="tick icon"><i class="fas fa-check"></i></div>'; 
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>'; 

function optionSelected(ans) {
    clearInterval(counter);
    clearInterval(counterLine)
    let userans = ans.textContent;
    let currcetAns = questions[que_count].answer;

    let allOptions = MyOptions.children.length;  
    if (userans === currcetAns) {
        userScor += 1;
        console.log(userScor)
        ans.insertAdjacentHTML("beforeend", tickIcon)
        ans.classList.add("correct")
    }
    
    else {
        ans.classList.add("incorrect")
        ans.insertAdjacentHTML("beforeend", crossIcon)

        for (let i = 0; i < allOptions; i++){
            if (MyOptions.children[i].textContent == currcetAns) {
                MyOptions.children[i].setAttribute("class", "options correct")

                 MyOptions.children[i].insertAdjacentHTML("beforeend", tickIcon)

            }
        }
    }
    
    for (let i = 0; i < allOptions; i++){
        MyOptions.children[i].classList.add("disabled")
    }

    nextBtn.style.display = "block"
}



// que-count
const nextBtn = document.querySelector(".nextBtn")
let que_count = 0;
let counter;
let time_count = 15;
let counterLine;
let widthValue = 0;
let userScor = 0;

nextBtn.onclick = () => {
    if (que_count < questions.length -1) {
        que_count++
        showQuestion(que_count)
        clearInterval(counter)
        startTime(time_count)
        clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display = "none"
    }
    else {
        showResultBox()
    }
}



// Seconds
function startTime(time) {
  counter = setInterval(timer, 1000)
    function timer() {

        Seconds.textContent = time
        time--
        if (time < 9) {
            let zero = Seconds.textContent;
            Seconds.textContent = 0 + zero
        }
        if (time > 319) {
            clearInterval(counter)
            Seconds.textContent = "00"
        }
    }
}


function startTimerLine(time) {
    counterLine = setInterval(timer, 50);
    function timer() {
        time += 1
        time_lines.style.width = time + "px"
        if (time > 319) {
            clearInterval(counterLine)
        }
    }
}


function showResultBox() {
    RulesBox.classList.remove("activeInfo")
    Questions.classList.remove("activeQuiz")
    reslut_box.classList.add("activeResult")
    let score_text = document.querySelector(".score_text")
    if (userScor > 3) {
        let scor = `<span>Carry On 👍 You Got <p>`+ userScor +`</p> Out Of <p>` + questions.length + `</p></span>`
        score_text.innerHTML = scor
    }
    else if (userScor > 1) {
        let scor = `<span>Carry On 👍 You Got <p>`+ userScor +`</p> Out Of <p>` + questions.length + `</p></span>`
        score_text.innerHTML = scor
    }
    
    else {
        let scor = `<span>I am sorroy yoy got<p>`+ userScor +`</p> Out Of <p>` + questions.length + `</p></span>`
        score_text.innerHTML = scor
    }
}


// result box
const reslut_box = document.querySelector(".reslut_box")
const restart1 = document.querySelector(".restart1")
const quit = document.querySelector(".quit")


quit.onclick = () => {
    window.location.reload()
}

restart1.onclick = () => {
    
    Questions.classList.add("activeQuiz"); 
    reslut_box.classList.remove("activeResult"); 

    
let que_count = 0;
let counter;
let time_count = 15;
let counterLine;
let widthValue = 0;

        showQuestion(que_count)
        clearInterval(counter)
        startTime(time_count)
        clearInterval(counterLine)
        startTimerLine(widthValue)

}
