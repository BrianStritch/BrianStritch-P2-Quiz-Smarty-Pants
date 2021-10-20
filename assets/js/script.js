/************* outer entry zone variables  ********************************************/
let outerZone = document.getElementById('outer-zone');
let startBtn = document.getElementById('enter');
startBtn.addEventListener('click', enterSelection);
let rulesList = document.getElementById('rules-screen');

/**************** game selector screen variables ****************************************/
let selectionScreen = document.getElementById('selection-screen');    
let peppaGameOuter = document.getElementById('peppa-game-outer');
let loveGameOuter = document.getElementById('love-game-outer');
let musicGameOuter = document.getElementById('music-game-outer');

/***************  functions for outer entry screen and rules modal **********************/
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

let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("modal-Btn");
let span = document.getElementsByClassName("close")[0];
modalBtn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
/* ****************** variables for game screens ********************************/
/* exit button on game screens */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('emergency-exit-btn');
    for (let button of buttons){
        button.addEventListener('click', exitGame);
    }
});
        
/********  common variables for use inside functions below **********************/
let shuffledQuestions;
let currentQuestionIndex;
let usedQuestions = [];
let gameTypeSelected;
let selectedQuestionArea;
let endScore;
let endResult;
let oldScore;
let oldScores;
let gameTypeSelectionForIfStatements;
let message;


/* ******************************** peppa pig game variables ********************************/

let startButtonPeppa = document.getElementById('start-button-peppa');
let peppaRestart = document.getElementById('peppa-restart');
peppaRestart.addEventListener('click', restartGame);
let peppaquitBtn = document.getElementById('peppa-quit');
peppaquitBtn.addEventListener('click', exitGame);
let nextButtonPeppa = document.getElementById('next-button-peppa');
nextButtonPeppa.addEventListener('click', nextButton);
let peppaContainer = document.getElementById('peppa-game-container');
let pepQuestion = document.getElementById('pep-questions');
let answerButtonsElement = document.getElementById('answerButtonsPep');
let peppaGameEnd = document.getElementById('peppa-end-section');
let pepBtn = document.getElementById('answerButtonsPep');

/* *********************************** Love Hate variables ************************************/
let loveStartButton = document.getElementById('love-start-button');
let loveRestart = document.getElementById('love-restart');
loveRestart.addEventListener('click', restartGame);
let loveNextButton = document.getElementById('love-next-button');
loveNextButton.addEventListener('click', nextButton);
let lovequitBtn = document.getElementById('love-quit');
lovequitBtn.addEventListener('click', exitGame);
let loveContainer = document.getElementById('love-game-container');
let loveQuestion = document.getElementById('love-question');
let answerButtonsLove = document.getElementById('answerButtonsLove');
let loveGameEnd = document.getElementById('love-end-section');

/* ********************************** music game variables *****************************************/

let musicStartButton = document.getElementById('music-start-button');
let musicRestart = document.getElementById('music-restart');
musicRestart.addEventListener('click', restartGame);
let musicNextButton = document.getElementById('music-next-button');
musicNextButton.addEventListener('click', nextButton);
let musicquitBtn = document.getElementById('music-quit');
musicquitBtn.addEventListener('click', exitGame);
let musicContainer = document.getElementById('music-game-container');
let musicQuestion = document.getElementById('music-questions');
let answerButtonsMusic = document.getElementById('answer-Buttons-music');
let musicGameEnd = document.getElementById('music-end-section');



/************************************** game functions *********************************************/
/*eventlistener attached to buttons with class name 'selector-btn' in game selection screen to set gametype show the 
relevant game container element */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('selector-btn');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'peppa-pig-selector'){
                peppaGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                nextButtonPeppa.classList.add('hide');
                

            } else if (this.getAttribute('data-type') === 'love-hate-selector'){
                loveGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                loveNextButton.classList.add('hide');
                
            } else if (this.getAttribute('data-type') === 'music-game-selector'){
                musicGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                musicNextButton.classList.add('hide');
                
                }
        });
    }   
});
/* eventlistener attached to buttons with class name 'start-button' in selected game screen to set gametype and 
call startNewGame function after setting gametype */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('start-button');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'peppa-pig'){                
                gameTypeSelected = 'peppa-pig';                
                startNewGame(gameTypeSelected);                

            } else if (this.getAttribute('data-type') === 'love-hate'){                
                gameTypeSelected = 'love-game';
                startNewGame(gameTypeSelected);

            } else if (this.getAttribute('data-type') === 'music-game'){
                gameTypeSelected = 'music-game';
                startNewGame(gameTypeSelected);
            }
        });
    }
});

/**
 * 
 * function to trigger the relevant actions to start a new game depending on game type selected 
 */
