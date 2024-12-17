// function play(){
//     // document.getElementById('home').style.display = 'none';

//     document.getElementById('home').classList.add('hidden');

//     document.getElementById('play').classList.remove('hidden');
// }


function play(){
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play');

    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);

    continusGame();
}


function continusGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabet =document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBgColorById(alphabet);
}


document.addEventListener('keyup', function(event){
    const playerKeyPressed = event.key;

    // stop game 
    if (playerKeyPressed = 'Escape') {
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetTarget = currentAlphabet.innerText;

    if (playerKeyPressed === currentAlphabetTarget) {

        const score = getTextElementValueById('score');
        const NewScore = score + 1;
        setTextElementValueById('score', NewScore);


// -----------non function useing proseses--------------------
        // const score = document.getElementById('score');
        // const scoreText = score.innerText;
        // const scoreNumber = parseInt(scoreText);
        
        // const NewScore = scoreNumber + 1;
        // score.innerText = NewScore;

        removeBgColorById(playerKeyPressed);
        continusGame();
    } else {

        const life = getTextElementValueById('life');
        const Newlife = life - 1;
        setTextElementValueById('life', Newlife);

        if (Newlife === 0) {
            gameOver();
        }
// -----------non function useing proseses--------------------
        // const life = document.getElementById('life');
        // const lifeText = life.innerText;
        // const lifeNumber = parseInt(lifeText);
        
        // const Newlife = lifeNumber - 1;
        // life.innerText = Newlife;
    }
})


function gameOver(){
    hideElementById('play');
    // showElementById('score');
    showElementById('final-score');

    const lastScore = document.getElementById('score').innerText;
    // console.log(lastScore.innerText);
    setTextElementValueById('game-score', lastScore);


    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBgColorById(currentAlphabet);
}