'strict'

$(document).ready(function() {
    startButtonHandler();
});

// $(document).on('click','.answerKeys', function(){
//     trivia.clicked();
// })

const trivia = [{
    questions: "This item dominated the Hip-Hop and Emo scene. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ", ],
    correctAnswer: "Sweatbands",
    // image:?????????????????????????,
},
{
    questions: "This item dominated the Hip-Hop and Emo scene. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ", ],
    correctAnswer: "Sweatbands",
    // image:?????????????????????????,
},
];

let triviaQuestion = trivia.questions;
let triviaAnswer = trivia[0].answer;
let triviaCorrect = trivia[0].correctAnswer;
let counter = 5;
let timer;


function startButtonHandler() {
    $("#buttonStart").html();
    let startButton = $("<button>");
    startButton.addClass("startButton");
    startButton.text("Start");
    $("#buttonStart").append(startButton);
    $("#buttonStart").on('click',function (){
        $(this).hide();
        loadQuestion();
        gameTimer();
        loadAnswer();
    })
};


function gameTimer() {
    //  $("#timerDiv").html( counter);
      let timer = setInterval(function() {
            $("#timerDiv").html("<h6>You have " + counter + " seconds reaming...");
            if (counter === 0) {
                timeOver();
            } else {
                counter--;
            }
        },1000);
    };


function timeOver() {
    clearInterval(timer);
    $("#timerDiv").html('<h2>Out of Time!</h2>');

}


function loadQuestion() {
    $("#questionDiv").text();
    $("#questionDiv").html('<h3>' + trivia[0].questions);
    
};

function loadAnswer() {

   for ( let x = 0; x < trivia[0].answer.length; x++) {
       let answerButton = $("<button>");
        answerButton.addClass("answerKeys");
        answerButton.attr("data-answerButton", trivia[0].answer[x]);
        answerButton.append(trivia[0].answer[x]);
        $("#allbuttons").append(answerButton);
    }
};

$("#allbuttons").on('click','.answerKeys',function(){
    $(this).attr("data-answerButton");
    console.log($(this).attr("data-answerButton"));
    console.log(triviaCorrect);
    let x = $(this).attr("data-answerButton");
    console.log(x);
    if (x == triviaCorrect) {
        console.log("You Won!")
    } else {
        console.log("You Lose!")
    }
});

function answerSelection() {
    clearInterval();
    if($(e.targert).data("name")=== triviaCorrect) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
};

function correctAnswer() {
        console.log ("You won!")
};

function wrongAnswer() {
        console.log("You lost!")
};


// var game = {
//     question: ["questions"],
//     currentQuestion:0,
//     timer: 30,
//     correct: 0,
//     incorrect: 0,
//     countdown: function () {
//         game.timer--;
//         $('#timerDiv').html(game.counter);
//         if(game.counter<=0){
//              console.log("Time UP!");
//         }

//     },
//     loadQuestion: function (){

//     },
//     nextQuestion: function(){

//     },
//     timeUp: function(){

//     },
//     result: function(){

//     },
//     clicked: function(){

//     },
//     answeredCorrectly: function (){

//     },
//     answeredIncorrectly: function(){

//     },
//     reset: function(){

//     },

// }


// },{
// question: ,
// answer: [],
// correctAnswer:"Streaky Hair Highlights ",""
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Tall Tees" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Trucker Hats",
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Livestrong Bracelets" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Popped Collar Polos" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Fedoras" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"V-Neck T-shirts" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Shutter Shades" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Throwback Jerseys" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Bootcut Jeans" ,
// image: ??????????????,
// },{
// question: ,
// answer: [],
// correctAnswer:"Emo/Bieber Hair" ,
// image: ??????????????,
// }
// }];

// startTimer()};