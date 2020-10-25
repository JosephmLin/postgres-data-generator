const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
jest.mock("uuid", () => ({
  v4: () => "uuid",
}));

const oldMath = global.Math;
global.Math = mockMath;

const buildGameItemLocationData = require("../buildGameItemLocationData");

describe("generateData/helpers", () => {
  afterAll(() => {
    global.Math = oldMath;
  });
  test("should generate game item lcoation data", () => {
    const data = buildGameItemLocationData(["userid"], ["locationid"], 3);
    expect(data).toEqual([
      {
        item_id: "5c0e1be2-ed5d-4be8-b45f-26961e27b169",
        location_id: "locationid",
        user_id: "userid",
      },
      {
        item_id: "5c0e1be2-ed5d-4be8-b45f-26961e27b169",
        location_id: "locationid",
        user_id: "userid",
      },
      {
        item_id: "5c0e1be2-ed5d-4be8-b45f-26961e27b169",
        location_id: "locationid",
        user_id: "userid",
      },
    ]);
  });
});
