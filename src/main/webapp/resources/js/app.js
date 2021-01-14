(function () {
    angular.module('hedwigApp', ['ngRoute', 'ui.bootstrap']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'homeController',
            templateUrl: 'resources/views/home.html',
            resolve: {
                data: ['homeFactory', function (homeFactory) {
                    return homeFactory.getWeddingDate();
                }]
            }
        }).when('/invitados', {
            controller: 'ConfirmedListController',
            templateUrl: 'resources/views/list.html',
            resolve: {
                data: ['confirmedListFactory', function (confirmedListFactory) {
                    return confirmedListFactory.getConfirmedList();
                }]
            }
        }).otherwise({redirectTo: '/'});
    });
})();