function startNewGame(gameTypeSelected){
    if(gameTypeSelected === 'peppa-pig'){ 
        gameTypeSelectionForIfStatements = 'peppa';
        startButtonPeppa.classList.add('hide');
        selectedQuestionArea = pepQuestion;
        shuffledQuestions = shuffle(peppaQuestions);
        currentQuestionIndex = 0;
        setNextQuestion();

    } else if(gameTypeSelected === 'love-game'){
        gameTypeSelectionForIfStatements = 'love';
        loveStartButton.classList.add('hide');
        selectedQuestionArea = loveQuestion;
        shuffledQuestions = shuffle(loveQuestions);        
        currentQuestionIndex = 0;
        setNextQuestion();        

    } else if(gameTypeSelected === 'music-game'){
        gameTypeSelectionForIfStatements = 'music';
        musicStartButton.classList.add('hide');
        selectedQuestionArea = musicQuestion;
        shuffledQuestions = shuffle(musicQuestions);
        currentQuestionIndex = 0; 
        setNextQuestion();     
        

    } else {
        console.log('unknown game type selected');
    }

}
/**
 * function to reset the html element and call showNextquestion functino with the result of the shuffled 
questions array passed depending on gametype 
 */
function setNextQuestion(){   
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);    
}
/**
 * 
 * function below takes result of shuffled questions and applies the keys and values to the designated HTML elements, and creates 
 * button elements with the relevant answers and datasets and appends the buttons to the specified HTML elements  
 */
function showQuestion(question){
    if (gameTypeSelectionForIfStatements === 'peppa'){ 
        pepQuestion.innerText = question.question;       
    } else if(gameTypeSelectionForIfStatements === 'love'){
        loveQuestion.innerText = question.question;      
    } else if(gameTypeSelectionForIfStatements === 'music'){ 
        musicQuestion.innerText = question.question;  
    }  
    message = question.message;    
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');     
        // if statement to set dataset to button to correct          
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        // if statement to add event listener and append button to document
        if (gameTypeSelectionForIfStatements === 'peppa'){            
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button); 
        } else if(gameTypeSelectionForIfStatements === 'love'){          
            button.addEventListener('click', selectAnswer);
            answerButtonsLove.appendChild(button);        
        } else if(gameTypeSelectionForIfStatements === 'music'){           
            button.addEventListener('click', selectAnswer);
            answerButtonsMusic.appendChild(button);  
        }
    }); 
}
/**
 * function to execute when next button is pressed in game, which calls on the functions of show answerButtons to remove hide
 * class, increments currentQuestionIndex, and calls the setNextQuestion function to continue the game.
 *
 */
function nextButton(){                      
    showAnswerButtons();
    currentQuestionIndex++;
    setNextQuestion();         
}

/**
 * function to remove the button elements created in the showQuestion function, and removes the hide class from
 * the next button so the user can click the next button to continue the game.
 */
function resetState(){

    if(gameTypeSelectionForIfStatements === 'peppa'){
        nextButtonPeppa.classList.add('hide');
        while(answerButtonsElement.firstChild){
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }  

    } else if(gameTypeSelectionForIfStatements === 'love'){
        loveNextButton.classList.add('hide');
        while(answerButtonsLove.firstChild){
            answerButtonsLove.removeChild(answerButtonsLove.firstChild);
        }

    } else if(gameTypeSelectionForIfStatements === 'music'){
        musicNextButton.classList.add('hide');          
        while(answerButtonsMusic.firstChild){
            answerButtonsMusic.removeChild(answerButtonsMusic.firstChild);
        }
    }    
}

/**
 * 
 * function to execute when the user selects an answer by clicking the desired button, and function will check the status of the 
 * answer to check if it is correct and sets the relevant class and actions in motion depending on the result.
 */
