const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*'
}))

require('./location/index.js')(app);

app.get('/', (req, res) => res.send('API is Ready'));

module.exports = app;
