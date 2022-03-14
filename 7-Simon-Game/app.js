// Listen for "A" click to start game
// Show Level -> tamanho do array
// Show Game Over

// 

let sequence = []
let sequenceUser = []

let level = 0
let started = false


$(document).keydown(function (e) {

    if (!started) {
        addValue()
        started = true
    }
})

function checkAnswer(currentLevel) {
    if (sequenceUser[currentLevel] === sequence[currentLevel]) {

        if (sequenceUser.length === sequence.length) {
            setTimeout(function () {
                addValue()
            }, 1000)
        }

    } else {

        var audio = new Audio('sounds/wrong.mp3');
        audio.play()
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startAgain()

    }
}



function addValue() {
    sequenceUser = []
    level++

    //Change title
    $("#level-title").text("Level " + level);
    // Create Random number
    let randomNext = Math.floor(Math.random() * $(".btn").length)

    // Match number to button id
    let nextValue = $(".btn")[randomNext].id
    sequence.push(nextValue)

    // Next Value Animation
    // Add css class
    $('#' + sequence[sequence.length - 1]).addClass("pressed")

    // Play Sound
    var audio = new Audio('sounds/' + (sequence[sequence.length - 1]) + '.mp3');
    audio.play()

    // Remove css class
    setTimeout(function () {
        $(".btn").removeClass("pressed")
    }, 500)

}


function startAgain() {
    level = 0
    sequence = []
    started = false

}

let clickCount = 0
// Listener for click
$(".btn").click(function (e) {

    // Pressed Value animation
    //Add CSS Class 
    $(this).addClass("pressed")

    // Play Sound
    var audio = new Audio('sounds/' + this.id + '.mp3');
    audio.play()

    // Remove css class
    setTimeout(function () {
        $(".btn").removeClass("pressed")
    }, 500)
    sequenceUser.push(this.id)

    checkAnswer(sequenceUser.length - 1)

})