function selectAnswer(e){
    let selectedButton = e.target;   
    let correct = selectedButton.dataset.correct;
    /* this is to add class disable to buttons after the user has selected their desired answer
    to stop incorrectly incrementing answers when buttons are pressed after the answer is selected,
     so as to stop incorrectly incrementing score */
    let buttons = document.getElementsByClassName('answer-btn');
        for (let button of buttons){
                button.removeEventListener('click', selectAnswer);
            }
    setStatusClass(selectedButton, correct);
    if (gameTypeSelectionForIfStatements === 'peppa'){
        Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });              
    } else if(gameTypeSelectionForIfStatements === 'love'){
        Array.from(answerButtonsLove.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });                   
    } else if(gameTypeSelectionForIfStatements === 'music'){
        Array.from(answerButtonsMusic.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });  
    } 
    /* if statement to end game depending on number of questions asked or to continue asking questions */
    if(usedQuestions.length < 9){ 
        if(correct === 'true'){  
        setTimeout(hideAnswerButtons , 2500); 
        setTimeout(removeNextButtonHide, 2500);              
        incrementCorrectScore();
        } else {
        setTimeout(hideAnswerButtons , 2500);
        setTimeout(removeNextButtonHide, 2500); 
        incrementIncorrectScore();        
        }       
        usedQuestions.push('1');

    } else{
        if (gameTypeSelectionForIfStatements === 'peppa'){
            peppaGameEnd.classList.remove('hide');
            peppaGameOuter.classList.add('hide');    
        } else if(gameTypeSelectionForIfStatements === 'love'){
            loveGameEnd.classList.remove('hide');
            loveGameOuter.classList.add('hide');                    
        } else if(gameTypeSelectionForIfStatements === 'music'){
            musicGameEnd.classList.remove('hide');
            musicGameOuter.classList.add('hide');             
        }       
        usedQuestions = [];
        endScoreMessage();
    }
    /* if statement to hide answer buttons, increment scores and show educational
     message relating to question following timeout */
    
    if (gameTypeSelectionForIfStatements === 'peppa'){
        pepQuestion.innerText = message;

    } else if(gameTypeSelectionForIfStatements === 'love'){ 
        loveQuestion.innerText = message;

    } else if(gameTypeSelectionForIfStatements === 'music'){ 
        musicQuestion.innerText = message; 
    }
    
}
function removeNextButtonHide(){
    if (gameTypeSelectionForIfStatements === 'peppa'){
        nextButtonPeppa.classList.remove('hide');

    } else if(gameTypeSelectionForIfStatements === 'love'){
        loveNextButton.classList.remove('hide'); 

    } else if(gameTypeSelectionForIfStatements === 'music'){
        musicNextButton.classList.remove('hide'); 
    }   
}
/* function to hide answer buttons when called */
function hideAnswerButtons(){
    if(gameTypeSelectionForIfStatements === 'peppa'){
        answerButtonsElement.classList.add('hide'); 
    } else if(gameTypeSelectionForIfStatements === 'love'){
        answerButtonsLove.classList.add('hide'); 
    } else if(gameTypeSelectionForIfStatements === 'music'){
        answerButtonsMusic.classList.add('hide'); 
    }     
}
/* function to show answer buttons when called */
function showAnswerButtons(){
    if(gameTypeSelectionForIfStatements === 'peppa'){
        answerButtonsElement.classList.remove('hide'); 
     } else if(gameTypeSelectionForIfStatements === 'love'){
         answerButtonsLove.classList.remove('hide'); 
     } else if(gameTypeSelectionForIfStatements === 'music'){
         answerButtonsMusic.classList.remove('hide'); 
     }  
} 
/* function to add classlist of correct and incorrect to button elements created in showquestion depending on truth result */
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    } 
}
/* function to clear classlists of correc and incorrect to button elements created in showQuestion function */
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}
/* function to increment correct scores when called */
function incrementCorrectScore(){    
    if(gameTypeSelectionForIfStatements === 'peppa'){
        let oldScores = parseInt(document.getElementById('correct-score').innerText);
        document.getElementById('correct-score').innerText = ++oldScores;
    }else if(gameTypeSelectionForIfStatements === 'love'){
        let oldScores = parseInt(document.getElementById('correct-love-score').innerText);
        document.getElementById('correct-love-score').innerText = ++oldScores;
    }else if(gameTypeSelectionForIfStatements === 'music'){
        let oldScores = parseInt(document.getElementById('correct-music-score').innerText);
        document.getElementById('correct-music-score').innerText = ++oldScores;
    }
    
}
/* function to increment incorrect scores when called */
function incrementIncorrectScore(){
    if(gameTypeSelectionForIfStatements === 'peppa'){
        oldScore = parseInt(document.getElementById('incorrect-score').innerText);
        document.getElementById('incorrect-score').innerText = ++oldScore;  
    }else if(gameTypeSelectionForIfStatements === 'love'){
        oldScore = parseInt(document.getElementById('incorrect-love-score').innerText);
        document.getElementById('incorrect-love-score').innerText = ++oldScore;  
    }else if(gameTypeSelectionForIfStatements === 'music'){
        oldScore = parseInt(document.getElementById('incorrect-music-score').innerText);
        document.getElementById('incorrect-music-score').innerText = ++oldScore;  
    }    
}
/* function to display message at end of game displaying the users score out of 10 */
function endScoreMessage(){
    if(gameTypeSelectionForIfStatements === 'peppa'){
        endScore = document.getElementById('peppa-score');
        endResult = parseInt(document.getElementById('correct-score').innerText);
        endScore.innerText = `Well done you scored ${endResult} out of 10`;
    }else if(gameTypeSelectionForIfStatements === 'love'){
        endScore = document.getElementById('love-score');
        endResult = parseInt(document.getElementById('correct-love-score').innerText);
        endScore.innerText = `Well done you scored ${endResult} out of 10`;
    }else if(gameTypeSelectionForIfStatements === 'music'){
        endScore = document.getElementById('music-score');
        endResult = parseInt(document.getElementById('correct-music-score').innerText);
        endScore.innerText = `Well done you scored ${endResult} out of 10`;
    }
}
/* function to restart game after game has finnished by the user clicking the try again button */
function restartGame(){
    if(gameTypeSelectionForIfStatements === 'peppa'){
        document.getElementById('correct-score').innerText = 0;
        document.getElementById('incorrect-score').innerText = 0;         
        peppaGameEnd.classList.add('hide');
        peppaGameOuter.classList.remove('hide'); 
        nextButtonPeppa.classList.add('hide');
    }else if(gameTypeSelectionForIfStatements === 'love'){
        document.getElementById('correct-love-score').innerText = 0;
        document.getElementById('incorrect-love-score').innerText = 0;         
        loveGameEnd.classList.add('hide');
        loveGameOuter.classList.remove('hide');
        loveNextButton.classList.add('hide'); 
    }else if(gameTypeSelectionForIfStatements === 'music'){
        document.getElementById('correct-music-score').innerText = 0;
        document.getElementById('incorrect-music-score').innerText = 0;         
        musicGameEnd.classList.add('hide');
        musicGameOuter.classList.remove('hide');
        musicNextButton.classList.add('hide'); 
    }
    /* code to reset the value of the variables as to not carry into the next games */
    selectedQuestion = 'reset';
    gameTypeSelected = 'reset';
    usedQuestions = [];
    nextButton(); 
}

