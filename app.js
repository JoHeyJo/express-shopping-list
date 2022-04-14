"user strict"

const express = require("express");
const app = express();

// useful error class to throw
const { BadRequestError, NotFoundError } = require("./expressErrors");
const itemRoutes = require("./itemRoutes.js")


app.get("/", function (req, res, next) {
  return res.send("Express Shopping List")
});
debugger;
app.use("/items", itemRoutes)




/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});



module.exports = app;