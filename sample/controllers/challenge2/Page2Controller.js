define(['angularAMD', 'sample/services/WalletHubFactory'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge2Page2Controller', function ($scope, ShareDataFactory) {
        $scope.title = 'Controller2';
        $scope.description = 'Here you\'ll see the data submited by the Controller 1'  ;
        $scope.sharedData = ShareDataFactory.stringValue;
        
        $scope.$watch(function(){
                return ShareDataFactory.stringValue;
            }, function(NewValue, OldValue){
                $scope.sharedData = ShareDataFactory.stringValue;
        });
    });
});
