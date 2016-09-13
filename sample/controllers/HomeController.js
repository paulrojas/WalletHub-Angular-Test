define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.controller('HomeController', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.pageClass = 'css-home';
    });
});
