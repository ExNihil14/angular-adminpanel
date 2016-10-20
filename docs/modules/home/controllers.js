'use strict';
 
angular.module('Home')
 
.controller('HomeController', ['$scope','$cookieStore', HomeController]);

function HomeController($scope, $cookieStore) {


$scope.sort = {title:''};
        
$scope.set = function(new_title) {

    this.sort.title = new_title;

}

}