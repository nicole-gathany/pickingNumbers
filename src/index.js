function pickingNumbers(a) {
  // Write your code here
  a.sort((a, b) => a - b);
  let objConsecutiveNumbers = {};
  for (let i = 0; i < a.length; i++) {
    if (!objConsecutiveNumbers[a[i]]) objConsecutiveNumbers[a[i]] = 0;
    objConsecutiveNumbers[a[i]]++;
  }

  let entries = Object.entries(objConsecutiveNumbers);

  let entriesAllInt = entries.map(a => parseInt(a[0], 10));

  console.log(entries)
  let sumsOfConsecutiveFreq = Object.values(objConsecutiveNumbers);
  console.log(sumsOfConsecutiveFreq)
  for (let i = 0; i < entries.length; i++) {
    if (entriesAllInt[i + 1] - entriesAllInt[i] === 1) {
      sumsOfConsecutiveFreq.push(entries[i][1] + entries[i + 1][1]);
    }
  }

  sumsOfConsecutiveFreq.sort((a, b) => b - a);

  return sumsOfConsecutiveFreq[0];
}

console.log(pickingNumbers([1, 2, 1, 1, 2, 3, 4, 4, 4, 6]));
