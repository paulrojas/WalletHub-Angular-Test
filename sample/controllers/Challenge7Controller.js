define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.controller('Challenge7Controller', function ($scope) {
        $scope.title = "Challenge 7";
        $scope.description = `Create 3 number inputs that sum up into an additional field. Editing each of the 3 inputs will
            always update the sum value. The fourth field can also be editable, and whenever user changes
            this one its value must be spread across the other 3 fields.`;

        $scope.items = [ { value: 1 }, { value: 2 }, { value: 5} ];
        $scope.sumValues = 0;
        $scope.fireSum = true;

        $scope.sum = function() {
            var total=0;
            var list = $scope.items;
            angular.forEach(list , function(item){
                total+= parseFloat(item.value);
            });
            return total;
        }
        
        $scope.checkValues = function() {
            $scope.$watch(function(){
                    return $scope.items;
                }, function(NewValue, OldValue){
                    if ($scope.fireSum) {
                        $scope.sumValues = $scope.sum();
                    }
            }, true);
        }

        $scope.checkSum = function() {
            $scope.$watch(function(){
                    return $scope.sumValues;
                }, function(NewValue, OldValue){
                    var checksum = $scope.sum();
                    if (NewValue != checksum) {
                        $scope.fireSum=false;
                        var list = $scope.items;
                        if (NewValue!=0) {
                            if (checksum!=0) {
                                var p1 = list[0].value/checksum;
                                var p2 = list[1].value/checksum;
                                var p3 = list[2].value/checksum;
                                list[0].value = NewValue * p1;
                                list[1].value = NewValue * p2;
                                list[2].value = NewValue - (list[0].value + list[1].value);
                            } else {
                                var third = NewValue / list.length;
                                list[0].value = third;
                                list[1].value = third;
                                list[2].value = third;
                            }
                        } else {
                            list[0].value = 0;
                            list[1].value = 0;
                            list[2].value = 0;
                        }
                        $scope.fireSum=true;
                    }
            }, true);
        }
        $scope.checkValues();
        $scope.checkSum();
    });
});