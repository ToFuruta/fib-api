const express = require("express");
const { fibRouter } = require("./routes/fib");
const { errorHandler } = require("./middleware/error");

const app = express();
app.use(express.json());
app.use("/fib", fibRouter);
app.use(errorHandler);

module.exports = { app };
