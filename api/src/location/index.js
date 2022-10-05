const csvToJson = require('convert-csv-to-json');
const path = require('path')

module.exports = (app) => {
  app.get('/location', (req, res) => {

    const data = csvToJson.fieldDelimiter(',').getJsonFromCsv(path.resolve(__dirname, 'sydney-temperatures.csv'))

    return res.json(data)
  });
};
