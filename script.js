"use strict";
function longestCommonPrefix(strs) {
  let prefix = new RegExp(strs[0], "gi");
  strs.forEach((word) => console.log(word.match(prefix)));
  console.log(prefix);
}
longestCommonPrefix(["flower", "flow", "flight"]);
