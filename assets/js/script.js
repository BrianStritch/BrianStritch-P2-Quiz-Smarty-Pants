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


let shuffledQuestions;
let currentQuestionIndex;
let usedQuestions = [];


/**************peppa pig ************ */
let startButtonPeppa = document.getElementById('start-button-peppa');
startButtonPeppa.addEventListener('click', startGame);

let peppaRestart = document.getElementById('peppa-restart')
peppaRestart.addEventListener('click', restartPeppaGame);

let peppaquitBtn = document.getElementById('peppa-quit')
peppaquitBtn.addEventListener('click', exitGame);

let nextButtonPeppa = document.getElementById('next-button-peppa');
nextButtonPeppa.addEventListener('click', nextButton)

let peppaContainer = document.getElementById('peppa-game-container');

let pepQuestion = document.getElementById('pep-questions');
let answerButtonsElement = document.getElementById('answerButtonsPep');




/* functions for peppa pig game */




// function gameChoice(){
//     let choices = document.getElementsByClassName('start-btn-choice');
//     for (let choice of choices){
//         choice.addEventListener('click', function() {
//             if (this.getAttribute('data-type') === 'peppa'){
//                 questions = peppaQuestions; 
//                 startGame();
//             } else if (this.getAttribute('data-type') === 'love'){
//                 // questions = loveQuestions;
//                 console.log(questions[0]);
//                 // startLoveGame();
//             } else if (this.getAttribute('data-type') === 'music'){
//                 console.log('music choice');
//                 questions = musicQuestions;
//                 console.log(questions[0]);
//                 startMusicGame();
//                 }
//         })
//     }  
// }

function startGame(){    
    startButtonPeppa.classList.add('hide');
    shuffledQuestions = peppaQuestions.sort(() => Math.floor() * 31);
    currentQuestionIndex = 0;
    setNextQuestion();
}
function nextButton(){
    showAnswerButtons();
    currentQuestionIndex++;
    setNextQuestion();
}
function setNextQuestion(){    
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    pepQuestion.innerText = question.question;
    message = question.message;
    console.log(message);    
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('pep-btn');            
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){    
    nextButtonPeppa.classList.add('hide');
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
    if(usedQuestions.length < 9){  
        nextButtonPeppa.classList.remove('hide');
        usedQuestions.push('1')
        console.log(usedQuestions);
    } else{
        peppaGameEnd.classList.remove('hide');
        peppaGameOuter.classList.add('hide');
        usedQuestions = [];
        endScoreMessage();
    }
    if(selectedButton = correct){
        setTimeout(hideAnswerButtons , 500);        
        incrementCorrectScore(); 
        pepQuestion.innerText = message; 
            

    } else {        
        incrementIncorrectScore(); 
        setTimeout(hideAnswerButtons , 500);         
        pepQuestion.innerText = message;              
    }
}

