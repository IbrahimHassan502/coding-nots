"use strict";
function arrayDiff(a, b) {
  let numArr = [];
  a.forEach((aNum) => {
    let add = 1;
    b.forEach((bNum) => (aNum === bNum ? (add = 0) : ""));
    add ? numArr.push(aNum) : "";
  });
  return numArr;
}
console.log(arrayDiff([1, 2, 2], [1]));
