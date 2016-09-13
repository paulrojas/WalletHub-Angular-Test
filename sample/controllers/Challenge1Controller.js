define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge1Controller', function ($scope) {
        $scope.title = "Challenge 1";
        $scope.description = `Use ui-route to create at least 3 pages that share a single state for loading them. To achieve
            this, have state url parameters by dynamic and load views/controllers based on those parameters.<br>
            Create a method which can load the controller and template of each page on demand, when route
            changes. Make the state url option have 2 parameters with the second one optional (this can be
            done by using regexp on the url parameters) so that one of the pages can load additional
            information inside another ui-view based on that parameter.`;
    });
});
