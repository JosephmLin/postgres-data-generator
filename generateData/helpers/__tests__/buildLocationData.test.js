const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
jest.mock("uuid", () => ({
  v4: () => "uuid",
}));

const oldMath = global.Math;
global.Math = mockMath;

const buildLocationData = require("../buildLocationData");

describe("generateData/helpers/buildLocationData", () => {
  afterAll(() => {
    global.Math = oldMath;
  });
  test("should properly build Location data", () => {
    const data = buildLocationData(5);

    expect(data).toEqual({
      data: [
        { geom: "POINT(-90 -180)", id: "uuid" },
        { geom: "POINT(-90 -180)", id: "uuid" },
        { geom: "POINT(-90 -180)", id: "uuid" },
        { geom: "POINT(-90 -180)", id: "uuid" },
        { geom: "POINT(-90 -180)", id: "uuid" },
      ],
      ids: ["uuid", "uuid", "uuid", "uuid", "uuid"],
    });
  });
});
