//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
//sets my needed variables
var intervalId;
var time = 15;
var rightAnswers = 0;
var wrongAnswers = 0;
var timerOn = false;
var randomQuestion;
var chosenQuestion = {};
var totalQuestions = 0;
var initialQuestions = [{
    question: "How do crickets hear?",
     answer1:{answer: "Through their wings",
        value: "Incorrect"},
     answer2: {answer: "Through their belly",
        value: "Incorrect"},
     answer3: {answer: "Through their knees",
        value: "Correct"},
     answer4: {answer: "Through their tongue",
        value: "Incorrect"},
        correctAnswer: "The correct answer is, 'Through their knees'!",
        url:"https://media.giphy.com/media/11R5KYi6ZdP8Z2/giphy.gif"
    },

     {
     question: "Which American city invented plastic vomit?",
     answer1: {answer: "Chicago",
        value: "Correct"
        },
     answer2: {answer: "Detroit",
        value: "Incorrect"},
     answer3: {answer: "Columbus",
        value: "Incorrect"},
     answer4: {answer: "Baltimore",
        value: "Incorrect"},
        correctAnswer: "The correct answer is, 'Chicago'!",
        url:"https://images-na.ssl-images-amazon.com/images/I/71Uo7ECG1nL._UX385_.jpg"
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
        correctAnswer: "The correct answer is, 'A car'!",
        url:"https://media.giphy.com/media/gavYYVN41Doze/giphy.gif"
    },

     {
     question: "What was Karl Marxs favorite color?",
     answer1: {answer: "Brown",
        value: "Incorrect"},
     answer2: {answer: "Blue",
        value: "Incorrect"},
     answer3: {answer: "Red",
        value: "Correct"
        },
     answer4: {answer: "Purple",
        value: "Incorrect"},
        correctAnswer: "The correct answer is, 'Red'!",
        url:"https://media.giphy.com/media/KZblSmRjAo36w/giphy.gif"
    },

     {
     question: "What is the best way to stop crying while peeling onions?",
     answer1: {answer: "Lick almonds",
         value: "Incorrect"},
     answer2: {answer: "Suck lemons",
         value: "Incorrect"},
     answer3: {answer: "Eat cheese",
         value: "Incorrect"},
     answer4: {answer: "Chew gum",
        value: "Correct"
        },
        correctAnswer: "The correct answer is, 'Chew Gun'!",
        url:"https://media.giphy.com/media/SUeHsdhjvt4Y0/giphy.gif"
    },
    {
        question: "How old was the youngest Pope?",
        answer1: {answer: "11",
            value: "Correct"},
        answer2: {answer: "17",
            value: "Incorrect"},
        answer3: {answer: "22",
            value: "Incorrect"},
        answer4: {answer: "29",
           value: "Incorrect"
           },
           correctAnswer: "The correct answer is, '11'!",
           url:"https://media.giphy.com/media/GFND5Uv29jt4s/giphy.gif"
       },
       {
        question: "Which animal sleeps for only five minutes a day?",
        answer1: {answer: "A chameleon",
            value: "Incorrect"},
        answer2: {answer: "A koala",
            value: "Incorrect"},
        answer3: {answer: " A giraffe",
            value: "Correct"},
        answer4: {answer: "A beaver",
           value: "Incorrect"
           },
           correctAnswer: "The correct answer is, 'A Giraffe'!",
           url:"https://media1.tenor.com/images/b0cb66cf74bf76c4730d163d823000f6/tenor.gif?itemid=5440981"
       },
       {
        question: "How many words in the English language end in 'dous'?",
        answer1: {answer: "Two",
            value: "Incorrect"},
        answer2: {answer: "Four",
            value: "Incorrect"},
        answer3: {answer: "Six",
            value: "Incorrect"},
        answer4: {answer: "Eight",
           value: "Correct"
           },
           correctAnswer: "The correct answer is, 'Eight'!",
           url:"https://dkru86weszx9t.cloudfront.net/blog/wp-content/uploads/2016/10/9dFvgd4ID6ne0.gif"
       },
       {
        question: 'One human hair can support how many kilograms?',
        answer1: {answer: "Three",
            value: "Correct"},
        answer2: {answer: "Five",
            value: "Incorrect"},
        answer3: {answer: "Seven",
            value: "Incorrect"},
        answer4: {answer: "Nine",
           value: "Incorrect"
           },
           correctAnswer: "The correct answer is, 'Three'!",
           url:"https://media1.tenor.com/images/d01ef4c047b2723937ebbfa446d4c55f/tenor.gif?itemid=4275888"
       },
     ];
