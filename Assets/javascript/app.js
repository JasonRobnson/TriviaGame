'strict'

// let triviaObj = {
//     triviaKey: [["Question1","Answers1", "Gif1"], ["Question2", "Answer2", "Gif2"], ["Question3", "Answer3", "Gif3"]],
//     displayQuest: ,
//     startPage: ,
//     correctAnswer: ,
//     wrongAnswer: ,
//     nextQuestion: ,
//     timeoutTimer:  function timeOut() {
//         noCanvas() ;
//         let write = document.getElementById("timerDiv");
//         timeDiv.html("this is where the timer will go!")


//     },
//     finalScreen: .

// };

let write = document.getElementById("timerDiv");
let timeoutID;

// function timeOut() {
//     if ($("buttonStart").on("click")); {
//     alert("start button has been clicked");
//     }
//     // timeoutID = window.setTimeout(5000);
//     // timerDiv.innerHTML = ("<b>this is where the timer will go!</b>");
// };

buttonStart = getElementById("#buttonStart")

$(buttonStart).click(function() {
    timeoutID = window.setTimeout(5000);
    if(!clicked){
        alert("start button has been clicked!");
    }
});

