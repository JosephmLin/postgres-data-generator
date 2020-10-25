const generateData = require("./generateData/generateData");
const args = require("yargs").argv;
const R = require("ramda");

const NUM_USERS = R.propOr(5, "users", args);
const NUM_ENTRIES = R.propOr(5000, "entries", args);
module.exports = generateData(NUM_USERS, NUM_ENTRIES);
