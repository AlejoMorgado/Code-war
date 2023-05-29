// The scores for each grade is:
// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded.
//  After all the calculations, the total score should be capped at 200 points.
// Returns the name of the hacked name as an array when scoring with this rule.

const findHack = (arr) => {
  const hackedNames = [];

  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const totalScore = arr[i][1];
    const grades = arr[i][2];

    let score = 0;
    let bestGrades = 0;

    for (let j = 0; j < grades.length; j++) {
      const grade = grades[j];

      switch (grade) {
        case "A":
          score += 30;
          bestGrades++;
          break;
        case "B":
          score += 20;
          bestGrades++;
          break;
        case "C":
          score += 10;
          break;
        case "D":
          score += 5;
          break;
        default:
          break;
      }
    }

    if (grades.length >= 5 && bestGrades === grades.length) {
      score += 20;
    }

    if (score > 200) {
      score = 200;
    }

    if (score !== totalScore) {
      hackedNames.push(name);
    }
  }

  return hackedNames;
}

const array = [
  ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A", "A"]],
  ["name4", 140, ["B", "A", "A", "C", "A"]]
];

console.log(findHack(array));

