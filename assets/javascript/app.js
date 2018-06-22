// global variables
var counter = 0;
var unanswered = 0;
var timer = 30;
var wrongAns = 0;
var rightAns = 0;
var totalQuestions = 3;
// questions and your answers
var questions = [
    {
        "question": "Will Lebron James go to the Lakers?",
        "choices": [true, false],
        "correctAns": "true",
        "image": "assets/images/lebronlakers.jpg"
    },
    {
        "question": "The L.A. Lakers colors are purple and gold.",
        "choices": [true, false],
        "correctAns": "true",
        "images": "assets/images/nbalogo.jpg"
    },
    {
        "question": "The Clippers will it all in 2019.",
        "choices": [true, false],
        "correctAns": "false",
        "images": "assets/images/laclippers.png"
    }
        
];
console.log(questions);
console.log(questions[0]);
console.log(questions[0].question);
$("#questions-container").append("<h1>"+ questions[0].question +"</h1>");


//Generate the questions to show on screen
function pullQuestion() {
    $("#questions-container").html(
        "<p>" + questions[counter].question + "</p>"+
        "<img src="+questions[counter].image+">"+
        "<button class='btn btn-primary' value=" + questions[counter].choice[0] + ">true</button>" +
        "<button class='btn btn-secondary' value=" + questions[counter].choice[0] + ">false</button>" 
    )
}

pullQuestion();


$(document).on("click", ".btn btn-primary", function () {
    if ($(this).val() === questions[counter].correctAns) {
        alert("Correct!");
        counter++;
        if (counter < questions.length) {
            getQuestion();
        } else {
            alert("Good job you got all the questions right! Starting over!");
            counter = 0;
            getQuestion();
        }
    } else {
        alert("Incorrect! Try again!");
    }
});

var timerId = setInterval(function () {
    timer--;
    $("#timer").text(timer);
    if (timer === 0) {
        alert("time up!");
        clearInterval(timerId);
        counter = 0;
        $("#questions-container").hide();
        $("#timer").text("GAME OVER!");
    }
}, 30000);



//“start of the game”

//Click on start.

// timer starts
// $("#start").on("click", function () {
//     console.log("jquery click click!!")

    // var newBtn = $('<button>')
    // console.log('newBTN', newBtn)
    //  newBtn.text('New Button')
    //  console.log(newBtn)
    //  $('#second').apend(newBtn)
// })

//gameplay
//when question is answered counter goes up

// game ends
//end game - something else happens
// correct++
// wrong++
// alert(correct + wrong)

//Add an event listener

//Timer starts to answer questions


//“Game play”

//So, way for the player to answer questions

//How does the game know when the game ends? 
//When the timer ends, or all questions are answered.

//How does the game know what to do after the game ends?

//Calculates total questions answered and number of right and wrong answers

//Popup box or screen display of total end game calculations
