define(['angularAMD', 'sample/services/WalletHubFactory'], function (angularAMD) {
  'use strict';
  angularAMD.controller('MenuController', ['$scope', 'WalletHubFactory', function ($scope, WalletHubFactory) {
        $scope.menu = null;

        var menuPromise = WalletHubFactory.getMenu();
        menuPromise.then(
            function(response) {
                $scope.menu = response;
            }
        );        
    }]);
});