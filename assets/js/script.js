/* outer entry zone */
let outerZone = document.getElementById('outer-zone')

let startBtn = document.getElementById('enter');
startBtn.addEventListener('click', enterSelection);

let rulesBtn = document.getElementById('rules-btn');
rulesBtn.addEventListener('click', rules);

let rulesList = document.getElementById('rules-screen');

let rulesExit = document.getElementById('rules-close');
rulesExit.addEventListener('click', exitRules);

/* selector screen */
let selectionScreen = document.getElementById('selection-screen');
    
let peppaGameOuter = document.getElementById('peppa-game-outer');
let peppaGameEnd = document.getElementById('peppa-end-section');
let loveGameOuter = document.getElementById('love-game-outer');
let musicGameOuter = document.getElementById('music-game-outer');

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'peppa-pig'){
                peppaGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startPeppaGame();
            } else if (this.getAttribute('data-type') === 'love-hate'){
                loveGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startLoveHate();
            } else if (this.getAttribute('data-type') === 'music-quiz'){
                musicGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startMusic()
                }
        })
    }   
})

/* functions for outer entry screen and rules list */
function enterSelection(){
    outerZone.classList.add('hide');
    selectionScreen.classList.remove('hide');
}
function rules(){
    rulesList.classList.remove('hide');
}
function exitRules(){
    rulesList.classList.add('hide');
}

/* ****************** game screens ********************************/
let startButton = document.getElementById('start-button');
startButton.addEventListener('click', gameChoice)
let nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})
let peppaContainer = document.getElementById('peppa-game-container');
let shuffledQuestions;
let currentQuestions;
let pepQuestion = document.getElementById('pep-questions');
let peppaAnswerButtons = document.getElementById('answerButtonsPep');

/* peppa pig game */
/* functions for peppa pig game */

function gameChoice(){
    let choices = document.getElementsByClassName('start-btn-choice');
    for (let choice of choices){
        choice.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'peppa'){
                questions = peppaQuestions;
                console.log(questions[0]);
                startGame();
            } else if (this.getAttribute('data-type') === 'love'){
                questions = loveQuestions;
                console.log(questions[0]);
                startGame();
            } else if (this.getAttribute('data-type') === 'music'){
                console.log('music choice');
                questions = musicQuestions;
                console.log(questions[0]);
                startGame();
                }
        })
    }  
}

function startGame(){    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.floor() * 4);
    currentQuestionIndex = 0;
    setNextQuestion();
    peppaAnswerButtons.classList.remove('hide');

}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('pep-btn');        
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    let selectedButton = e.target;    
    let correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if(selectedButton = correct){
        setTimeout(hideAnswerButtons , 500);        
        incrementCorrectScore(); 
        questionElement.innerText = 'Thats right, well done!'        

    } else {        
        incrementIncorrectScore(); 
        setTimeout(hideAnswerButtons , 500);         
        questionElement.innerText = 'Sorry thats not right.'              
    }
}



function startPeppaGame(){
    
}

function nextQuestion(){
    
        
    // } else if (usedQuestions.length < 4) {
    //     nextQuestion();
    //     console.log(usedQuestions);
    // }else {
    //     console.log('end of game')
    //     peppaGameOuter.classList.add('hide');
    //     peppaGameEnd.classList.remove('hide');
    // }   
}

function checkAnswer(){

}





let peppaQuestions = [
    {
        question: 'who is peppas brother',
        answers:[
            {text: 'Michael', correct:false},
            {text: 'John', correct:false},
            {text: 'Paddy', correct:false},
            {text: 'George', correct:true},
        ],        
    },
    {
        question: 'who is peppas brother 2',
        answers:[
            {text: 'jim', correct:false},
            {text: 'bob', correct:false},
            {text: 'mary', correct:false},
            {text: 'henry', correct:true},
        ]
    },
    {
        question: 'who is peppas brother 3',
        answers:[
            {text: 'sean', correct:false},
            {text: 'frank', correct:false},
            {text: 'niall', correct:false},
            {text: 'George', correct:true},
        ]
    },
    {
        question: 'who is peppas brother 4',
        answers:[
            {text: 'joe', correct:false},
            {text: 'peter', correct:false},
            {text: 'eileen', correct:false},
            {text: 'alan', correct:true},
        ]
    },
]
let loveQuestions = [
    {
        question: 'this is love',
        answers:[
            {text: 'y', correct:false},
            {text: 'y', correct:false},
            {text: 'y', correct:false},
            {text: 'y', correct:true},
        ],        
    },
    {
        question: 'who is peppas brother 2',
        answers:[
            {text: 'h', correct:false},
            {text: 'h', correct:false},
            {text: 'h', correct:false},
            {text: 'h', correct:true},
        ]
    },
    {
        question: 'who is peppas brother 3',
        answers:[
            {text: 'h', correct:false},
            {text: 'fh', correct:false},
            {text: 'nh', correct:false},
            {text: 'h', correct:true},
        ]
    },
    {
        question: 'who is peppas brother 4',
        answers:[
            {text: 'r', correct:false},
            {text: 'r', correct:false},
            {text: 'r', correct:false},
            {text: 'r', correct:true},
        ]
    },
]

/* love hate game */
/* functions for love/hate game */
function startLoveHate(){
    
    
}
/* functions for music game */
function startMusic(){
    


}


function incrementScore(){
    let oldScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldScore;
}