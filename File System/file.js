const { log } = require("node:console");
const fs = require("node:fs");

//--------file create----------
fs.writeFile("data.txt", "Mostakin Ahmed", function (err) {
  if (err) {
    console.error("error");
  } else {
    console.log("done");
  }
});

fs.appendFile(
  "data.txt",
  " from Daffodil International University",
  function (err) {
    if (err) {
      console.error("Data not added");
    } else {
      console.log("data added");
    }
  }
);
