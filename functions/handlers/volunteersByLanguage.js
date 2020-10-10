const dummyData = require("../data/dummyGraph");

const volunteersByLanguage = (req, res) => {
  res.status(200).json(dummyData[3]);
}

module.exports = volunteersByLanguage;
