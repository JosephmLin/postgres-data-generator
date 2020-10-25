const mockMath = Object.create(global.Math);
mockMath.random = () => 0;

jest.mock("uuid", () => ({
  v4: () => "uuid",
}));

const oldMath = global.Math;
global.Math = mockMath;

const buildTransactionData = require("../buildTransactionData");

describe("populateTables/buildTransactionData", () => {
  afterAll(() => {
    global.Math = oldMath;
  });
  test("should properly generate data", () => {
    expect(buildTransactionData("user_id")(1)).toEqual([
      {
        id: "uuid",
        received: '{"5c0e1be2-ed5d-4be8-b45f-26961e27b169":1}',
        spent: null,
        user_id: "user_id",
      },
    ]);
  });
  // I'm missing a test here regarding the case where we have a spent value. I did smoke test it.
});