/* function to shuffle questions from an array and return random question depending on which array was passed to it */
// code below taken from stack overflow question 
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
}
/* function to exit game to beggining entry screen when called */
function exitGame(){
    outerZone.classList.remove('hide');
    selectionScreen.classList.add('hide');
    peppaGameEnd.classList.add('hide');
    peppaGameOuter.classList.add('hide');
    loveGameEnd.classList.add('hide');
    loveGameOuter.classList.add('hide');
    musicGameEnd.classList.add('hide');
    musicGameOuter.classList.add('hide');
}

/****************questions arrays************ */
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
        message:"Richard Rabbit. George and Richard both have toy dinosaurs, but do not like to share them.",
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
        message:"Delphine Donkey is peppas pen-pal. Peppa likes the pretty French song Delphine sings for her.",
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
        question: "What is the name of Grandpa pigs pet parrot?",
        answers:[
            {text: 'Sally', correct:false},
            {text: 'Billy', correct:false},
            {text: 'Harry', correct:false},
            {text: 'Polly', correct:true},
        ],
        message:"Grandpa pigs parrot's name is Polly! Polly loves to copy others, and is a master escape artist.",
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
            {text: 'Freddie fox', correct:false},
        ],
        message:"Richard rabbit is Georges best friend. Danny Dragon and Suzie Snake don't exist and Freddie is a lot older than George, so they aren't best friends.",

    },
    {
        question: "What is the name of Peppa's teacher?",
        answers:[
            {text: 'Ms Rabbit', correct:false},
            {text: 'Mammy Pig', correct:false},
            {text: 'Ms Zebra', correct:false},
            {text: 'Madame Gazelle', correct:true},
        ],
        message:"Madame Gazelle is peppas teacher and plays guitar and sings for the children.",
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
        message:"Loe Lion. Suzy says Leo prefers chocolate cake but will try a little slice of fruitcake.",
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
        message:'Mr Potato. He always says: "Welcoming, your friend and mine, Mr Potato!"',
    },
    {
        question: "Which character's father has nearly everything in his van?",
        answers:[
            {text: 'Richard rabbit ', correct:false},
            {text: 'Freddy Fox ', correct:true},
            {text: 'Suzy sheep ', correct:false},
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
        message:"Candy is a cat. Candy's mummy works with Daddy Pig.",

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
        message:"Even though they do argue Grandpa pig and Grandad dog are best friends.",
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
        message:"Suzy sheeps dress is pink. She is Peppa's best friend so you will see her a lot in the show.",
    },
    {
        question: "Peppa has a baby cousin; what is his name?",
        answers:[
            {text: 'Jimmy', correct:false},
            {text: 'Freddie', correct:false},
            {text: 'Billy', correct:false},
            {text: 'Alexander', correct:true},
        ],
        message:"Baby Alexander is cousin Chloe's baby brother.",
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
];
let loveQuestions = [
    {
        question: 'How many seasons of Love/Hate is there in total?',
        answers:[
            {text: 'Six', correct:false},
            {text: 'Two', correct:false},
            {text: 'Four', correct:false},
            {text: 'Five', correct:true},
        ],
        message: 'There were five seasons in total',       
    },
    {
        question: "Which charachter learns how to use a gun by watching a YouTube tutorial?",
        answers:[
            {text: 'Darren', correct:false},
            {text: 'Lizzie', correct:false},
            {text: 'Nidge', correct:true},
            {text: 'Warren', correct:false},
        ],
        message:"Nidge learned how to use a gun by watching a YouTube tutorial in the very first episode",
    },
    {
        question: "Who killed Darren's brother robbie?",
        answers:[
            {text: 'Tommy', correct:false},
            {text: 'Hughie', correct:true},
            {text: 'John Boy', correct:false},
            {text: 'Dano', correct:false},
        ],
        message:"Hughie killed Robbie on his way home from his prison release.",
    },
    {
        question: "Who gets married in season one?",
        answers:[
            {text: 'Darren and Rosie', correct:false},
            {text: 'John Boy and Debbie', correct:false},
            {text: 'Nidge and Trish', correct:true},
            {text: 'Tommy and Siobhan', correct:false},
        ],
        message:"It was Nidge and Trish that got married in season one.",
    },
    {
        question: "Who is Siobhans Uncle?",
        answers:[
            {text: 'Nidge', correct:true},
            {text: 'John Boy', correct:false},
            {text: 'Elmo', correct:false},
            {text: 'Fran', correct:false},
        ],
        message:"Nidge was Siobhan's Uncle.",
    },
    {
        question: "Who's house did John Boy order nidge to firebomb?",
        answers:[
            {text: 'Detective Moynihan\'s', correct:false},
            {text: 'Frans', correct:true},
            {text: 'Ado\'s', correct:false},
            {text: 'Lizzie\'s', correct:false},
        ],
        message:"John Boy ordered Nidge to firebomb Fran's house in season 2",
    },
    {
        question: "What season was Darren Shot Dead?",
        answers:[
            {text: 'Season 3', correct:true},
            {text: 'Season 4', correct:false},
            {text: 'Season 2', correct:false},
            {text: 'Season 5', correct:false},
        ],
        message:"Darren was shot dead by Lizzie in season 3",

    },
    {
        question: 'What fizzy drink does Tommy tell DI Moynihan he would like?',
        answers:[
            {text: '7 up', correct:false},
            {text: 'Coca Cola', correct:false},
            {text: 'Orange', correct:true},
            {text: 'Lucozade', correct:false},
        ],
        message:"Tommy asked DI Moynihan for fizzy Orange",        
    },
    {
        question: "What is the name of the cat killer?",
        answers:[
            {text: 'Dano', correct:false},
            {text: 'Wayne', correct:true},
            {text: 'Ado', correct:false},
            {text: 'Terrence', correct:false},
        ],
        message:"It was Wayne that shot the cat with a machine gun",
    },
    {
        question: "What is the dodgy middle-class professional Andrews job?",
        answers:[
            {text: 'Doctor', correct:false},
            {text: 'Mechanic', correct:false},
            {text: 'Nurse', correct:false},
            {text: 'Dentist', correct:true},
        ],
        message:"Andrew was the dodgy dentist that got caught up in the knocking shop",
    },
    {
        question: 'What catchy saying was Fran best known for?',
        answers:[
            {text: 'Scarlet for ye!', correct:false},
            {text: 'Deadly', correct:false},
            {text: 'Sound pal', correct:false},
            {text: 'Coola Boola', correct:true},
        ],
        message:"Frans best known saying was Coola Boola ",
    },
    {
        question: "What is Nidge's first name?",
        answers:[
            {text: 'Ned', correct:false},
            {text: 'Niall', correct:false},
            {text: 'Nigel', correct:true},
            {text: 'Noel', correct:false},
        ],
        message:"Nidges first name was Nigel",
    },
    {
        question: "Which legendary musician played John Boy's Father?",
        answers:[
            {text: 'Christy Moore', correct:false},
            {text: 'Damien Dempsey', correct:false},
            {text: 'Finbarr Furey', correct:true},
            {text: 'Ronnie Drew', correct:false},
        ],
        message:"It was Finbarr Furey who played John Boys father.",

    },
    {
        question: "What was Frans favourite drink",
        answers:[
            {text: 'Carlsberg', correct:false},
            {text: 'Vodka', correct:false},
            {text: 'Jamesons', correct:false},
            {text: 'Poitin', correct:true},
        ],
        message:"Poitin was Fran's favourite drink",
    },
    {
        question: "Which Boyzone member had a cameo in season 4",
        answers:[
            {text: 'Keith Duffy', correct:true},
            {text: 'Ronan Keating', correct:false},
            {text: 'Shane Lynch', correct:false},
            {text: 'Stephen Gately', correct:false},
        ],
        message:"Keith Duffy was the boyzone meber with the cameo appearance.",
    },
    {
        question: "Who plants git loughmans finger bone in Nidge's bathroom?",
        answers:[
            {text: 'Patrick', correct:false},
            {text: 'Siobhan', correct:true},
            {text: 'Di Moynihan', correct:false},
            {text: 'Tommy', correct:false},
        ],
        message:"Siobhan planted the finger in Nidge's bathroom in season 5.",
    },
    {
        question: "Who is looking out the window as Nidge is being shot in the final scenes?",
        answers:[
            {text: 'Darren', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Wayne', correct:false},
            {text: 'Warren', correct:true},
        ],
        message:"Warren watched as his father was shot dead in the garden.",
    },
    {
        question: "Who knocked frans teeth out?",
        answers:[
            {text: 'Nidge', correct:false},
            {text: 'Tommy', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Noely', correct:true},
        ],
        message:"Noely knocked out frans teeth when they were in prison.",
    },
    {
        question: "Who killed Darren?",
        answers:[
            {text: 'Hughie', correct:false},
            {text: 'Wayne', correct:false},
            {text: 'Lizzie', correct:true},
            {text: 'John Boy', correct:false},
        ],
        message:"Lizzie killed darren as revenge for killing her brother.",
    },
    {
        question: "Who had an affair with Frans wife?",
        answers:[
            {text: 'Nidge', correct:true},
            {text: 'Carl', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Elmo', correct:false},
        ],
        message:"It was Nidge who had the affair with Frans wife.",
    },
    {
        question: "Which organisation was Git Loughman affiliated with?",
        answers:[
            {text: 'UDA', correct:false},
            {text: 'INLA', correct:false},
            {text: 'UVF', correct:false},
            {text: 'IRA', correct:true},
        ],
        message:"Git Loughman was a decorated member of the IRA.",
    },
    {
        question: "Who disposed of Git Loughmans Body?",
        answers:[
            {text: 'Fran', correct:true},
            {text: 'John Boy', correct:false},
            {text: 'Nidge', correct:false},
            {text: 'Wayne', correct:false},
        ],
        message:"It was fran who burned then buried the remains of Git Loughman.",

    },
    {
        question: "Who killed the Dentist Andrew?",
        answers:[
            {text: 'Nidge', correct:false},
            {text: 'Fran', correct:true},
            {text: 'Carl', correct:false},
            {text: 'Ado', correct:false},
        ],
        message:"Fran killed the dentist in a fit of rage without Nidge's consent.",
    },
    {
        question: 'What did Fran keep in his fridge for safe keeping?',
        answers:[
            {text: 'A gun', correct:false},
            {text: 'Money', correct:false},
            {text: 'A wedding ring', correct:false},
            {text: 'Gits finger', correct:true},
        ],
        message:"Fran kept Git Loughmans finger in the fridge as a souvenir. ",
    },
    {
        question: "Who had an affair with Dano Loughmans wife?",
        answers:[
            {text: 'Nidge', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Fran', correct:false},
            {text: 'Tommy', correct:true},
        ],
        message:"Tommy had the affair with Dano Loughmans wife. ",
    },
    {
        question: "Who killed Nidge?",
        answers:[
            {text: 'Patrick', correct:true},
            {text: 'Carl', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Elmo', correct:false},
        ],
        message:"Patrick killed Nidge in retaliation for his son.",
    },
    {
        question: "Who dug up Noely's Mother?",
        answers:[
            {text: 'Nidge', correct:false},
            {text: 'John Boy', correct:false},
            {text: 'Fran', correct:true},
            {text: 'Darren', correct:false},
        ],
        message:"Fran was the one who dug up Noely's Mothers grave.",
    },
    {
        question: "What animals was Fran known to breed?",
        answers:[
            {text: 'Dogs', correct:true},
            {text: 'Cats', correct:false},
            {text: 'Horses', correct:false},
            {text: 'Pigeons', correct:false},
        ],
        message:"Fran was a known fighting dog breeder and trainer.",
    },
    {
        question: "Who made the pipebombs used by Nidge on Frans house?",
        answers:[
            {text: 'Darren', correct:false},
            {text: 'Patrick', correct:true},
            {text: 'Ado', correct:false},
            {text: 'Elmo', correct:false},
        ],
        message:"Partick made the pipe bomb that was used on frans house.",
    },
    {
        question: 'What did nidges runners have printed on the back?',
        answers:[
            {text: 'The Boss', correct:false},
            {text: 'El Chapo', correct:false},
            {text: 'King Kong', correct:false},
            {text: 'King Nidge', correct:true},
        ],
        message:"In the very last episode Trish gave nidge a custom pair of runner with King Nidge printed on the back. ",
    },
    {
        question: "Who gave Tommy the beating that left him brain damaged?",
        answers:[
            {text: 'Patrick', correct:false},
            {text: 'Ado', correct:false},
            {text: 'Fran', correct:false},
            {text: 'Nidge', correct:true},
        ],
        message:"Nidge was the one who beat Tommy for sleeping with Dano's wife. ",
    }

];
let musicQuestions = [
    {
        question: 'Complete the name of this singer: Louis ______________?',
        answers:[
            {text: 'Joe Armstrong', correct:false},
            {text: 'Armstrong', correct:false},
            {text: 'de la Rocha', correct:false},
            {text: 'Tomlinson', correct:true},
        ],
        message: 'Louis Tomlinson was a member of the U.K boy band One Direction',       
    },
    {
        question: 'By Whom was the album "American Gangster" recorded?',
        answers:[
            {text: 'Alicia Keys', correct:false},
            {text: 'Bruce Springsteen', correct:false},
            {text: 'Jay-Z', correct:true},
            {text: 'Lilly Allen', correct:false},
        ],
        message:"American Gangster is the tenth studio album by American rapper Jay-Z.",
    },
    {
        question: "Complete the name of this singer: Elvis ___________?",
        answers:[
            {text: 'Green', correct:false},
            {text: 'Prestley', correct:true},
            {text: 'Tankian', correct:false},
            {text: 'Cash', correct:false},
        ],
        message:"Elvis Prestley is known globally as the King of Rock and Roll.",
    },
    {
        question: "Complete the name of this singer: Demi _____________?",
        answers:[
            {text: 'Hale', correct:false},
            {text: 'Turunen', correct:false},
            {text: 'Lovato', correct:true},
            {text: 'Williams', correct:false},
        ],
        message:"Demi or Demetria Devonne Lovato is an American singer, songwriter, and actor.",
    },
    {
        question: "Bob Marley, is originally from which country or region?",
        answers:[
            {text: 'Jamaica', correct:true},
            {text: 'Cuba', correct:false},
            {text: 'Hawaii', correct:false},
            {text: 'Columbia', correct:false},
        ],
        message:"Bob Marley was a rastafarian who lived in Jamaica.",
    },
    {
        question: '"All I want for Christmas is you" was a hit Christmas song for which female singer?',
        answers:[
            {text: 'Faith Hill', correct:false},
            {text: 'Mariah Carey', correct:true},
            {text: 'Toni Braxton', correct:false},
            {text: 'Jewel', correct:false},
        ],
        message:'Mariah Carey\'s "All I want for Christmas is you" was released in 28 October, 1994',
    },
    {
        question: 'Who sings the song "Rehab"?',
        answers:[
            {text: 'Amy Winehouse', correct:true},
            {text: 'Sheryn Regis', correct:false},
            {text: 'Adele', correct:false},
            {text: 'Imelda May', correct:false},
        ],
        message:"Amy Winehouse sang the song Rehab which was a reflection of her personal life.",

    },
    {
        question: '"Chandelier" was a song by _____________?',
        answers:[
            {text: 'Eddie Vedder', correct:false},
            {text: 'Sia', correct:false},
            {text: 'Sia', correct:true},
            {text: 'Bruno Mars', correct:false},
        ],
        message:"Chandelier was a song by Australian singer Sia.",        
    },
    {
        question: "Complete the name of this singer: Lionel ___________?",
        answers:[
            {text: 'Thicke', correct:false},
            {text: 'Richie', correct:true},
            {text: 'Hendrix', correct:false},
            {text: 'Denver', correct:false},
        ],
        message:'Lionel Richie sang the hit song "hello" which was released in 1983 and is still a popular love song today.',
    },
    {
        question: 'Janet Jackson, starred alongside which famous rapper in the movie "Poetic Justice"?',
        answers:[
            {text: 'Future', correct:false},
            {text: 'Dr.Dre', correct:false},
            {text: 'Jay-Z', correct:false},
            {text: 'Tupac Shakur', correct:true},
        ],
        message:'Janet Jackson and rapper Tupac Shakur starred in the 1993 film "Poetic Justice"',
    },
    {
        question: 'Who recorded the song "hit me baby one more time"?',
        answers:[
            {text: 'TLC', correct:false},
            {text: 'Celine Dion', correct:false},
            {text: 'Shania Twain', correct:false},
            {text: 'Britney Spears', correct:true},
        ],
        message:'The song "hit me baby one more time" was the debut single by American singer Britney Spears.',
    },
    {
        question: "Complete the name of this singer: Bruno _________?",
        answers:[
            {text: 'Kelley', correct:false},
            {text: 'Lancaster', correct:false},
            {text: 'Mars', correct:true},
            {text: 'Van Halen', correct:false},
        ],
        message:"Peter Gene Hernandez (born October 8, 1985),is an American singer better known professionally as Bruno Mars.",
    },
    {
        question: "Complete the name of this singer: Annie __________?",
        answers:[
            {text: 'Lennox', correct:true},
            {text: 'Spears', correct:false},
            {text: 'Collins', correct:false},
            {text: 'Williams', correct:false},
        ],
        message:"Eurythmics were a British pop duo consisting of members Annie Lennox and Dave Stewart.",

    },
    {
        question: "Complete the name of this singer: Alicia _________",
        answers:[
            {text: 'Streisand', correct:false},
            {text: 'Goodrem', correct:false},
            {text: 'Jean Godchaux', correct:false},
            {text: 'Keys', correct:true},
        ],
        message:"Alicia Keys is an American singer, songwriter and actress",
    },
    {
        question: 'Who sings the song "right Round"?',
        answers:[
            {text: 'Flo Rida', correct:true},
            {text: 'Elton John', correct:false},
            {text: 'Noel Collins', correct:false},
            {text: 'Greg Boyner', correct:false},
        ],
        message:'The hit song "Right Round" was released by American rapper Flo Rida.',
    },
    {
        question: '"in da club" was a song by:?',
        answers:[
            {text: 'Janet Jackson', correct:false},
            {text: '50 Cent', correct:true},
            {text: 'Nelly', correct:false},
            {text: 'Drake', correct:false},
        ],
        message:'"in da club" was a song by rapper 50 Cent from the album "Get rich or die tryin".',
    },
    {
        question: "Mariah Carey, was married to which famous american?",
        answers:[
            {text: 'Denzel Washington', correct:false},
            {text: 'Jamie Foxx', correct:false},
            {text: 'Laurence Fishburn', correct:false},
            {text: 'Nick Cannon', correct:true},
        ],
        message:"Mariah Carey was married to Nick Cannon, who is the fater of their twins, Morrocan and Monroe.",
    },
    {
        question: "Complete the name of this singer: Jennifer ___________?",
        answers:[
            {text: 'Garner', correct:false},
            {text: 'Edwards', correct:false},
            {text: 'Carey', correct:false},
            {text: 'Hudson', correct:true},
        ],
        message:"Jennifer Hudson is an American singer, songwriter and actress, who also appeared as a judge on The Voice UK.",
    },
    {
        question: "Complete the name of this singer: Shania ___________?",
        answers:[
            {text: 'Cherry', correct:false},
            {text: 'Orrico', correct:false},
            {text: 'Twain', correct:true},
            {text: 'Kuurmaa', correct:false},
        ],
        message:'Shania Twain is an Canadian country singer,known for her song "that dont impress me much".',
    },
    {
        question: "Complete the name of this singer: Jessica _________?",
        answers:[
            {text: 'Simpson', correct:true},
            {text: 'Fletcher', correct:false},
            {text: 'Biel', correct:false},
            {text: 'Palmer', correct:false},
        ],
        message:"Jessica Simpson is an American singer, and the sister of Ashley Simpson who is also an American Singer.",
    },
    {
        question: "Complete the name of this singer: Bob __________?",
        answers:[
            {text: 'Mars', correct:false},
            {text: 'Ross', correct:false},
            {text: 'Rodriguez', correct:false},
            {text: 'Marley', correct:true},
        ],
        message:"Bob Marley was a legendary rastafarian singer from Jamaica, father of Ziggy Marley.",
    },
    {
        question: 'Who sings "Play Hard"?',
        answers:[
            {text: 'David Guetta', correct:true},
            {text: 'Raul Rekow', correct:false},
            {text: 'James Brown', correct:false},
            {text: 'Frank Zappa', correct:false},
        ],
        message:'"Play Hard" is a song by French DJ and record producer David Guetta featuring vocals from American singers Ne-Yo and Akon.',

    },
    {
        question: "Complete the name of this singer: Johnny ___________?",
        answers:[
            {text: 'Rezner', correct:false},
            {text: 'Cash', correct:true},
            {text: 'Malik', correct:false},
            {text: 'Yorke', correct:false},
        ],
        message:'Johhny Cash is widely known for his hit song "Ring of fire".',
    },
    {
        question: 'Who Sings "Hey Jude"?',
        answers:[
            {text: 'One Direction', correct:false},
            {text: 'The Eagles', correct:false},
            {text: 'The rolling stones', correct:false},
            {text: 'The Beatles', correct:true},
        ],
        message:'"Hey Jude" was a song by the iconic UK band The Beatles',
    },
    {
        question: 'Who sings the song "When I was your man"?',
        answers:[
            {text: 'Daniel Tichenor', correct:false},
            {text: 'Lewis Capaldi', correct:false},
            {text: 'Niall Horan', correct:false},
            {text: 'Bruno Mars', correct:true},
        ],
        message:'"When I Was Your Man" is a song by American singer and songwriter Bruno Mars from his second studio album, Unorthodox Jukebox (2012).',
    },
    {
        question: "Complete the name of this singer: Jon ________?",
        answers:[
            {text: 'Bon Jovi', correct:true},
            {text: 'Ronson', correct:false},
            {text: 'Ray Cyrus', correct:false},
            {text: 'Young', correct:false},
        ],
        message:"John Francis Bongiovi Jr. (born March 2, 1962), known professionally as Jon Bon Jovi, is an American singer, songwriter, guitarist, and actor.",
    },
    {
        question: "Complete the name of this singer: Mariah _________?",
        answers:[
            {text: 'Fischer', correct:false},
            {text: 'Evans', correct:false},
            {text: 'Carey', correct:true},
            {text: 'Smith', correct:false},
        ],
        message:"Mariah Carey is an American singer-songwriter and actress.",
    },
    {
        question: 'Who recorded the album "Dark side of the moon"?',
        answers:[
            {text: 'Pink Floyd', correct:true},
            {text: 'The Osmonds', correct:false},
            {text: 'Elton John', correct:false},
            {text: 'Wings', correct:false},
        ],
        message:"The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records.",
    },
    {
        question: '"Happy" is a song by which American artist?',
        answers:[
            {text: 'Justin Timberlake', correct:false},
            {text: 'Pharrell Williams', correct:true},
            {text: 'Tom Walker', correct:false},
            {text: 'Nina Simone', correct:false},
        ],
        message:'Pharell williams song "Happy" was the signature song of the hit childrens movie "dispicable me".',
    },
    {
        question: 'Complete the name of this singer: Bob __________?',
        answers:[
            {text: 'Dogg', correct:false},
            {text: 'Alpert', correct:false},
            {text: 'Young', correct:false},
            {text: 'Dylan', correct:true},
        ],
        message:"Robert Dylan is an American singer-songwriter, author and visual artist. Often regarded as one of the greatest songwriters of all time.",
    },
    {
        question: "Complete the name of this Singer: Gwen _________?",
        answers:[
            {text: 'Paltrow', correct:false},
            {text: 'Palmer', correct:false},
            {text: 'Stefani', correct:true},
            {text: 'Wilson', correct:false},
        ],
        message:"Gwen Stefani is a co-founder, lead vocalist, and the primary songwriter of the band No Doubt.",
    }

];