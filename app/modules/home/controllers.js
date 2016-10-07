'use strict';
 
angular.module('Home')
 
.controller('HomeController', ['$scope','$cookieStore', HomeController]);

function HomeController($scope, $cookieStore) {

$scope.username = "admin";

}