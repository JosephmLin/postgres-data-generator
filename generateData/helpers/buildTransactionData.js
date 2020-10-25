const { v4: uuid } = require("uuid");
const R = require("ramda");
const { game_items, spendable_game_items } = require("./constants");
const getRandomElement = require("./getRandomElement");

const buildTransactionInformation = (user_id, times) =>
  R.times(() => {
    const transactionId = uuid();
    const receivedId = getRandomElement(game_items);
    const spendableId = spendable_game_items[receivedId];

    return {
      id: transactionId,
      user_id,
      received: JSON.stringify({
        [receivedId]: 1,
      }),
      spent: spendableId
        ? JSON.stringify({
            [spendableId]: 1,
          })
        : null,
    };
  }, times);

module.exports = R.curry(buildTransactionInformation);
