define(['angularAMD', 'sample/services/WalletHubFactory'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge2Page1Controller', function ($scope, ShareDataFactory) {
        $scope.title = 'Controller1';
        $scope.description = 'Enter any content into the text box and click on the button to pass its value to the next Controller';
        $scope.txtMyData = ShareDataFactory.stringValue;
        $scope.updateSharedData = function(newValue) {
            ShareDataFactory.setString(newValue);
        }
    });
});
