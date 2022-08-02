// Now what do you think what can I use here,
// require or import to use packages in node_modules or our local modules defined in multiple files?
// How to use the add function defined in node_modules/add or in the file ./add.js

// Case 1 - CommonJS, when package.json doesn't specify the type of specifies the value of commonjs in `type` field
// const add = require("add");

// Case 2 - ES Module, when package.json is specified with value `module` for the `type` field
import add from "add";
console.log("2 + 4 = ", add(2, 4));

// const { sum } = require("./add");
import { sum } from "./add.js";
console.log("1 + 2 = ", sum(1, 2));