function hideAnswerButtons(){
    let pepBtn = document.getElementById('answerButtonsPep')
    pepBtn.classList.add('hide');
}
function showAnswerButtons(){
    let pepBtn = document.getElementById('answerButtonsPep')
    pepBtn.classList.remove('hide'); 
}
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');

    } else {
        element.classList.add('incorrect');

    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function incrementCorrectScore(){
    let oldScores = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldScores;
}
function incrementIncorrectScore(){
    let oldScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = ++oldScore;
}

function endScoreMessage(){
    let endScore = document.getElementById('peppa-score')
    let endResult = parseInt(document.getElementById('correct-score').innerText);
    endScore.innerText = `Well done you scored ${endResult} out of 10`
    

}

function restartPeppaGame(){
    document.getElementById('correct-score').innerText = 0;
    document.getElementById('incorrect-score').innerText = 0; 
    usedQuestions = []; 
    peppaGameEnd.classList.add('hide');
    peppaGameOuter.classList.remove('hide');   
    nextButton();
}

function exitGame(){
    outerZone.classList.remove('hide');
    selectionScreen.classList.add('hide');
    peppaGameEnd.classList.add('hide');
    peppaGameOuter.classList.add('hide');

}
 

let peppaQuestions = [
    {
        question: 'Who is the vet (animal doctor) in "Peppa Pig"?',
        answers:[
            {text: 'Daddy Pig', correct:false},
            {text: 'Mr Bull', correct:false},
            {text: 'Ms Rabbit', correct:false},
            {text: 'Dr. Hamster', correct:true},
        ],
        message: 'Dr. Hamster is the vet! She takes care of all the pets belonging to the characters in the show.',       
    },
    {
        question: "What is the name of Peppa's younger brother?",
        answers:[
            {text: 'Danny', correct:false},
            {text: 'Petro', correct:false},
            {text: 'Edmund', correct:false},
            {text: 'George', correct:true},
        ],
        message:"Billy and Joseph were just made up and Richard is Rebecca Rabbit's little brother.",
    },
    {
        question: "What is the name of Peppa's best friend?",
        answers:[
            {text: 'Ronnie Rhino', correct:false},
            {text: 'Suzy Sheep', correct:true},
            {text: 'Rebecca Rabbit', correct:false},
            {text: 'Freddie Fox', correct:false},
        ],
        message:"Peppa and Suzy sometimes disagree, but always make up in the end.",
    },
    {
        question: "What is the name of Peppa's goldfish?",
        answers:[
            {text: 'Bubbles', correct:false},
            {text: 'Skippy', correct:false},
            {text: 'Patch', correct:false},
            {text: 'Goldie', correct:true},
        ],
        message:"Peppa's birthday is April 12! Peppa's best friend gave Goldie to her for a birthday present.",
    },
    {
        question: "What colour is Mummy Pig's dress?",
        answers:[
            {text: 'Orange', correct:true},
            {text: 'Yellow', correct:false},
            {text: 'Green', correct:false},
            {text: 'Red', correct:false},
        ],
        message:"If you watch the series, Mummy Pig always wears orange except when she is a firefighter.",
    },
    {
        question: "Who does George enjoy a see-saw ride with?",
        answers:[
            {text: 'Danny Dog', correct:false},
            {text: 'Richard Rabbit', correct:true},
            {text: 'Pedro Pony', correct:false},
            {text: 'Edmund Elephant', correct:false},
        ],
        message:"George and Richard both have toy dinosaurs, but do not like to share them.",
    },
    {
        question: "What is the name of Peppa's cousin?",
        answers:[
            {text: 'Chloe Pig', correct:true},
            {text: 'Suzanne Pig', correct:false},
            {text: 'Wendy Wolf', correct:false},
            {text: 'Zoe Zebra', correct:false},
        ],
        message:"Peppa's cousin is Chloe, who is ten years old.Peppa tries to be grown-up like Chloe. ",

    },
    {
        question: "How many more years is Peppa older than her brother?",
        answers:[
            {text: '4', correct:false},
            {text: '1', correct:false},
            {text: '3', correct:false},
            {text: '2', correct:true},
        ],
        message:"When we first meet Peppa and George, Peppa is four years old and George is two. Peppa likes jumping in puddles!",
    },
    {
        question: "Peppa has a pen-pal from overseas; what is her name?",
        answers:[
            {text: 'Delphine Donkey', correct:true},
            {text: 'Wendy Wolf', correct:false},
            {text: 'Zoe Zebra', correct:false},
            {text: 'Gerard Giraffe', correct:false},
        ],
        message:"Peppa likes the pretty French song Delphine sings for her.",
    },
    {
        question: "What colour car does Daddy Pig drive?",
        answers:[
            {text: 'Yellow', correct:false},
            {text: 'Green', correct:false},
            {text: 'Red', correct:true},
            {text: 'Black', correct:false},
        ],
        message:"Daddy Pig loves to bring the family out for a drive in his car. They always drive to grandma and grandpa's house.",
    },
    {
        question: "What is the name of Peppa's pet parrot?",
        answers:[
            {text: 'Sally', correct:true},
            {text: 'Billy', correct:false},
            {text: 'Harry', correct:false},
            {text: 'Polly', correct:true},
        ],
        message:"Peppa's parrot name is Polly! Polly loves to copy others, and is a master escape artist.",
    },
    {
        question: "What colour is Daddy Pig's shirt?",
        answers:[
            {text: 'Tangarine', correct:false},
            {text: 'Orange', correct:false},
            {text: 'Purple', correct:false},
            {text: 'Turquoise', correct:true},
        ],
        message:"Daddy pig always wears turquoise, except when he is racing.",
    },
    {
        question: "Peppa's little brother has a favourite animal. What is it?",
        answers:[
            {text: 'Lizard', correct:false},
            {text: 'Dinosaur', correct:true},
            {text: 'Fish', correct:false},
            {text: 'Spider', correct:false},
        ],
        message:"George goes nowhere without his dinosaur. He loves dinosaur-shaped ice-lollies.",
    },
    {
        question: "Who does Peppa live with?",
        answers:[
            {text: 'Grandad Dog', correct:false},
            {text: 'Zoe Zebra', correct:false},
            {text: 'Madame Gazelle', correct:false},
            {text: 'Mummy and Daddy Pig', correct:true},
        ],
        message:"Peppa lives with her parents Mummy Pig and Daddy Pig, and her little brother George. Peppa occasionally also visits her grandparents, Grandpa and Grandma Pig!",
    },
    {
        question: "Who is George's best friend?",
        answers:[
            {text: 'Richard Rabbit', correct:true},
            {text: 'Danny Dragon ', correct:false},
            {text: 'Suzie Snake ', correct:false},
            {text: 'Simon Spider', correct:false},
        ],
        message:"Danny Dragon, Simon Spider and Suzie Snake don't exist and Freddy is a lot older than George, so they aren't best friends.",

    },
    {
        question: "What is the name of Peppa's teacher?",
        answers:[
            {text: 'Ms Rabbit', correct:false},
            {text: 'Mammy Pig', correct:false},
            {text: 'Ms Zebra', correct:false},
            {text: 'Madame Gazelle', correct:true},
        ],
        message:"Madame Gazelle plays guitar and sings for the children.",
    },
    {
        question: "What is Peppa's favourite cake?",
        answers:[
            {text: 'Toffee Cake', correct:false},
            {text: 'Chocolate Cake', correct:true},
            {text: 'Lemon Cake', correct:false},
            {text: 'Cherry Cake', correct:false},
        ],
        message:"Peppa's Grandma makes lovely chocolate cake. Grandma always makes cake when they visit.",
    },
    {
        question: "Who delivers the mail to Peppa Pigs house",
        answers:[
            {text: 'Mr Sheep', correct:false},
            {text: 'Mr Elephant', correct:false},
            {text: 'Mr Bull', correct:false},
            {text: 'Mr Zebra', correct:true},
        ],
        message:"Mr Zebra delivers the mail to peppa pigs house",
    },
    {
        question: 'What was the name of Suzy Sheeps "pretend friend"',
        answers:[
            {text: 'Leo Lion', correct:true},
            {text: 'Jimminy Cricket', correct:false},
            {text: 'Tommy Tiger', correct:false},
            {text: 'Dominic Donkey', correct:false},
        ],
        message:"Suzy says Leo prefers chocolate cake but will try a little slice of fruitcake.",
    },
    {
        question: 'Who is referred to as a "clever clogs" in a few episodes?',
        answers:[
            {text: 'Fiona', correct:false},
            {text: 'Cleo', correct:false},
            {text: 'Edmond Elephant', correct:true},
            {text: 'Christy', correct:false},
        ],
        message:"Edmond Elephant is the little brother of Emily Elephant. He's extremely smart and loves dinosaurs just like George! Fiona, Christy and Cleo aren't real characters!",
    },
    {
        question: "What is the name of the big energetic celebrity vegetable?",
        answers:[
            {text: 'Mr Banana', correct:false},
            {text: 'Mr Carrot', correct:false},
            {text: 'Mr Turnip', correct:false},
            {text: 'Mr Potato', correct:true},
        ],
        message:'He always says: "Welcoming, your friend and mine, Mr Potato!"',
    },
    {
        question: "Which character's father has nearly everything in his van?",
        answers:[
            {text: 'Ferdinand Fox ', correct:false},
            {text: 'Freddy Fox ', correct:true},
            {text: 'Frank Fox ', correct:false},
            {text: 'Pedro Pony ', correct:false},
        ],
        message:"Mr Fox says he has everything in his van, except petrol.",
    },
    {
        question: "What color dress does Peppa usually wear?",
        answers:[
            {text: 'Blue', correct:false},
            {text: 'Purple', correct:false},
            {text: 'Red', correct:true},
            {text: 'White', correct:false},
        ],
        message:"Peppa always wears her red, classy dress. Unless she plays in Mummy's and Daddy's closet, then she's seen in Mummy Pig's pink dress!",
    },
    {
        question: "What type of animal is Peppa's friend Candy?",
        answers:[
            {text: 'Cat', correct:true},
            {text: 'Mouse', correct:false},
            {text: 'Dog', correct:false},
            {text: 'Horse', correct:false},
        ],
        message:"Candy's mummy works with Daddy Pig.",

    },
    {
        question: "What color are Peppa's lucky boots?",
        answers:[
            {text: 'Pink', correct:false},
            {text: 'Purple', correct:false},
            {text: 'Yellow', correct:false},
            {text: 'Gold', correct:true},
        ],
        message:"Peppa's lucky boots are gold! Her regular boots are yellow. In one episode, a duck stole her gold boots and she had to travel far to get them back, silly ducks!",
    },
    {
        question: "Who is Grandpa Pig's best friend?",
        answers:[
            {text: 'Grandad Dog', correct:true},
            {text: 'Grampy Rabbit', correct:false},
            {text: 'Mr Bull', correct:false},
            {text: 'Mr Elephant', correct:false},
        ],
        message:"Even though they do argue they are best friends.",
    },
    {
        question: 'Which character brings Peppa\'s teddy home when she leaves him behind in the episode "Teddy\'s Day Out"?',
        answers:[
            {text: 'Emily Elephant ', correct:false},
            {text: 'Chloe Pig ', correct:false},
            {text: 'Madame Gazelle ', correct:false},
            {text: 'Zoe Zebra ', correct:true},
        ],
        message:"Zoe's daddy is the postman and helps Zoe deliver teddy back to Peppa.",
    },
    {
        question: "What did Peppa dress up as at her fancy dress party?",
        answers:[
            {text: 'Pumpkin', correct:false},            
            {text: 'Doctor', correct:false},
            {text: 'Fairy', correct:true},
            {text: 'Witch', correct:false},
        ],
        message:"Peppa loves to play dress up. She had a fancy dress party for her birthday.",
    },
    {
        question: "What colour is Suzie Sheep's dress?",
        answers:[
            {text: 'pink', correct:true},
            {text: 'Green', correct:false},
            {text: 'Blue', correct:false},
            {text: 'Red', correct:false},
        ],
        message:"She is Peppa's best friend so you will see her a lot in the show.",
    },
    {
        question: "Peppa has a baby cousin; what is his name?",
        answers:[
            {text: 'Jimmy', correct:false},
            {text: 'Freddie', correct:false},
            {text: 'Billy', correct:false},
            {text: 'Alexander', correct:true},
        ],
        message:"Baby Alexander is Chloe's baby brother.",
    },
    {
        question: "What colour is Peppa pig's house?",
        answers:[
            {text: 'Red', correct:false},
            {text: 'Blue', correct:false},
            {text: 'White', correct:false},
            {text: 'Yellow', correct:true},
        ],
        message:"Peppa's house is yellow and the roof of the house is red.",
    }
]

/* *************************************** love hate game ****************************************/
/* Love hate game */

let loveStartButton = document.getElementById('love-start-button');
loveStartButton.addEventListener('click', startLoveGame);

let loveRestart = document.getElementById('love-restart');
loveRestart.addEventListener('click', restartLoveGame); 

let loveNextButton = document.getElementById('love-next-button');
nextButtonPeppa.addEventListener('click', nextButton)

let lovequitBtn = document.getElementById('love-quit')
lovequitBtn.addEventListener('click', exitGame);

let nextButtonlove = document.getElementById('next-button-love');
nextButtonlove.addEventListener('click', nextButton)

let loveContainer = document.getElementById('love-game-container');

let loveQuestion = document.getElementById('love-questions');
let answerButtonsLove = document.getElementById('answerButtonsLove');


let shuffledLoveQuestions;
let currentLoveQuestionIndex;
let usedLoveQuestions = [];





function startLoveGame(){    
    loveStartButton.classList.add('hide');
    shuffledLoveQuestions = loveQuestions.sort(() => Math.floor() * 31);
    currentLoveQuestionIndex = 0;
    setNextLoveQuestion();
}
function nextButtonLove(){
    showLoveAnswerButtons();
    currentLoveQuestionIndex++;
    setNextLoveQuestion();
}
function setNextLoveQuestion(){    
    resetState()
    showLoveQuestion(shuffledloveQuestions[currentLoveQuestionIndex]);
}
/**
 * 
 * i need to rearrange the question array call in the below functions. 
 */
function showLoveQuestion(loveQuestion){
    loveQuestion.innerText = loveQuestion.question;
    message = loveQuestion.message;
    console.log(message);    
    loveQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('pep-btn');            
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectLoveAnswer);
        answerButtonsLove.appendChild(button)
    });
}

