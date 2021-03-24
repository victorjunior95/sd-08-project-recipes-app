const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const newarr = arr.reduce((acc, cur, index) => {
  if (index < 10) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(newarr);
