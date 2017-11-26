//Global Variables
//------------------------------------


//Crystal Variables
//------------------------------------

var crystals = {
    one:
    {
        name: "One",
        value: 0
    },

    two:
    {
        name: "Two",
        value: 0
    },

    three:
    {
        name: "Three",
        value: 0
    },
    four:
    {
        name: "Four",
        value: 0
    }
};


//Score Counters
var currentScore    = 0;
var targetScore     = 0;


//Wins and Losses counters

var winCount        = 0;
var lossCount       = 0;


//Functions
//------------------------------------

//Function for creating random numbers


var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var startGame = function () {
    //Reset Current Score

    currentScore = 0;


    //Resest Target Score

    targetScore = getRandom(19, 120);


    //Set different values for each crystal between 1 and 12

    crystals.one.value       = getRandom(1, 12);
    crystals.two.value       = getRandom(1, 12);
    crystals.three.value     = getRandom(1, 12);
    crystals.four.value      = getRandom(1, 12);


    //change html to reflect changes
    $('#numberToMatch').html(targetScore);
    $('.currentScore').html(currentScore);




    // Test and Debug


console.log('_________________');

console.log('Target Score ' + targetScore);
console.log('One: ' + crystals.one.value + " | Two: " + crystals.two.value + " | Three: " + crystals.three.value + " | Four: " + crystals.four.value );

console.log('_________________');
//Main Process
//------------------------------------



}

//Responds to clicks on crystals

var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    //Update html

    $(".currentScore").html(currentScore);

    //Test
    console.log('Your score ' + currentScore);

    checkWin();


}

// Checks if player wins or loses the game

var checkWin = function() {

    if (currentScore > targetScore) {
        alert("You Lost");
        lossCount++;
        $("#lossCounter").html(lossCount);
        startGame();

    }

    else if (currentScore === targetScore) {
        alert("You Win");
        winCount++;
        $("#winCounter").html(winCount);
        startGame();

    }


}


startGame();


$('.crystalOne').click(function(){
    addValues(crystals.one);
    // alert("Test");
});

$('.crystalTwo').click(function(){
    addValues(crystals.two);
    // alert("Test");
});

$('.crystalThree').click(function(){
    addValues(crystals.three);
    // alert("Test");
});

$('.crystalFour').click(function(){
    addValues(crystals.four);
    // alert("Test");
});

