// function play(){
//     // document.getElementById('home').style.display = 'none';

//     document.getElementById('home').classList.add('hidden');

//     document.getElementById('play').classList.remove('hidden');
// }


function play(){
    hideElementById('home');
    showElementById('play');
    continusGame();
}


function continusGame(){
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    const currentAlphabet =document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    setBgColorById(alphabet);
}