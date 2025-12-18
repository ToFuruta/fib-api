const { HttpError } = require("../lib/httpError");

function validateN(req, _res, next) {
  const raw = req.query.n;

  if (raw === undefined) throw new HttpError(400, "Bad request.");
  if (Array.isArray(raw)) throw new HttpError(400, "Bad request.");
  if (!/^\d+$/.test(raw)) throw new HttpError(400, "Bad request.");

  const n = Number(raw);
  if (!Number.isSafeInteger(n) || n <= 0)
    throw new HttpError(400, "Bad request.");

  const MAX_N = 200000;
  if (n > MAX_N) throw new HttpError(400, "Bad request.");

  req.n = n;
  next();
}

module.exports = { validateN };
