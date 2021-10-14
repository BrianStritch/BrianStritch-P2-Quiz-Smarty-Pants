

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
  
  function exitGame(){
    outerZone.classList.remove('hide');
    selectionScreen.classList.add('hide');
    peppaGameEnd.classList.add('hide');
    peppaGameOuter.classList.add('hide');
    loveGameEnd.classList.add('hide');
    loveGameOuter.classList.add('hide');
    // musicGameEnd.classList.add('hide');
    // musicGameOuter.classList.add('hide');

}








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

let peppaGameEnd = document.getElementById('peppa-end-section');

let pepBtn = document.getElementById('answerButtonsPep')
/* functions for peppa pig game */

testing these functions in new format **************************************************************************


// function startGame(){    
//     startButtonPeppa.classList.add('hide');
//     shuffledQuestions = shuffle(peppaQuestions);    
//     currentQuestionIndex = 0;
//     setNextQuestion();
// }
// function nextButton(){
//     showAnswerButtons();
//     currentQuestionIndex++;
//     setNextQuestion();
// }
// function setNextQuestion(){    
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// }
// function showQuestion(question){
//     pepQuestion.innerText = question.question;
//     message = question.message;       
//     question.answers.forEach(answer => {
//         let button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('pep-btn');            
//         if (answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer);
//         answerButtonsElement.appendChild(button)
//     });
// }
// function resetState(){    
//     nextButtonPeppa.classList.add('hide');
//     while(answerButtonsElement.firstChild){
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }
// function selectAnswer(e){
//     let selectedButton = e.target;    
//     let correct = selectedButton.dataset.correct;
//     setStatusClass(selectedButton, correct);
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if(usedQuestions.length < 9){  
//         nextButtonPeppa.classList.remove('hide');
//         usedQuestions.push('1');
//     } else{
//         peppaGameEnd.classList.remove('hide');
//         peppaGameOuter.classList.add('hide');
//         usedQuestions = [];
//         endScoreMessage();
//     }
//     if(selectedButton = correct){
//         setTimeout(hideAnswerButtons , 500);        
//         incrementCorrectScore(); 
//         pepQuestion.innerText = message; 
            

//     } else {        
//         incrementIncorrectScore(); 
//         setTimeout(hideAnswerButtons , 500);         
//         pepQuestion.innerText = message;              
//     }
// }
function hideAnswerButtons(){
    // let pepBtn = document.getElementById('answerButtonsPep')
    pepBtn.classList.add('hide');
}
function showAnswerButtons(){
    // let pepBtn = document.getElementById('answerButtonsPep')
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



new question format *************************************************************************

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'peppa-pig'){
                peppaGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startNewGame('peppa-game');

            } else if (this.getAttribute('data-type') === 'love-hate'){
                loveGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startNewGame('love-game');
            } else if (this.getAttribute('data-type') === 'music-quiz'){
                musicGameOuter.classList.remove('hide');
                selectionScreen.classList.add('hide');
                startNewGame('music-game');
                }
        })
    }   
})

let gameTypeSelected;
let selectedQuestionArea;


function startNewGame(x){
    if(x === 'peppa-game'){
        startButtonPeppa.classList.add('hide');
        shuffledQuestions = shuffle(peppaQuestions);
        currentQuestionIndex = 0;
        setNextQuestion('peppa');
        gameTypeSelected = 'Peppa';
        selectedQuestionArea = pepQuestion;
    } else if(x === 'love-game'){
        startButtonPeppa.classList.add('hide');
        shuffledQuestions = shuffle(loveQuestions);
        currentQuestionIndex = 0;
        setNextQuestion('love');
        gameTypeSelected = 'love';
        selectedQuestionArea = loveQuestion;
    } else if(x === 'music-game'){
        startButtonPeppa.classList.add('hide');
        shuffledQuestions = shuffle(musicQuestions);
        currentQuestionIndex = 0;
        setNextQuestion('music');
        gameTypeSelected = 'music';
        selectedQuestionArea = musicQuestion;
    } else {
        console.log('unknown game type selected')
    }

}

