const dummyData = require("../data/dummyGraph");

const mostPopularEventTypes = (req, res) => {
  res.status(200).json(dummyData[1]);
}

module.exports = mostPopularEventTypes;
