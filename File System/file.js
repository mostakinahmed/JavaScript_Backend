const { log } = require("node:console");
const fs = require("node:fs");

//--------file create----------
// fs.writeFile("data.txt", "Mostakin Ahmed", function (err) {
//   if (err) {
//     console.error("error");
//   } else {
//     console.log("done");
//   }
// });

//--------file Append----------
// fs.appendFile(
//   "data.txt",
//   " from Daffodil International University",
//   function (err) {
//     if (err) {
//       console.error("Data not added");
//     } else {
//       console.log("data added");
//     }
//   }
// );

//--------file Rename----------
// fs.rename("data.txt", "info.txt", function (err) {
//   if (err) {
//     console.error("Error");
//   } else {
//     console.log("rename succesfull");
//   }
// });

//--------file Copy----------
fs.copyFile("info.txt", "./copy/copyData.txt", function (err) {
  if (err) {
    console.error("Error");
  } else {
    console.log("copy succesfull");
  }
});
