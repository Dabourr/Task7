let score = prompt("Enter your score");
score = Number(score);

if (score <= 100 && score >= 0) {
  let attendance = confirm("Do you have good attendance?");
  if (attendance == true) {
    score = score + 3;
    if (score > 100) {
      score = 100;
    }
  }

  let grade;

  if (score < 50) {
    grade = "F";
  } else if (score < 65) {
    grade = "D";
  } else if (score < 80) {
    grade = "C";
  } else if (score < 90) {
    grade = "B";
  } else {
    grade = "A";
  }

  if (score >= 50) {
    console.log(
      "Your score is " +
        score +
        " --- " +
        "Your grade is " +
        grade +
        " --- " +
        "Status: PASS",
    );
  } else {
    console.log(
      "Your score is " +
        score +
        " --- " +
        "Your grade is " +
        grade +
        " --- " +
        "Status: FAIL",
    );
  }
} else {
  console.log("Enter a valid score");
}
