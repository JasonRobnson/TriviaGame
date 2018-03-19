'strict'

$('#buttonStart').on('click',function(){
    $('#buttonStart').remove();
    game.loadQuestion();
})
$(document).on('click','.answer-button', function(e){
    game.selectedAnswer(e);
})


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
        counter: 30,
        correct: 0,
        incorrect: 0,
        

        timeCounter: function(){
            game.counter--;
            $('#timerDiv').html(game.counter);
            if(game.counter <= 0){
                console.log("GAME OVER!!");
                game.timeUp();
            }
        },
        loadQuestion: function(){
            timer = setInterval(game.timeCounter,1000);
            $("#questionDiv").html('<h2>' + triviaQuestions[game.currentQuestion].question +"</h2>");
            for (var i=0; i < triviaQuestions[game.currentQuestion].answer.length;i++){
                $("#allbuttons").append('<button class="answer-button" id="button-'+i+'" data-name="'+triviaQuestions[game.currentQuestion].answer[i]+'">'+triviaQuestions[game.currentQuestion].answer[i]+'</button>');
            }
        },
        nextQuestion: function(){
            game.counter = 30;
            $('#timerDiv').html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },
        timeUp: function(){

        },
        reslults: function(){

        },
        selectedAnswer: function(e){
            clearInterval(timer);
            if($(e.target).data("name")==triviaQuestions[game.currentQuestion].correctAnswer){
                game.rightAnswer();
            } else {
                game.wrongAnswer();
            }
        },
        rightAnswer: function(){
            console.log("You got it Right!");
            clearInterval(timer);
            game.correct++;
            $('#allbuttons').html('<h2> You Got it Right!</h2>');
            if(game.currentQuestion==triviaQuestions.length-1){
                setTimeout(game.results,3*1000);
            }
        },
        wrongAnswer: function(){
            console.log("You got it Wrong!");
            clearInterval(timer);
            game.incorrect--;
            $('#allbuttons').html('<h2> You Got it Wrong!</h2>');
            if(game.currentQuestion==triviaQuestions.length-1){
                setTimeout(game.results,3*1000);
            }
        },
        reset: function(){

        },

    };