function resetLoveState(){    
    nextButtonLove.classList.add('hide');
    while(answerButtonsLove.firstChild){
        answerButtonsLove.removeChild(answerButtonsLove.firstChild)
    }
}

function selectLoveAnswer(e){
    let selectedloveButton = e.target;    
    let correct = selectedloveButton.dataset.correct;
    setLoveStatusClass(selectedLoveButton, correct);
    Array.from(answerButtonslove.children).forEach(button => {   
        setStatusClass(button, button.dataset.correct)
    })
    if(usedQuestions.length < 9){  
        nextButtonPeppa.classList.remove('hide');
        usedQuestions.push('1')
        console.log(usedQuestions);
    } else{
        peppaGameEnd.classList.remove('hide');
        peppaGameOuter.classList.add('hide');
        usedQuestions = [];
        endScoreMessage();
    }
    if(selectedButton = correct){
        setTimeout(hideAnswerButtons , 500);        
        incrementCorrectScore(); 
        pepQuestion.innerText = message; 
            

    } else {        
        incrementIncorrectScore(); 
        setTimeout(hideAnswerButtons , 500);         
        pepQuestion.innerText = message;              
    }
}

function hideLoveAnswerButtons(){
    let loveBtn = document.getElementById('answerButtonsLove')
    loveBtn.classList.add('hide');
}
function showLoveAnswerButtons(){
    let loveBtn = document.getElementById('answerButtonsLove')
    loveBtn.classList.remove('hide'); 
}
function setLoveStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');

    } else {
        element.classList.add('incorrect');

    }
}
function clearLoveStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function incrementLoveCorrectScore(){
    let oldScoresLove = parseInt(document.getElementById('correct-love-score').innerText);
    document.getElementById('correct-love-score').innerText = ++oldScoresLove;
}
function incrementLoveIncorrectScore(){
    let oldScoreLove = parseInt(document.getElementById('incorrect-love-score').innerText);
    document.getElementById('incorrect-love-score').innerText = ++oldScoreLove;
}

