define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.controller('DefaultController', ['$scope', function ($scope) {
        $scope.title = "from default"; 
    }]);
}); 
