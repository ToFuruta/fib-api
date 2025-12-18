const request = require("supertest");
const { app } = require("../src/app");

describe("GET /fib", () => {
  test("n=1 -> 1", async () => {
    const res = await request(app).get("/fib?n=1");
    expect(res.status).toBe(200);
    expect(res.text).toBe('{"result": 1}');
  });

  test("n=10 -> 55", async () => {
    const res = await request(app).get("/fib?n=10");
    expect(res.status).toBe(200);
    expect(res.text).toBe('{"result": 55}');
  });

  test("n=99 example", async () => {
    const res = await request(app).get("/fib?n=99");
    expect(res.status).toBe(200);
    expect(res.text).toContain("218922995834555169026");
  });

  test("missing n -> 400", async () => {
    const res = await request(app).get("/fib");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ status: 400, message: "Bad request." });
  });

  test("non-numeric -> 400", async () => {
    const res = await request(app).get("/fib?n=abc");
    expect(res.status).toBe(400);
  });
});