function setNextQuestion(x){    
    resetState(x)
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){    
    selectedQuestionArea.innerText = question.question;
    message = question.message;       
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
               
        // if statement to set dataset to button to correct          
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        // if statement to add event listener and append button to document
        if (gameTypeSelected === 'peppa'){            
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button) 
        } else if(gameTypeSelected === 'love'){            
            button.addEventListener('click', selectAnswer);
            answerButtonsLove.appendChild(button)        
        } else if(gameTypeSelected === 'music'){            
            button.addEventListener('click', selectAnswer);
            answerButtonsMusic.appendChild(button)  
        }
    }); 
}
function nextButton(x){                      // need to set the parameter or arguement in this line in other functions
    showAnswerButtons(x);
    currentQuestionIndex++;
    setNextQuestion(x);          
}
function resetState(x){
    if(x === 'peppa'){
        nextButtonPeppa.classList.add('hide');
        while(answerButtonsElement.firstChild){
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }    
    } else if(x === 'love'){
        loveNextButton.classList.add('hide');
        while(answerButtonsLove.firstChild){
            answerButtonsLove.removeChild(answerButtonsLove.firstChild)
        }
    } else if(x === 'music'){
        musicNextButton.classList.add('hide');
        while(answerButtonsLove.firstChild){
            answerButtonsMusic.removeChild(answerButtonsMusic.firstChild)
        }
    }    
}
function selectAnswer(e){
    let selectedButton = e.target;    
    let correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if(usedQuestions.length < 9){ 
        if (gameTypeSelected === 'peppa'){
            nextButtonPeppa.classList.remove('hide');    
        } else if(gameTypeSelected === 'love'){
            loveNextButton.classList.remove('hide');                    
        } else if(gameTypeSelected === 'music'){
            musicNextButton.classList.remove('hide'); 
        };        
        usedQuestions.push('1');
    } else{
        if (gameTypeSelected === 'peppa'){
            peppaGameEnd.classList.remove('hide');
            peppaGameOuter.classList.add('hide');    
        } else if(gameTypeSelected === 'love'){
            loveGameEnd.classList.remove('hide');
            loveGameOuter.classList.add('hide');                    
        } else if(gameTypeSelected === 'music'){
            musicGameEnd.classList.remove('hide');
            musicGameOuter.classList.add('hide');             
        };        
        usedQuestions = [];
        endScoreMessage();
    }
    if(selectedButton = correct){
        selectedQuestionArea.button.forEach(button => {
            let btn = document.getElementsByClassName('answer-btn');    
            btn.removeEventListener('click', selectLoveAnswer);
        }); 
        setTimeout(hideAnswerButtons , 500);        
        incrementCorrectScore();        
        selectedQuestion.innerText = message;         
    } else {
        selectedQuestionArea.button.forEach(button => {
            let btn = document.getElementsByClassName('answer-btn');    
            btn.removeEventListener('click', selectLoveAnswer);
        });        
        incrementIncorrectScore(); 
        setTimeout(hideAnswerButtons , 500);         
        selectedQuestion.innerText = message;              
    }
}
function hideAnswerButtons(){
    if(gameTypeSelected === 'peppa'){
       answerButtonsPeppa.classList.add('hide'); 
    } else if(gameTypeSelected === 'love'){
        answerButtonsLove.classList.add('hide'); 
    } else if(gameTypeSelected === 'music'){
        answerButtonsMusic.classList.add('hide'); 
    }    
}
function showAnswerButtons(){
    // let pepBtn = document.getElementById('answerButtonsPep')
    if(gameTypeSelected === 'peppa'){
        answerButtonsPeppa.classList.remove('hide'); 
     } else if(gameTypeSelected === 'love'){
         answerButtonsLove.classList.remove('hide'); 
     } else if(gameTypeSelected === 'music'){
         answerButtonsMusic.classList.remove('hide'); 
     }  
}
 






