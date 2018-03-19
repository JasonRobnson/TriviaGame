'strict'

// $(document).on('click','.answerKeys', function(){
//     trivia.clicked();
// })



let triviaQuestions = [{
    question: "This item dominated the Hip-Hop and Emo scene. It could be found at your local mall, but now relegated to your local sports store?",
    answer: ["Cartiers  ", "Timberlands ", "Flannel Jackets ", "Sweatbands  ", ],
    correctAnswer: "Sweatbands",
    image: "./Assets/Images/headBands.jpg",
    },{
    question: "These wearable items were cheap, colorful, and fit with any fashion style.",
    answer: ["Plastic Watches", "Drawstring Backpack", "Blank Sweatshirts", "Grills", ],
    correctAnswer: "Plastic Watches",
    image: "./Assets/Images/plasticWatches.jpg",
    },{
    question: "Which hairstyle was introduce during the 2000's by soccer God David Beckham?",
    answer: ["Mullet", "Bowl Cut", "Faux Hawk", "Buzz Cut",],
    correctAnswer:"Faux Hawk",
    image:"./Assets/Images/fauxHawk.jpg",
    },{
    question: "This 2000's trend was rocked by the likes of Diddy, Kanye, and others while poppin bottles of bub." ,
    answer: ["French Cuffs", "Gold Grills", "Popped Collars", "Diamond Rolexes", ],
    correctAnswer:"Popped Collars" ,
    image: "./Assets/Images/poppedCollar.jpg",
    },{
    question:"This clothing trend during the 2000's decayed to a dead product.",
    answer: ["Blank Sweatshirts", "Organic Clothing","Snorkel Jackets", "Waxed Cotton",],
    correctAnswer:"Organic Clothing",
    image: "./Assets/Images/OrganicClothing.jpg",
    },{
    question:"This headgear was once a symbol of class during the 40's and '50's, but celebs like Justin Timberlake downgraded its flare.",
    answer: ["Fedoras", "Stetsons", "Top-hats","Skullies",],
    correctAnswer:"Fedora",
    image: "./Assets/Images/Fedora.jpg",
    },{
    question:"RUN DMC used these to break down coliseum doors, but reappeared in the 2000's but now these joints not colelct dust in your closet.",
    answer: ["Kango Hats","Patent Leater Shoes",  "Snake-skin glasses", "Gold Ropes",],
    correctAnswer:"Patent leather shoes" ,
    image: "./Assets/Images/PantentLeather.jpg",
    },{
    question:"This fashion product broke the bank during the 2000's often costing $300 bucks for a pair" ,
    answer: ["Denim Jeans", "Red Bottoms", "Saddle Boots","Aviator Sunglasses"],
    correctAnswer:"Fedoras" ,
    image: "./Assets/Images/Denim.jpg",
    },{
    question: "This 2000's fashion trend kept your pants safe from high waters.",
    answer: ["Loafers", "Cuffed Pants","Jean Cutoffs","Air Force 1's", ],
    correctAnswer:"V-Neck T-shirts" ,
    image: "./Assets/Images/airForce1.jpg",
    }];


    let game = {
         triviaQuestions: triviaQuestions,
         currentQuestion: 0,
         counter: 5,
         correct: 0,
         incorrect: 0,

    startButton: function startButtonHandler() {
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
    },
    gameTimer: function gameTimer() {
        //  $("#timerDiv").html( counter);
          let timer = setInterval(function() {
                $("#timerDiv").html("<h6>You have " + counter + " seconds reaming...");
                if (counter === 0) {
                    // timeOver();
                } else {
                    counter--;
                }
            },1000);
        },
    timeOver: function timeOver() {
    //     $("#timerDiv").html('<h2>Sorry! You are out of time!</h2>');
    //     clearInterval(timer);
    },
    loadQuestion: function loadQuestion() {
        counter = setInterval(game.gameTimer,1000);    
        $("#questionDiv").html('<h3>' + triviaQuestions[game.currentQuestion].question + '</h3>');
        // for(let i = 0; i <question[game.currentQuestion].answer.Length; i++)
    },
    loadAnswer: function loadAnswer() {
        for ( let x = 0; x < triviaQuestions[game.currentQuestion].answer.length; x++) {
       let answerButton = $("<button>");
       answerButton.addClass("answerKeys");
       answerButton.attr("data-answerButton", triviaQuestions[game.currentQuestion].answer[x]);
       answerButton.append(triviaQuestions[game.currentQuestion].answer[x]);
       $("#allbuttons").append(answerButton);
     }
    }, 
    answerSelection: function answerSelection() {
        clearInterval();
        if($(e.targert).data("name")=== triviaCorrect) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    },
    correctAnswer: function correctAnswer() {
        console.log ("You won!")
    },
    wrongAnswer: function wrongAnswer() {
        console.log("You lost!")
    },
    results: function results() {

    },  
    correctTally: function() {

    },
    incorrectTally: function(){

    },
    reset: function() {

    },
};

$(document).ready(function() {
    game.loadQuestion();
    game.loadAnswer();
});


// $("#allbuttons").on('click','.answerKeys',function(){
//     $(this).attr("data-answerButton");
//     console.log($(this).attr("data-answerButton"));
//     console.log(triviaCorrect);
//     let x = $(this).attr("data-answerButton");
//     console.log(x);
//     if (x == triviaCorrect) {
//         console.log("You Won!")
//     } else {
//         console.log("You Lose!")
//     }
// });

