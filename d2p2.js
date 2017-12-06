const fs = require("fs");

const rowQuotient = row => {
  for (let i = 0; i < row.length - 1; i++) {
    const d1 = row[i];
    for (let j = i + 1; j < row.length; j++) {
      const d2 = row[j];

      const max = Math.max(d1, d2);
      const min = Math.min(d1, d2);

      if (max % min === 0) return max / min;
    }
  }

  return null;
};

const checksum = matrix => {
  const callback = (accum, row) => accum + rowQuotient(row);
  return matrix.reduce(callback, 0);
};

const compute = fileName => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    const matrix =
      data.split('\n').map( line => line.split('\t').map( el => parseInt(el) ));

    console.log(checksum(matrix));
  });
};

compute('./d2p1_input.txt');
