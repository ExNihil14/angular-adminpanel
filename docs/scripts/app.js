'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);


/**
 * @ngdoc overview
 * @name angularAdminpanelApp
 * @description
 * # angularAdminpanelApp
 *
 * Main module of the application.
 */
angular
  .module('angularAdminpanelApp', ['ui.bootstrap','Authentication',
    'Home',
    'ngCookies',
    'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {

    // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/home/views/home.html',
                controller: 'HomeController'                
            })
            .state('home.settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html'                               
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'                               
            })
            .state('home.lenta', {
                url: '/lenta',
                templateUrl: 'templates/lenta.html'                               
            })
            .state('login', {
                url: '/login',
                templateUrl: 'modules/authentication/views/login.html',
                controller: 'LoginController'
            });

    })   
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
}]);
