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
// let peppaSelector = document.getElementById('peppa');
// peppaSelector.addEventListener('click', startPeppaGame);

// let loveHateSelector = document.getElementById('love-hate');
// loveHateSelector.addEventListener('click', startLoveHate);

    
let peppaGameOuter = document.getElementById('peppa-game-outer');
let loveGameOuter = document.getElementById('love-game-outer');
let musicGameOuter = document.getElementById('music-game-outer');
/* love maths script */
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


 

/* peppa pig game */


/* love hate game */








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

/* functions for peppa pig game */
function startPeppaGame(){
    

}

/* functions for love/hate game */
function startLoveHate(){
    
    
}
/* functions for music game */
function startMusic(){
    


}



