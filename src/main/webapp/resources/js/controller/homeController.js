(function () {
    angular.module('hedwigApp').controller('homeController', ['$scope', 'data', '$interval', function ($scope, data, $interval) {

        $scope.data = data;
        $scope.data.weddingDate = new Date($scope.data.weddingDate);
        $scope.data.displayDatosCuenta = false;
        calculateCountdown();

        function calculateCountdown() {
            $scope.countdown = $scope.data.weddingDate - Date.now();
            $scope.countdownSeconds = Math.floor(($scope.countdown / 1000) % 60);
            $scope.countdownMinutes = Math.floor(($scope.countdown / 60000) % 60);
            $scope.countdownHours = Math.floor(($scope.countdown / 3600000) % 24);
            $scope.countdownDays = Math.floor(($scope.countdown / (1000 * 60 * 60 * 24)));
        }

        $scope.toggleDatosCuenta = function() {
            $scope.data.displayDatosCuenta = !$scope.data.displayDatosCuenta;
        }

        $interval(calculateCountdown, 1000);

    }]);
})();