const XLSX = require('xlsx');

const volunteersByGender = (req, res) => {
  var rowNum;
  var colNum;
  const wb = XLSX.readFile("../data/dummyVolunteerData.xls");
  const firstSheetName = wb.SheetNames[0];
  const worksheet = wb.Sheets[firstSheetName];
  var range = XLSX.utils.decode_range(worksheet['!ref']);
  const countMap = {
    Male: 0,
    Female: 0,
  }
  for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
    for(colNum=range.s.c; colNum<=range.e.c; colNum++){
      var nextCell = worksheet[
          XLSX.utils.encode_cell({r: rowNum, c: colNum})
      ];
      if (nextCell && colNum === 3) {
        if (nextCell.w in countMap) {
          countMap[nextCell.w] += 1
        }
      }
    }
  }
  const chartData = [[], []];
  Object.entries(countMap).forEach(([gender, count]) => {
    chartData[0].push(count);
    chartData[1].push(gender);
  })
  res.status(200).json(chartData);
}

module.exports = volunteersByGender;
