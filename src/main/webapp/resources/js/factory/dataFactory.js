(function () {
    angular.module('hedwigApp').factory('dataFactory', ['$http', '$q', function ($http, $q) {

        function getSimpleData(url, callback, customOptions) {
            let delay = $q.defer();
            let defaultOptions = {
                url: url,
                method: 'GET',
                dataType: 'application/json',
                async: false
            };
            let options = angular.extend(defaultOptions, customOptions);
            $http(options)
				.then(function (response) {
                    return callback(response.data, delay);
                })
				.catch(function(error) {
					alert("Algo salió mal! Avisale a Agus o a Pili!");
					return callback(undefined, delay);
				});

            return delay.promise;
        }

		function postSimpleData(url, data, callback, customOptions) {
			let delay = $q.defer();
            let defaultOptions = {
                url: url,
                method: 'POST',
                dataType: 'application/json',
                async: false,
				data: data
            };
            let options = angular.extend(defaultOptions, customOptions);
            $http(options)
				.then(function (response) {
	                return callback(true, delay);
	            })
				.catch(function(error) {
					alert("Algo salió mal! Avisale a Agus o a Pili!");
					return callback(false, delay);
				});

            return delay.promise;
		}

        return {
            getSimpleData: getSimpleData,
            postSimpleData: postSimpleData,
        };
    }])
})();
