const { game_items } = require("./constants");
const getRandomElement = require("./getRandomElement");
const R = require("ramda");

module.exports = (userIds, locationIds, times) => {
  return R.times(
    () => ({
      item_id: getRandomElement(game_items),
      location_id: getRandomElement(locationIds),
      user_id: getRandomElement(userIds),
    }),
    times
  );
};
