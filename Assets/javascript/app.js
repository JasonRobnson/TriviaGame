'strict'
const trivia = {
    questions: "This item dominated the Hip-Hop and Emo seen. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers", "Timberlands", "Red Black Lumber Jacks", "Sweatbands",],
    correctAnswer:"Sweatbands", 
    // image:?????????????????????????,
};

var x = trivia.questions;
var y = trivia.answer;

function startButtonHandler() {
$("#buttonStart").click(function() {
    startTimer();
    loadQuestion();
    loadAnswer();
    console.log(x);
 
})
};


function startTimer() {
    $("#buttonStart").hide();
    setTimeout(function(){ alert("Hello"); }, 3000);
};
function loadQuestion (){
    document.getElementById("#questionDiv");
    $("#questionDiv").append(x);
};

function loadAnswer(){
    document.getElementById("#answerDiv");
    $("#answerDiv").append(y);
};
startButtonHandler();


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
