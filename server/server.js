const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`proxy is listening on ${PORT}`));