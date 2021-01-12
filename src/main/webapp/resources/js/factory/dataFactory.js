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
            $http(options).then(function (response) {
                if (response.status === 200)
                    return callback(response.data, delay);
                else
                    alert("Algo salió mal! Avisale a Agus o a Pili!")
            });

            return delay.promise;
        }

        return {
            getSimpleData: getSimpleData,
        };
    }])
})();
