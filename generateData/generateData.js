const R = require("ramda");
const { v4: uuid } = require("uuid");

const ObjectsToCsv = require("objects-to-csv");

const buildTransactionData = require("./helpers/buildTransactionData");
const buildLocationData = require("./helpers/buildLocationData");
const buildGameItemLocationData = require("./helpers/buildGameItemLocationData");
module.exports = (NUM_USERS, NUM_ENTRIES) => {
  const user_ids = R.times(() => uuid(), NUM_USERS);

  (async () => {
    const transactionData = R.pipe(
      R.map(buildTransactionData(R.__, NUM_ENTRIES)),
      R.flatten
    )(user_ids);

    const { data: locationData, ids: locationIds } = buildLocationData(
      NUM_ENTRIES
    );

    // There could be a better way to do this
    const gameItemLocationData = buildGameItemLocationData(
      user_ids,
      locationIds,
      NUM_ENTRIES
    );

    const locationCsv = new ObjectsToCsv(locationData);
    await locationCsv.toDisk("./csvsToCopy/locations.csv");
    const transactionsCsv = new ObjectsToCsv(transactionData);
    await transactionsCsv.toDisk("./csvsToCopy/transactions.csv");
    const gameItemLocationCsv = new ObjectsToCsv(gameItemLocationData);
    await gameItemLocationCsv.toDisk("./csvsToCopy/gameItemLocations.csv");
  })();
};
