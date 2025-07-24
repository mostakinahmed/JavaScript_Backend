const { log } = require("node:console");
const fs = require("node:fs");
fs.writeFile("data.txt", "Mostakin Ahmed", function (err) {
  if (err) {
    console.error("error");
  } else {
    console.log("done");
  }
});
