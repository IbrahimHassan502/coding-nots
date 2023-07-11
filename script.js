"use strict";
import { searchCategories as srchCat } from "./data.js";

srchCat.forEach((cat) => {
  console.log(cat.replace("&", "and").split(" ").join("-"));
});
