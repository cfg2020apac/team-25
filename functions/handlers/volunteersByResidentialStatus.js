const dummyData = require("../data/dummyGraph");

const volunteersByResidentialStatus = (req, res) => {
  res.status(200).json(dummyData[4]);
}

module.exports = volunteersByResidentialStatus;
