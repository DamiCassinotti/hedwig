const confirmationService = require('../service/confirmationService');

exports.confirmAssistance = (persons) => {
	return new Promise((resolve, reject) => {
		console.log("Controller - Got persons: " + persons)
		confirmationService.confirmAssistance(persons)
			.then(resolve())
			.catch(error => {
				console.log("[ERROR] Got an error on controller!");
				console.log(error);
				reject(error);
			});
	})
}

exports.confirmedAssistance = () => {
	return new Promise((resolve, reject) => {
		confirmationService.confirmedAssistance()
			.then(data => resolve(data))
			.catch(error => {
				console.log("[ERROR] Got an error on controller!");
				console.log(error);
				reject(error);
			});
	})
}
