﻿//js/appRoutes.js

angular.module('appRoutes', []).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            }).
            otherwise({
                redirectTo: 'index.html'
        });

        $locationProvider.html5Mode(true);

    }
]);