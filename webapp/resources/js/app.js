(function () {
    angular.module('hedwigApp', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            // controller: 'homeController',
            templateUrl: 'resources/views/home.html',
            // resolve: {
            //     data: ['dataFactory', function (dataFactory) {
            //         return dataFactory.getData();
            //     }]
            // }
        }).otherwise({redirectTo: '/'});
    });
})();