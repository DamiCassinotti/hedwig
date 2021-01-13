const confirmationService = require('../service/confirmationService');

exports.confirmAssistance = (persons) => {
	return new Promise(async (resolve, reject) => {
		console.log("Controller - Got persons: " + persons)
		confirmationService.confirmAssistance(persons)
			.then(resolve())
			.catch(error => reject(error))
	})
}