var emptyQuestions = [];
var questions = emptyQuestions.concat(initialQuestions);
console.log("Initial Questions: "+JSON.stringify(questions))
     
     // This will dynamically generate buttons with values
     function makeAQuestion(){
        $(".questionHere").html("<h4>"+chosenQuestion.question+"</h4>");
        $(".buttonsHere").empty();
        var button1 = $("<button class='answers' value='"+chosenQuestion.answer1.value+"' data='"+chosenQuestion.url+"'  data2='"+chosenQuestion.correctAnswer+"'>").text(chosenQuestion.answer1.answer)
        var button2 = $("<button class='answers' value='"+chosenQuestion.answer2.value+"' data='"+chosenQuestion.url+"'  data2='"+chosenQuestion.correctAnswer+"'>").text(chosenQuestion.answer2.answer)
        var button3 = $("<button class='answers' value='"+chosenQuestion.answer3.value+"' data='"+chosenQuestion.url+"' data2='"+chosenQuestion.correctAnswer+"'>").text(chosenQuestion.answer3.answer)
        var button4 = $("<button class='answers' value='"+chosenQuestion.answer4.value+"' data='"+chosenQuestion.url+"' data2='"+chosenQuestion.correctAnswer+"'>").text(chosenQuestion.answer4.answer)
        $(".buttonsHere").append(button1, button2, button3, button4)
     }
function getAQuestion(){

    randomQuestion = Math.floor(Math.random()*questions.length);
    chosenQuestion = questions[randomQuestion];
    questions.splice(randomQuestion,1);
    console.log(chosenQuestion);
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
    time--;
    $(".timer").text(time);
    
    if (time === 0){
        time=15;       

        if ($(".referance").is(":visible") && totalQuestions<5){
            totalQuestions++;
            console.log("Total Questions: "+totalQuestions)
        }
        
        if (totalQuestions === 5){
            resultPage();
        }
        else {
            $(".referance").show();
            $(".showAnswer").hide();
            getAQuestion();
            makeAQuestion();
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
$(".showAnswer").empty();
chosenQuestion = {};
clearInterval(intervalId);
//sets my needed variables
 time = 15;
 rightAnswers = 0;
 wrongAnswers = 0;
 totalQuestions = 0;
 timerOn = false;
 $(".timer").text("15");
 
 questions= emptyQuestions.concat(initialQuestions);

 console.log("Questions after reset: "+ JSON.stringify(questions))
 
 
}

$(document).on("click",".answers", function(){
    if ($(this).val()==="Correct" && totalQuestions !== 5){
        $(".showAnswer").empty();
        rightAnswers++;
        totalQuestions++;
        console.log("Questions asked: "+totalQuestions);
        time = 4;
        $(".referance").hide();
        $(".showAnswer").show();
        var noAnswer = $("<h4>You got it!</h4");
        var response = $("<p>"+chosenQuestion.correctAnswer+"'<p>");        
        var image = $("<img src='"+chosenQuestion.url+"'>");
        $(".showAnswer").append(noAnswer,response, image);
        
        console.log("Right Answers: "+rightAnswers)
    }
    else if ($(this).val()==="Incorrect" && totalQuestions !== 5){
        $(".showAnswer").empty();
        wrongAnswers++;
        totalQuestions++;
        console.log("Questions asked: "+totalQuestions);
        time = 4;
        $(".referance").hide();
        $(".showAnswer").show();
        var noAnswer = $("<h4>Too hard for ya?</h4");
        var response = $("<p>"+chosenQuestion.correctAnswer+"'<p>");        
        var image = $("<img src='"+chosenQuestion.url+"'>");
        $(".showAnswer").append(noAnswer,response, image);
        
        $(".timer").text(time);
        console.log("Wrong Answers: "+wrongAnswers)
    }

});//ends click event




//starts page to play again
$(".restartBtn").on("click",function(){
    reset();

});

//starts game
$(".startBtn").on("click",function(){
    $(".game").show();
    $(".jumbotron").hide();
    $(".startBtn").hide();
    $(".referance").show();
    getAQuestion();
    makeAQuestion();
    if (timerOn === false){
        time=15;
        timerOn = true;
    intervalId = setInterval(count,1000)
    }
});

