(function () {
    angular.module('hedwigApp').factory('homeFactory', ['dataFactory', function (dataFactory) {

        function getWeddingDate() {
            return dataFactory.getSimpleData('/weddingDate', (data, delay) => {
                return delay.resolve(data);
            })
        }

		function confirmAssistance(persons) {
			return dataFactory.postSimpleData('/confirmAssistance', persons, (data, delay) => {
				return delay.resolve(data);
			})
		}

        return {
            getWeddingDate: getWeddingDate,
            confirmAssistance: confirmAssistance,
        };
    }])
})()
