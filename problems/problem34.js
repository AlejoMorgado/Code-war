// You know the slogan p, which the agitators have been chanting for quite a while now. Roka has heard this slogan a few times, but he missed almost all of them and grasped only their endings. You know the string r that Roka has heard.
// You need to determine what is the minimal number of times agitators repeated the slogan p, such that Roka could hear r.
// It is guaranteed the Roka heard nothing but the endings of the slogan P repeated several times.
// Example
// For p = "glorytoukraine", r = "ukraineaineaine", the output should be 3.
// The slogan was "glorytoukraine", and Roka heard "ukraineaineaine".
// He could hear it as follows: "ukraine" + "aine" + "aine" = "ukraineaineaine".

function slogans(p,r) {
  const pLength = p.length;
  const rLength = r.length;

  let repetitions = 1; // Start with 1 repetition
  let i = 0;
  let j = 0;

  while (j < rLength) {
    if (p[i % pLength] === r[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  repetitions += Math.floor(i / pLength); // Add the additional full repetitions

  return repetitions;
  }
  const p = "glorytoukraine";
  const r = "ukraineaineaine";
  const minimalRepetitions = countRepetitions(p, r);
  console.log(minimalRepetitions);
