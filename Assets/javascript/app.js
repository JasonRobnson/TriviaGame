'strict'

$(document).ready(function() {
    startButtonHandler();
});

const trivia = [{
    questions: "This item dominated the Hip-Hop and Emo seen. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ", ],
    correctAnswer: "Sweatbands",
    // image:?????????????????????????,
},
{
    questions: "This item dominated the Hip-Hop and Emo seen. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ", ],
    correctAnswer: "Sweatbands",
    // image:?????????????????????????,
},
];

var triviaQuestion = trivia.questions;
var triviaAnswer = trivia.answer;

function startButtonHandler() {
    $("#buttonStart").html();
    let startButton = $("<button>");
    startButton.addClass("startButton");
    startButton.text("Start");
    $("#buttonStart").append(startButton);
    $("#buttonStart").on('click',function (){
        $(this).hide();
        loadQuestion();
        setTimeout(loadAnswer, (1500));

    })
    // $("#buttonStart").click(function () {
    //     loadQuestion();
    //     setTimeout(loadAnswer, (1500));
    //     // $("#allbuttons").hide();
    //     // startTimer();
    // })
};


function startTimer() {

    setTimeout(function () {
        alert("Start Trivia button has been pushed!");}, 3000);
};

function loadQuestion() {
    $("#questionDiv").text();
    $("#questionDiv").html(trivia[0].questions);
};

function loadAnswer() {

   for ( let x = 0; x < trivia[0].answer.length; x++) {
       let answerButton = $("<button>");
        answerButton.addClass("answerKeys");
        answerButton.attr("data-answerButton", trivia[0].answer[x]);
        answerButton.append(trivia[0].answer[x]);
        $("#allbuttons").append(answerButton);
    }
    // $("#allbuttons").prepend("<button id=\"buttonA\"></button><button id=\"buttonB\"></button><button id=\"buttonC\"></button><button id=\"buttonD\"></button>");
    // // for loop
    // $("#buttonA").text(trivia.answer[0]);
    // $("#buttonB").text(trivia.answer[1]);
    // $("#buttonC").text(trivia.answer[2]);
    // $("#buttonD").text(trivia.answer[3]);
    // // $("#answerDiv").prepend("<button id=\"buttonA\" type=\"button\">" + trivia.answer[0] + "</button><buttonid=\"buttonB\" type=\"button\">" + trivia.answer[1] + "</button><button id=\"buttonC\" type=\"button\">" + trivia.answer[2] + "</button><button id=\"buttonD\" type=\"button\">" + trivia.answer[3] + "</button>");
};

function answerButton() {
    $("#buttonA").click(function () {
    console.log("#buttonA");
    })
};
$("#allbuttons").on('click','.answerKeys',function(){
    $(this).attr("data-answerButton");
    console.log($(this).attr("data-answerButton"));
})



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