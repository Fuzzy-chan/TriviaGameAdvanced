//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
$(".right1").hide();
$(".wrong1").hide();
$(".right2").hide();
$(".wrong2").hide();
$(".right3").hide();
$(".wrong3").hide();
$(".right4").hide();
$(".wrong4").hide();
$(".right5").hide();
$(".wrong5").hide();
//sets my needed variables
var intervalId;
var time = 15;
var rightAnswers = 0;
var wrongAnswers = 0;
var timerOn = false;

//tallies results
function results(){
    $(".right").text(rightAnswers);
    $(".wrong").text(wrongAnswers);
    var unansweredAnswers = 5 - (rightAnswers + wrongAnswers);
    $(".unanswered").text(unansweredAnswers);
}

//sets start of page
function reset(){
//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
$(".jumbotron").show();
$(".startBtn").show();
//sets my needed variables
 time = 15;
 rightAnswers = 0;
 wrongAnswers = 0;
 timerOn = false;
 $(".timer").text("00:15");
}

//checks which question is selected and shows the next, ending in the result screen
function checkQuestion(){
    if ($(".question1").is(":visible")){
        $(".question1").hide();
        $(".question2").show();
    }
    else if ($(".question2").is(":visible")){
        $(".question2").hide();
        $(".question3").show();
    }
    else if ($(".question3").is(":visible")){
        $(".question3").hide();
        $(".question4").show();
    }
    else if ($(".question4").is(":visible")){
        $(".question4").hide();
        $(".question5").show();
    }
    else if ($(".question5").is(":visible")){
        $(".question5").hide();
        results();
        $(".card").show();
    }
    else if ($(".right1").is(":visible")){
        $(".right1").hide();
        $(".question2").show();
    }
    else if ($(".wrong1").is(":visible")){
        $(".wrong1").hide();
        $(".question2").show();
    }
    else if ($(".right2").is(":visible")){
        $(".right2").hide();
        $(".question3").show();
    }
    else if ($(".wrong2").is(":visible")){
        $(".wrong2").hide();
        $(".question3").show();
    }
    else if ($(".right3").is(":visible")){
        $(".right3").hide();
        $(".question4").show();
    }
    else if ($(".wrong3").is(":visible")){
        $(".wrong3").hide();
        $(".question4").show();
    }
    else if ($(".right4").is(":visible")){
        $(".right4").hide();
        $(".question5").show();
    }
    else if ($(".wrong4").is(":visible")){
        $(".wrong4").hide();
        $(".question5").show();
    }
    else if ($(".right5").is(":visible")){
        $(".right5").hide();
        results();
        $(".card").show();
    }
    else if ($(".wrong5").is(":visible")){
        $(".wrong5").hide();
        results();
        $(".card").show();
    }
}

//ticks time down when called
function count(){
    time--
    var timeLeft = timeConverter(time);
    $(".timer").text(timeLeft);
    if (time === 0){
        time=15;
        $(".timer").text(timeLeft);
        checkQuestion()
        if ($(".card").is(":visible")){
            clearInterval(intervalId);
        }
    }
}
//converts time to mm:ss format
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
//starts page to play again
$(".restartBtn").on("click",function(){
    reset();
})

//starts game
$(".startBtn").on("click",function(){
    $(".game").show();
    $(".question1").show();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();
    $(".question5").hide();
    $(".jumbotron").hide();
    $(".startBtn").hide();
    if (timerOn === false){
        timerOn = true;
    intervalId = setInterval(count,1000)
    }
});

// ooookay, how to check for right answers
$(".answer").on("click",function(){
     
        if ($(this).val()==="correct"){
        rightAnswers++
        console.log("Right Answers: " + rightAnswers);
        if ($(".question1").is(":visible")){
            $(".question1").hide();
            $(".right1").show();
            time=5;
        }
        if ($(".question2").is(":visible")){
            $(".question2").hide();
            $(".right2").show();
            time=5;
        }
        if ($(".question3").is(":visible")){
            $(".question3").hide();
            $(".right3").show();
            time=5;
        }
        if ($(".question4").is(":visible")){
            $(".question4").hide();
            $(".right4").show();
            time=5;
        }
        if ($(".question5").is(":visible")){
            $(".question5").hide();
            $(".right5").show();
            time=5;
        }
        
       
    }

    else if ($(this).val()==="incorrect"){
        wrongAnswers++;
        console.log("Wrong Answers: " + wrongAnswers);
        if ($(".question1").is(":visible")){
            $(".question1").hide()
            $(".wrong1").show()
            time=5;
        }
        if ($(".question2").is(":visible")){
            $(".question2").hide()
            $(".wrong2").show()
            time=5;
        }
        if ($(".question3").is(":visible")){
            $(".question3").hide()
            $(".wrong3").show()
            time=5;
        }
        if ($(".question4").is(":visible")){
            $(".question4").hide()
            $(".wrong4").show()
            time=5;
        }
        if ($(".question5").is(":visible")){
            $(".question5").hide()
            $(".wrong5").show()
            time=5;
        }
    }
    // else if (time===0){
    //     unansweredAnswers++;
    //     console.log("Unanswered Questions: " + unansweredAnswers);
    //     checkQuestion();
    //     time = 15;
    // }

});