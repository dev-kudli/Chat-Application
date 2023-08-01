const { Connection } = require("../index.js");

beforeAll(async () => {
  await Connection.connect();
});

afterAll(async () => {
  await Connection.close();
});

describe("Mongoose Connection", () => {
  test("should connect to the database", async () => {
    expect(await Connection.checkConnectionStatus()).toEqual(1);
  });
});