function loveendScoreMessage(){
    let loveEndScore = document.getElementById('love-score')
    let loveEndResult = parseInt(document.getElementById('correct-love-score').innerText);
    loveEndScore.innerText = `Well done you scored ${loveEndResult} out of 10`
    

}

function restartLoveGame(){
    document.getElementById('correct-love-score').innerText = 0;
    document.getElementById('incorrect-love-score').innerText = 0; 
    usedQuestions = []; 
    loveGameEnd.classList.add('hide');
    loveGameOuter.classList.remove('hide');   
    nextButton();
}

let loveQuestions = [
    {
        question: 'this is love',
        answers:[
            {text: 'y', correct:false},
            {text: 'y', correct:false},
            {text: 'y', correct:false},
            {text: 'y', correct:false},
        ],        
    },
    {
        question: 'who is peppas brother 2',
        answers:[
            {text: 'h', correct:true},
            {text: 'h', correct:true},
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
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ],
        message:"",
    },
    {
        question: "",
        answers:[
            {text: '', correct:true},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
        ],
        message:"",

    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ],
        message:"",
    },
    {
        question: '',
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ]
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ]
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ],
        message:" ",
    },
    {
        question: "",
        answers:[
            {text: '', correct:true},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
        ],
        message:" ",
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ],
        message:"",
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ]
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ]
    },
    {
        question: "",
        answers:[
            {text: '', correct:true},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
        ],
        message:"",

    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ],
        message:"",
    },
    {
        question: '',
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
        ]
    },
    {
        question: "",
        answers:[
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:false},
            {text: '', correct:true},
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

