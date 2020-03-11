(function () {
    angular.module('hedwigApp').controller('homeController', ['$scope', 'data', '$interval', function ($scope, data, $interval) {

        $scope.data = data;
        calculateCountdown()

        function calculateCountdown() {
            $scope.countdown = new Date(data.weddingDate).getTime() - (new Date()).getTime();
        }

        $interval(calculateCountdown, 1000);

    }]);
})();