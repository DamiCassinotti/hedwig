(function () {
    angular.module('hedwigApp').controller('homeController', ['$scope', 'data', '$interval', function ($scope, data, $interval) {

        $scope.data = data;
        $scope.data.weddingDate = new Date($scope.data.weddingDate);
        calculateCountdown();

        function calculateCountdown() {
            $scope.countdown = $scope.data.weddingDate - new Date();
            $scope.countdownSeconds = Math.floor(($scope.countdown / 1000) % 60);
            $scope.countdownMinutes = Math.floor(($scope.countdown / 60000) % 60);
            $scope.countdownHours = Math.floor(($scope.countdown / 3600000) % 24);
            $scope.countdownDays = Math.floor(($scope.countdown / (1000 * 60 * 60 * 24)));
        }

        $interval(calculateCountdown, 1000);

    }]);
})();