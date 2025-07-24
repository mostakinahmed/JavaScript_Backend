// import express from "express";
const express = require("express");
const app = express();

//create route and manage
//app.get(Route, requestHandler) <-- strcuture (requestHandler is a func)

//----------MiddleWare--------------------
//req: accept from server
//res: do something
//next: after completing our middleWare Operation then
//      we send the req to through next to our route
app.use(function (req, res, next) {
  console.log("MiddleWare Worked.....");
  next();
});

//--------------Route--------------------
app.get("/", (req, res) => {
  res.send(`
    <h1>HOME: Profile</h1>
    <p><strong>Name:</strong> Mostakin</p>
    <p><strong>ID:</strong> 242-35-831</p>
    <p><strong>Department:</strong> Software Engineering</p>
    <p><strong>University:</strong> Daffodil International University</p>
  `);
});

//-------start server------
app.listen(3000);
