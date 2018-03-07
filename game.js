//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
// $(".right1").hide();
// $(".wrong1").hide();
// $(".right2").hide();
// $(".wrong2").hide();
// $(".right3").hide();
// $(".wrong3").hide();
// $(".right4").hide();
// $(".wrong4").hide();
// $(".right5").hide();
// $(".wrong5").hide();
//sets my needed variables
var intervalId;
var time = 15;
var rightAnswers = 0;
var wrongAnswers = 0;
var timerOn = false;
var randomQuestion;
var chosenQuestion = {};
var totalQuestions = 0;
var questions = [{
    question: "How do crickets hear?",
     answer1:{answer: "Through their wings",
        value: "Incorrect"},
     answer2: {answer: "Through their belly",
        value: "Incorrect"},
     answer3: {answer: "Through their knees",
        value: "Correct"},
     answer4: {answer: "Through their tongue",
        value: "Incorrect"}
    },

     {
     question: "Which American city invented plastic vomit?",
     answer1: {answer: "Chicago",
        value: "Correct"},
     answer2: {answer: "Detroit",
        value: "Incorrect"},
     answer3: {answer: "Columbus",
        value: "Incorrect"},
     answer4: {answer: "Baltimore",
        value: "Incorrect"},
     },

     {
     question: "In Ben Hur, which modern thing can be seen during the chariot scene?",
     answer1: {answer: "A waitress",
        value: "Incorrect"},
     answer2: {answer: "A car",
        value: "Correct"},
     answer3: {answer: "A postbox",
        value: "Incorrect"},
     answer4: {answer: "A street lamp",
        value: "Incorrect"},
    },

     {
     question: "What was Karl Marxs favorite color?",
     answer1: {answer: "Brown",
        value: "Incorrect"},
     answer2: {answer: "Blue",
        value: "Incorrect"},
     answer3: {answer: "Red",
        value: "Correct"},
     answer4: {answer: "Purple",
        value: "Incorrect"},
    },

     {
     question: "What is the best way to stop crying while peeling onions?",
     answer1: {answer: "Lick almonds",
         value: "Incorrect"},
     answer2: {answer: "Suck lemons",
         value: "Correct"},
     answer3: {answer: "Eat cheese",
         value: "Incorrect"},
     answer4: {answer: "Chew gum",
        value: "Incorrect"},
    }
     ];
     
     getAQuestion();
     makeAQuestion();
     
     // This will dynamically generate buttons with values
     function makeAQuestion(){
        $(".questionHere").html("<h4>"+chosenQuestion.question+"</h4>");
        $(".buttonsHere").empty();
        var button1 = $("<button class='answers' value='"+chosenQuestion.answer1.value+"'>").text(chosenQuestion.answer1.answer)
        var button2 = $("<button class='answers' value='"+chosenQuestion.answer2.value+"'>").text(chosenQuestion.answer2.answer)
        var button3 = $("<button class='answers' value='"+chosenQuestion.answer3.value+"'>").text(chosenQuestion.answer3.answer)
        var button4 = $("<button class='answers' value='"+chosenQuestion.answer4.value+"'>").text(chosenQuestion.answer4.answer)
        $(".buttonsHere").append(button1, button2, button3, button4)
     }
function getAQuestion(){
     randomQuestion = Math.floor(Math.random()*questions.length);
    chosenQuestion = questions[randomQuestion];
    questions.splice(randomQuestion,1);
    }


//tallies results
function results(){
    $(".right").text(rightAnswers);
    $(".wrong").text(wrongAnswers);
    var unansweredAnswers = 5 - (rightAnswers + wrongAnswers);
    $(".unanswered").text(unansweredAnswers);
    clearInterval(intervalId);
}

function resultPage(){
    $(".game").hide();
        results();
        $(".card").show();

}


//ticks time down when called
function count(){
    time--
    $(".timer").text(time);
    if (time === 0){
        time=15;
        $(".timer").text(time);
        getAQuestion();
        makeAQuestion();
        totalQuestions++;
        if (totalQuestions === 4){
            totalQuestions++
            resultPage()
        }
    }
}

//sets start of page
function reset(){
//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
$(".jumbotron").show();
$(".startBtn").show();
clearInterval(intervalId);
//sets my needed variables
 time = 15;
 rightAnswers = 0;
 wrongAnswers = 0;
 totalQuestions = 0;
 timerOn = false;
 $(".timer").text("15");
 if (questions.length === 0){
    questions = [{
        question: "How do crickets hear?",
         answer1:{answer: "Through their wings",
            value: "Incorrect"},
         answer2: {answer: "Through their belly",
            value: "Incorrect"},
         answer3: {answer: "Through their knees",
            value: "Correct"},
         answer4: {answer: "Through their tongue",
            value: "Incorrect"}
        },
    
         {
         question: "Which American city invented plastic vomit?",
         answer1: {answer: "Chicago",
            value: "Correct"},
         answer2: {answer: "Detroit",
            value: "Incorrect"},
         answer3: {answer: "Columbus",
            value: "Incorrect"},
         answer4: {answer: "Baltimore",
            value: "Incorrect"},
         },
    
         {
         question: "In Ben Hur, which modern thing can be seen during the chariot scene?",
         answer1: {answer: "A waitress",
            value: "Incorrect"},
         answer2: {answer: "A car",
            value: "Correct"},
         answer3: {answer: "A postbox",
            value: "Incorrect"},
         answer4: {answer: "A street lamp",
            value: "Incorrect"},
        },
    
         {
         question: "What was Karl Marxs favorite color?",
         answer1: {answer: "Brown",
            value: "Incorrect"},
         answer2: {answer: "Blue",
            value: "Incorrect"},
         answer3: {answer: "Red",
            value: "Correct"},
         answer4: {answer: "Purple",
            value: "Incorrect"},
        },
    
         {
         question: "What is the best way to stop crying while peeling onions?",
         answer1: {answer: "Lick almonds",
             value: "Incorrect"},
         answer2: {answer: "Suck lemons",
             value: "Correct"},
         answer3: {answer: "Eat cheese",
             value: "Incorrect"},
         answer4: {answer: "Chew gum",
            value: "Incorrect"},
        }
         ];
 }
}

$(document).on("click",".answers", function(){
    if ($(this).val()==="Correct" && totalQuestions < 4){
        rightAnswers++;
        totalQuestions++;
        getAQuestion();
        makeAQuestion();
        console.log("Right Answers: "+rightAnswers)
    }
    else if ($(this).val()==="Incorrect" && totalQuestions < 4){
        wrongAnswers++;
        totalQuestions++;
        getAQuestion();
        makeAQuestion();
        console.log("Wrong Answers: "+wrongAnswers)
    }

    else if ($(this).val()==="Correct" && totalQuestions === 4){
        rightAnswers++
        resultPage();
    }
    else if ($(this).val()==="Incorrect" && totalQuestions === 4){
        wrongAnswers++
        resultPage()
    }

});



//starts page to play again
$(".restartBtn").on("click",function(){
    reset();
})

//starts game
$(".startBtn").on("click",function(){
    $(".game").show();
    $(".jumbotron").hide();
    $(".startBtn").hide();
    if (timerOn === false){
        timerOn = true;
    intervalId = setInterval(count,1000)
    }
});

