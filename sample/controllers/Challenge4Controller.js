define(['angularAMD', 'sample/services/WalletHubFactory'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge4Controller', ['$scope', 'WalletHubFactory', function ($scope, WalletHubFactory) {
        $scope.title = "Challenge 4";
        $scope.description = `Create an array of 50 items, each item having 3 properties. Create an option to sort the array
            by one or two properties. Make the array be filterable by a search input.`;
        $scope.states={};
        $scope.statesOrdered={};
        $scope.statesFiltered={};
        
        var statesPromise = WalletHubFactory.getStates();
        statesPromise.then(
            function(response) {
                $scope.states = response;
            }
        );

        $scope.orderBy = function() {
            $scope.statesOrdered= _.orderBy($scope.states, ['name'], ['desc']);
        }

        $scope.search = function(mystring) {
            $scope.statesFiltered = _.filter($scope.states,function(item){
                return item.name.indexOf(mystring)>-1;
            });
        }
    }]);
});