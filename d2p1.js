const fs = require("fs");

const minMaxDiff = arr => Math.max(...arr) - Math.min(...arr) || 0;

const checksum = matrix => {
  const callback = (accum, row) => accum + minMaxDiff(row);
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
