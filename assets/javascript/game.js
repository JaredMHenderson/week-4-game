$('document').ready(function(){


    var crystalOneNumOptions = [13,3,5,7,9];
    var crystalTwoNumOptions = [2,4,6,8,10];
    var crystalThreeNumOptions = [11,3,4,5];
    var crystalFourNumOptions = [4,13,8,15];

    var crystalOneIncrement = crystalOneNumOptions[Math.round(Math.random())];
    var crystalTwoIncrement = crystalTwoNumOptions[Math.round(Math.random())];
    var crystalThreeIncrement = crystalThreeNumOptions[Math.round(Math.random())];
    var crystalFourIncrement = crystalFourNumOptions[Math.round(Math.random())];

    var counter = 0;
    var winCounter = 0;
    var lossCounter = 0;


    //Sets the tartget number to a random number between 30 and 70
    var targetNumber = Math.floor((Math.random() * 40) + 30);



function startGame(){
    //Updates the html to show the target number
    $('#numberToMatch').html(targetNumber);


    // Registers when crystal one is clicked and adds that number to the current score
    $('.crystalOne').click(function(){
        counter += crystalOneIncrement;

        $('.currentScore').html(counter);
        console.log(counter);

    });

    $('.crystalTwo').click(function(){
        counter += crystalTwoIncrement;

        $('.currentScore').html(counter);
        console.log(counter);
    });

    $('.crystalThree').click(function(){
        counter += crystalThreeIncrement;

        $('.currentScore').html(counter);
        console.log(counter);
    });

    $('.crystalFour').click(function(){
        counter += crystalFourIncrement;

        $('.currentScore').html(counter);
        console.log(counter);


  });





};


// function roundComplete() {

    if (counter === targetNumber) {
            winCcounter ++;
            $('winCounter').html(winCounter);
            startGame();
        }
        else if (counter >= targetNumber) {
            lossCounter++;
            $('lossCounter').html(lossCounter);
            startGame();

    }

// }

startGame();
// roundComplete();



});











