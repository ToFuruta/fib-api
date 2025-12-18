const { HttpError } = require("../lib/httpError");

function errorHandler(err, _req, res, _next) {
  if (err instanceof HttpError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }
  return res
    .status(500)
    .json({ status: 500, message: "Internal server error." });
}

module.exports = { errorHandler };
