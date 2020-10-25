const { v4: uuid } = require("uuid");
const R = require("ramda");

const buildLocationData = (times) => {
  const ids = [];
  const data = R.times(() => {
    // - 90 to 90.
    const randomLat = ((Math.random() * 1000) % 180) - 90;
    // -180 to 180
    const randomLong = ((Math.random() * 1000) % 360) - 180;
    const id = uuid();
    ids.push(id);
    return {
      id,
      geom: `POINT(${randomLat} ${randomLong})`,
    };
  }, times);
  return {
    ids,
    data,
  };
};

module.exports = buildLocationData;
