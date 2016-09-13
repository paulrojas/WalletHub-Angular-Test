define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge2Controller', function ($scope) {
        $scope.title = "Challenge 2";
        $scope.description = `Provide example on how to pass data between page controllers. Have an input field in one
            page of which contents is displayed in the second page. Please do not use $rootScope.`;
    });
});