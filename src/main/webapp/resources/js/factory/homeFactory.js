(function () {
    angular.module('hedwigApp').factory('homeFactory', ['dataFactory', function (dataFactory) {

        function getWeddingDate() {
            return dataFactory.getSimpleData('/weddingDate', (data, delay) => {
                return delay.resolve(data);
            })
        }

        return {
            getWeddingDate: getWeddingDate
        };
    }])
})()