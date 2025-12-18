function fib1Indexed(n) {
  if (!Number.isInteger(n)) throw new Error("n must be integer");
  if (n <= 0) throw new Error("n must be positive");
  return fib0IndexedBigInt(n);
}

function fib0IndexedBigInt(n) {
  return fibPair(n)[0];
}

// returns [F(n), F(n+1)]
function fibPair(n) {
  if (n === 0) return [0n, 1n];
  const [a, b] = fibPair(Math.floor(n / 2));
  const c = a * (2n * b - a);
  const d = a * a + b * b;
  if (n % 2 === 0) return [c, d];
  return [d, c + d];
}

module.exports = { fib1Indexed };
