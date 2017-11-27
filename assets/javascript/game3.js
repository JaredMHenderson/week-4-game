$('document').ready(function(){

//Sets up variable for crystals, this will change to a random number later
    var crystalOneValue     = 0;
    var crystalTwoValue     = 0;
    var crystalThreeValue   = 0;
    var crystalFourValue    = 0;


// Win and loss counters


    var winCounter  = 0;
    var lossCounter = 0;

    var targetNumber = 0;
    var currentScore = 0;




//Functions

//Sets the tartget number to a random number between 30 and 70
    var getRandom = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


//At start of game sets the target num and crytal values to random nums
//also updates the html.

function startGame(){

    currentScore = 0;

    $('.currentScore').html(currentScore);

    targetNumber = getRandom(19, 120);

    //Updates the html to show the target number
    $('#numberToMatch').html(targetNumber);


    crystalOneValue = getRandom(1, 12);
    crystalTwoValue = getRandom(1, 12);
    crystalThreeValue = getRandom(1, 12);
    crystalFourValue = getRandom(1, 12);

    // test and debug

    console.log('--------------------------');
    console.log('One: ' + crystalOneValue + "| Two: " + crystalTwoValue + "| Three: " + crystalThreeValue + "|Four: " + crystalFourValue);
    console.log('--------------------------');





};


var checkWin = function()
{
    if (currentScore > targetNumber) {
        alert("You Lost");
        lossCounter++;
        $('#lossCounter').html(lossCounter);
        startGame();
    }

    else if (currentScore === targetNumber) {
        alert("You Win!");
        winCounter++;
        $('#winCounter').html(lossCounter);
        startGame();

    }

};



startGame();



// Register clicks on crystal icons, adds value to current score, updates html, and runs check win function.

$('.crystalOne').click(function(){
    currentScore += crystalOneValue;
    $('.currentScore').html(currentScore);

    console.log(currentScore);
    checkWin();
    // alert("one");
})

$('.crystalTwo').click(function(){
    currentScore += crystalTwoValue;
    $('.currentScore').html(currentScore);

    console.log(currentScore);
    checkWin();
    // alert("two");
})

$('.crystalThree').click(function(){
    currentScore += crystalThreeValue;
    $('.currentScore').html(currentScore);

    console.log(currentScore);
    checkWin();
    // alert("Three");
})

$('.crystalFour').click(function(){
    currentScore += crystalFourValue;
    $('.currentScore').html(currentScore);

    console.log(currentScore);
    checkWin();
    // alert("four");
})


});











