exports.confirmAssistance = (persons) => {
	return new Promise((resolve, reject) => {
		console.log("Service - Got persons: " + persons)
		var query = {
			text: 'INSERT INTO ASSISTANCE (name, last_name, menu) VALUES ',
			values: []
		};
		for (var i = 0; i < persons.length; i++) {
			console.log("Adding one person to query");
			let person = persons[i]
			query.text = query.text + '($' + (1+3*i) + ', $' + (2+3*i) + ', $' + (3+3*i) + ')';
			query.values.push(person.name);
			query.values.push(person.lastName);
			query.values.push(person.menu);
			if (i < (persons.length - 1)) {
				query.text = query.text + ','
			} else {
				query.text = query.text + ';'
			}
		}
		console.log("Query: " + query.text);
		client.query(query)
			.then(async () => {
				resolve();
			})
			.catch(error => {
				console.log("[ERROR] Got an error on service!");
				console.log(error);
				reject(error)
			});
	})
}

exports.confirmedAssistance = () => {
	return new Promise((resolve, reject) => {
		var query = {
			text: 'SELECT * FROM ASSISTANCE;'
		};
		console.log("Query: " + query.text);
		client.query(query)
			.then(data => {
				resolve(data.rows);
			})
			.catch(error => {
				console.log("[ERROR] Got an error on service!");
				console.log(error);
				reject(error)
			});
	})
}
