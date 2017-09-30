$(document).ready(function(){

	var genURL = "https://opentdb.com/api.php?amount=7&category=9&difficulty=easy&type=multiple",
	animalURL = "https://opentdb.com/api.php?amount=7&category=27&difficulty=medium&type=multiple",
	mythURL = "https://opentdb.com/api.php?amount=7&category=20&difficulty=hard&type=multiple",
	geogURL = "https://opentdb.com/api.php?amount=7&category=22&difficulty=hard&type=multiple",
	triviaInfo,
	questNum = 0,
	correctChoice = 0,
	wrongChoice = 0;


// function game() {
// 	FOR LOOP (i < triviaInfo.length) {
//		10s per Q
//		change #button1 2 3 4 to #wrongAns and #rightAns
//		setInterval, every second subtract from timeLeft
//			if #rightAns clicked, setTimeout, correctChoice++, questNum++
//			if #wrongAns clicked, setTimeout, wrongChoice++, questNum++
//			setTimeout at 10s
// }}

	function game(){
		for (var i = 0; i < triviaInfo.length; i++) {
			var timeLeft=10;
			//math.random 1-4
			var rightBtn = Math.floor(Math.random()*4)+1;
//There's got to be a more elegant way to do this...			
			//if 1 set #button1 to rightAns, set 2 3 4 to wrongAns
			if(rightBtn===1){
				$("#button1").text(triviaInfo.correct_answer);
				$("#button1").prop('id', 'rightAns');

				$("#button2").text(triviaInfo.incorrect_answers[0]);
				$("#button2").prop('id', 'wrongAns');

				$("#button3").text(triviaInfo.incorrect_answers[1]);
				$("#button3").prop('id', 'wrongAns');

				$("#button4").text(triviaInfo.incorrect_answers[2]);
				$("#button4").prop('id', 'wrongAns');
				}
			//if 2 set #button2 to rightAns, set 1 3 4 to wrongAns
			if(rightBtn===2){
				$("#button2").text(triviaInfo.correct_answer);
				$("#button2").prop('id', 'rightAns');

				$("#button1").text(triviaInfo.incorrect_answers[0]);
				$("#button1").prop('id', 'wrongAns');

				$("#button3").text(triviaInfo.incorrect_answers[1]);
				$("#button3").prop('id', 'wrongAns');

				$("#button4").text(triviaInfo.incorrect_answers[2]);
				$("#button4").prop('id', 'wrongAns');
				}
			//if 3 set #button3 to rightAns, set 1 2 4 to wrongAns
			if(rightBtn===3){
				$("#button3").text(triviaInfo.correct_answer);
				$("#button3").prop('id', 'rightAns');

				$("#button1").text(triviaInfo.incorrect_answers[0]);
				$("#button1").prop('id', 'wrongAns');

				$("#button2").text(triviaInfo.incorrect_answers[1]);
				$("#button2").prop('id', 'wrongAns');

				$("#button4").text(triviaInfo.incorrect_answers[2]);
				$("#button4").prop('id', 'wrongAns');
				}
			//if 4 set #button4 to rightAns, set 1 2 3 to wrongAns
			if(rightBtn===4){
				$("#button4").text(triviaInfo.correct_answer);
				$("#button4").prop('id', 'rightAns');

				$("#button1").text(triviaInfo.incorrect_answers[0]);
				$("#button1").prop('id', 'wrongAns');

				$("#button2").text(triviaInfo.incorrect_answers[1]);
				$("#button2").prop('id', 'wrongAns');

				$("#button3").text(triviaInfo.incorrect_answers[2]);
				$("#button3").prop('id', 'wrongAns');
				}

//			setInterval timer that updates the timerholder id
			setInterval(function(){
				$("#timerHolder").html(timeLeft.toString());
				timeLeft--;
			}, 1000);

//			if #rightAns clicked, setTimeout, correctChoice++, questNum++
//			if #wrongAns clicked, setTimeout, wrongChoice++, questNum++
			$("#rightAns").on("click", function(){
				correctChoice++;
				setTimeout();
			});

			$("#wrongAns").on("click", function(){
				wrongChoice++;
				setTimeout();
			});


			setTimeout(function(){
				alert("Out of time! This round is a loss.")
				wrongChoice++;
			}, 10000);
//			end game once all questions are answered
			if(wrongChoice+correctChoice==7 && wrongChoice>correctChoice){
				alert("You lose. :( Refresh the page to play again.");
			}
			if(wrongChoice+correctChoice==7 && correctChoice>wrongChoice){
				alert("You win! Reset the page to play again.");
			}

		}
	}


	//TIMER
// var count=30;
// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return;
//   }
//   //Do code for showing the number of seconds here
// }

// <span id="timer"></span>
// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      return;
//   }
//  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
// }

	$("#button1").on("click", function(){
		setQType(genURL);
	})

	$("#button2").on("click", function(){
		setQType(animalURL);
	})

	$("#button3").on("click", function(){
		setQType(mythURL);
	})

	$("#button4").on("click", function(){
		setQType(geogURL);
	})
});



