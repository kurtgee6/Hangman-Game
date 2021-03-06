var guessDisplay = []; // Holds the characters the user inputs. 
var lettersGuessed = 0;
var guessLeft = 0; // Setting it at 10 to show on the page once the game has started
var characters = [["Avatar Aang", "assets/images/aang.jpg"],
                  ["Sokka", "assets/images/sokka.jpg"],
                  ["Firelord Ozai", "assets/images/FireLord-Ozai.jpg"],
                  ["Toph", "assets/images/Toph_Beifong.png"],
                  ["Katara", "assets/images/katara.jpg"],
                  ["Zuko", "assets/images/zuko.jpg"],
                  ["Appa", "assets/images/Appa.jpg"],
                  ["Momo", "assets/images/momo.jpg"],
                  ["Azula", "assets/images/Azula.jpg"],
                  ["Mai", "assets/images/Mai.png "],
                  ["Avatar Roku", "assets/images/Avatar_Roku.jpg "],
                  ["Uncle Iroh", "assets/images/uncle-iroh.jpg"],
                  ["Ty Lee", "assets/images/ty_lee.jpg"],
                  ["King Bumi", "assets/images/King-Bumi.jpg"],
                  ["Suki", "assets/images/Suki.png"],
                  ["Gyatso", "assets/images/Gyatso.png"],
                  ["Master Pakku", "assets/images/Pakku.png"],
                  ["Long Feng", "assets/images/Long-Feng.jpeg"],
                  ["The Boulder", "assets/images/The_Boulder.png"],
                  ["Joo Dee", "assets/images/Joo_Dee.png"],
                  ["Bato", "assets/images/Bato.png"],
                  ["Pipsqueak", "assets/images/pipsqueak.png"],
                  ["Ursa", "assets/images/ursa.jpg"],
                  ["Master Piandao", "assets/images/Piandao.png"],
                  ["Xin Fu", "assets/images/Xin_Fu.png"],
                  ["Princess Yue", "assets/images/Princess-Yue.jpg"],
                  ["Wan Shi Tong", "assets/images/Wan_Shi_Tong.png"],
                  ["Hei Bai", "assets/images/Hei_Bai.png"],
                  ["Bosco", "assets/images/Bosco.png"],
                  ["Jet", "assets/images/Jet.png"],
                  ["Zhao", "assets/images/Zhao.png"],
                  ["Cabbage Man", "assets/images/Cabbage_man.png"],
                  ["Firelord Sozin", "assets/images/sozin.jpg"],
                  ["Nyla", "assets/images/nyla.png"],
                  ["Fang", "assets/images/Fang.png"],
                  ["Earth Nation", "assets/images/earth.jpg"],
                  ["Water Nation", "assets/images/water.png"],
                  ["Fire Nation Palace", "assets/images/Fire-Nation-Palace.png"],
                  ["Air Nomads", "assets/images/air.png"],
                  ["Ba Sing Se", "assets/images/Ba-Sing-Se.png"],
                  ["Fire Nation", "assets/images/fire.jpg"],
                  ["Hama House", "assets/images/Hama's_inn.png"],
                  ["Omashu", "assets/images/Omashu.jpg"],
                  ["Air Nomad Caves", "assets/images/Air_Nomad_caves.png"],
                  ["Great Divide", "assets/images/Great_Divide.png"],
                  ["Serpents Pass", "assets/images/Serpents-Pass.png"],
                  ["Spirit World", "assets/images/Spirit_World.png"],
                  ["Foggy Swamp", "assets/images/Foggy-swamp.jpg "],
                  ["Ember Island", "assets/images/Ember_Island.png"],
                  ["Kyoshi Island", "assets/images/Kyoshi_Island.png"],
                  ["Boiling Rock", "assets/images/Boiling_Rock.png"]];  //function to randomize the displayed image and character on website // Tracks characters names with their respected images 
var globalWord;
var globalImage;
var wordSection = "";
var isGameOver = false;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize (){
  var ran = characters[getRandomIntInclusive(0, characters.length - 1)];
  globalWord = ran[0]; 
  globalImage = ran[1];

  guessLeft = globalWord.length;
  document.getElementById("guessLeft").innerHTML = "Numbers of Guesses Left : " + guessLeft;

  return [globalWord, globalImage];
  
}

function outputImage () {
  document.getElementById("images").src = randomize ()[1];
}

outputImage();

document.getElementById("wordSection").onkeyup = function(event) {
  if (isGameOver) {
    return;
  }
  if (event.which === 8 ){ // Backspace
    event.preventDefault();
    if (wordSection !== "") {
      guessLeft++;
      wordSection = document.getElementById("wordSection").value;
      document.getElementById("guessLeft").innerHTML = "Numbers of Guesses Left : " + guessLeft;
    }
    return;

  } else if (event.which === 13) { // Enter
    checkWord();
    newRound ();
    return;
  } 

  wordSection = document.getElementById("wordSection").value;
  lettersGuessed++;
  guessLeft--;

  document.getElementById("wordSection").value = wordSection;
  document.getElementById("lettersGuess").innerHTML = "Letters Guessed : " + lettersGuessed;
  document.getElementById('guessLeft').innerHTML = "Numbers of Guesses Left : " + guessLeft;

  checkWord ();

};

function gameOver () {
  document.getElementById("wordSection").value = "Game Over";
  document.getElementById("wordSection").readOnly = "readOnly";
  setTimeout(function() {
    newRound();
  }, 3000 );
}

function newRound () {
  outputImage();
  lettersGuessed = 0;
  wordSection = "";
  isGameOver = false;
  document.getElementById("wordSection").value = wordSection;
  document.getElementById("guessLeft").innerHTML = "Numbers of Guesses Left : " + guessLeft;
  document.getElementById("lettersGuess").innerHTML = "Letters Guessed : " + lettersGuessed;
  document.getElementById("wordSection").readOnly = false;
}

function checkWord () {
  if (wordSection.toLowerCase() === globalWord.toLowerCase()) {
    document.getElementById("wordSection").value = "Good Job";
    setTimeout(function() {
      newRound();
    }, 3000);
    return;
  } 

  if (guessLeft === 0){
    isGameOver = true;
    gameOver();
  }
}






