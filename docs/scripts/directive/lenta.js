'use strict';

angular.module('angularAdminpanelApp').directive('lenta', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'modules/home/views/lenta.html'
  };
});