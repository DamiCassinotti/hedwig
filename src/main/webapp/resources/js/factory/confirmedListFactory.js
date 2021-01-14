(function () {
    angular.module('hedwigApp').factory('confirmedListFactory', ['dataFactory', function (dataFactory) {

        function getConfirmedList() {
            return dataFactory.getSimpleData('/confirmedAssistance', (data, delay) => {
                return delay.resolve(data);
            })
        }

        return {
            getConfirmedList: getConfirmedList,
        };
    }])
})()
