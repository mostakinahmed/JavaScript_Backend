let sum = 0;
const data = [1, 2, 3, 4, 5];

// data.forEach((data) => {
//   console.log(data + 2);
// });

// FOREACH;
data.forEach(function (val) {
  console.log(val);
});

// MAP - when we need to copy array
let newData;
newData = data.map(function (val) {
  return val * 2;
});
console.log(newData);

// FILTER
let filtData;
filtData = newData.filter(function (val) {
  if (val > 5) {
    return true;
  }
});
console.log(filtData);

//FIND
let newFind;
newFind = data.find(function (val) {
  if (5 === val) {
    return val;
  }
});
console.log(newFind);

//indexOf
let index = data.indexOf(14);
console.log(index);
