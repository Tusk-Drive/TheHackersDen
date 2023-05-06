function gradeQuiz() {
	let score = 0;
	let q1 = document.getElementsByName("q1");
	let q2 = document.getElementsByName("q2");
	let q3 = document.getElementsByName("q3");
	let q4 = document.getElementsByName("q4");
	let q5 = document.getElementsByName("q5");


	// Check answer to question 1
	for (let i = 0; i < q1.length; i++) {
		if (q1[i].checked && q1[i].value === "a") {
			score++;
			break;
		}
	}

	// Check answer to question 2
	for (let i = 0; i < q2.length; i++) {
		if (q2[i].checked && q2[i].value === "c") {
			score++;
			break;
		}
	}

	// Check answer to question 3
	for (let i = 0; i < q3.length; i++) {
		if (q3[i].checked && q3[i].value === "a") {
			score++;
			break;
		}
	}


	// Check answer to question 4
	for (let i = 0; i < q4.length; i++) {
		if (q4[i].checked && q4[i].value === "a") {
			score++;
			break;
		}
	}

	// Check answer to question 5
	for (let i = 0; i < q5.length; i++) {
		if (q5[i].checked && q5[i].value === "b") {
			score++;
			break;
		}
	}

	let quizGrade = document.getElementById("quizGrade");

	if (score === 5) {
		quizGrade.innerHTML = "You got 5 out of 5 correct! You have some solid Cyber Security knowledge";
		
	} else {
		quizGrade.innerHTML = "You got " + score + " out of 5 correct. Do some more research, you got this!";
	}
}