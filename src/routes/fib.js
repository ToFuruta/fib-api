const express = require("express");
const { validateN } = require("../middleware/validate");
const { fib1Indexed } = require("../services/fibonacci");

const router = express.Router();

router.get("/", validateN, (req, res) => {
  const result = fib1Indexed(req.n);
  // BigIntを数値として返すためJSON文字列を手で作る
  res.status(200).json({ n: req.n, result: result.toString() });
});

module.exports = { fibRouter: router };
