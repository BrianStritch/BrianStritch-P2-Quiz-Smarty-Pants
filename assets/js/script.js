/* outer entry zone */
let outerZone = document.getElementById('outer-zone')

let startButton = document.getElementById('enter');
startButton.addEventListener('click', enterSelection);

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


/* peppa pig game */
/* functions for peppa pig game */
let usedQuestions = [];
let peppaQuestion = document.getElementById('pep-questions');
let button1 = document.getElementById('peppa-answer1');
let button2 = document.getElementById('peppa-answer2');
let button3 = document.getElementById('peppa-answer3');
let button4 = document.getElementById('peppa-answer4');
let answerButtonsDiv = document.getElementById('answerButtonsPep');
button1.addEventListener('click', nextQuestion);
button2.addEventListener('click', nextQuestion);
button3.addEventListener('click', nextQuestion);
button4.addEventListener('click', checkAnswer);




function startPeppaGame(){
    let num = Math.floor(Math.random() * 4);
    var quest = peppaQuestions[num];


        peppaQuestion.innerText = quest.question;
        button1.innerText = quest.answers[0].text;
        button2.innerText = quest.answers[1].text;
        button3.innerText = quest.answers[2].text;
        button4.innerText = quest.answers[3].text;
        usedQuestions.push(num);
        console.log(usedQuestions);
}

function nextQuestion(){
    let num = Math.floor(Math.random() * 4);
    var quest = peppaQuestions[num];
    if (usedQuestions.includes(num) === false ){
        peppaQuestion.innerText = quest.question;
        button1.innerText = quest.answers[0].text;
        button2.innerText = quest.answers[1].text;
        button3.innerText = quest.answers[2].text;
        button4.innerText = quest.answers[3].text;
        usedQuestions.push(num);
        console.log(usedQuestions);
        
    } else if (usedQuestions.length < 4) {
        nextQuestion();
        console.log(usedQuestions);
    }else {
        console.log('end of game')
        peppaGameOuter.classList.add('hide');
        peppaGameEnd.classList.remove('hide');
    }   
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
        correct:'George', 
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