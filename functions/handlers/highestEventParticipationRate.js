const dummyData = require("../data/dummyGraph");

const highestEventParticipationRate = (req, res) => {
  res.status(200).json(dummyData[2]);
}

module.exports = highestEventParticipationRate;
