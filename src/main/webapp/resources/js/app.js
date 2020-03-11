(function () {
    angular.module('hedwigApp', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'homeController',
            templateUrl: 'resources/views/home.html',
            resolve: {
                data: ['homeFactory', function (homeFactory) {
                    return homeFactory.getWeddingDate();
                }]
            }
        }).otherwise({redirectTo: '/'});
    });
})();