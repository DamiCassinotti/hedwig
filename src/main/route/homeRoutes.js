const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {res.sendFile('index.html', { root: path.join(__dirname, '../webapp') })});

router.get('/weddingDate', (req, res) => {res.json({"weddingDate": new Date(2020, 8, 26)})});

module.exports = router;