const express = require('express');
const path = require('path');
const confirmationController = require('../controller/confirmationController');

const router = express.Router();

router.get('/', (req, res) => {res.sendFile('index.html', { root: path.join(__dirname, '../webapp') })});

router.get('/healthCheck', (req, res) => {res.status(200).send("Up & Running!")});

router.get('/weddingDate', (req, res) => {res.json({"weddingDate": new Date("2021-03-20T16:30:00.000-03:00")})});

router.post('/confirmAssistance', (req, res) => {
	confirmationController.confirmAssistance(req.body)
		.then(res.status(201).send("OK"))
		.catch(error => {
			console.log("[ERROR] Got an error on route!");
			console.log(error);
			res.status(500)
		})
});

router.get('/confirmedAssistance', (req, res) => {
	confirmationController.confirmedAssistance()
		.then(data => res.status(201).json(data))
		.catch(error => {
			console.log("[ERROR] Got an error on route!");
			console.log(error);
			res.status(500)
		})
});

module.exports = router;
