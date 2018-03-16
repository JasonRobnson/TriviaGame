'strict'
const trivia = {
    questions: "This item dominated the Hip-Hop and Emo seen. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ",],
    correctAnswer:"Sweatbands", 
    // image:?????????????????????????,
};

var triviaQuestion = trivia.questions;
var triviaAnswer = trivia.answer;

function startButtonHandler() {
$("#buttonStart").click(function() {
    loadQuestion();
    setTimeout(loadAnswer,(2000));
    // startTimer();
})
};


function startTimer() {
    
    setTimeout(function(){ alert("Start Trivia button has been pushed!"); }, 300);
};
function loadQuestion (){
     $("#questionDiv").text();
$("#questionDiv").html(triviaQuestion);
};

function loadAnswer(){
    $("#answerDiv").text();
    $("#answerDiv").prepend("<button type=\"button\">"+ trivia.answer[0] + "</button><button type=\"button\">" +  trivia.answer[1] + "</button><button type=\"button\">"+ trivia.answer[2] + "</button><button type=\"button\">" +  trivia.answer[3] + "</button>"); 

    
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
