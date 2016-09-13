
define(["lodash", "jquery", "angular", "angularAMD", "ui-router", "ngAnimate", "jquery-ui"], function (_, $, angular, angularAMD) {

    var app = angular.module('walletHubApp', ['ui.router', 'ngAnimate']);

    var controllerNameByParams = function($stateParams)
    {
        // naive example of dynamic controller name mining
        // from incoming state params

        var controller = "OtherController";

        if ($stateParams.id === 1) {
            controller = "DefaultController";
        }

        return controller;
    }

    var leftMenu = {
        templateUrl: 'views/leftMenu.html',
        controller: 'MenuController',
        resolve: {
            loadController: ['$q',
                function ($q)
                {
                    var deferred = $q.defer();
                    require(["pMenuController"], function () { deferred.resolve(); });
                    return deferred.promise;
                }]
        }
    }
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider)
        {
            $stateProvider
          
                .state('home', angularAMD.route({
                    url: '/home',
                    views: {
                        'mainView': {
                            templateUrl: 'views/home.html',
                            controllerProvider: 'HomeController'
                        },
                        'leftMenu': leftMenu
                    }
                }))

                .state('about', angularAMD.route({
                    url: '/about',
                    views: {
                        'mainView@': { 
                            templateUrl: 'views/about.html',
                            controllerProvider: 'AboutController'
                        },
                        'columnOne@about': { template: 'Look I am a column!' },
                        'columnTwo@about': { 
                            templateUrl: 'views/table-data.html',
                            //controller: 'scotchController'
                        },
                        'leftMenu': leftMenu
                    }
                }))

                .state('contact', angularAMD.route({
                    url: '/contact',
                    views: {
                        'mainView@': { 
                            templateUrl: 'views/contact.html',
                            controllerProvider: 'ContactController'
                        },
                        'leftMenu': leftMenu
                    }
                }))                

                .state("testing", angularAMD.route({
                    url: "/{id:int}",
                    views: {
                        'mainView@': {
                            templateProvider: function($stateParams) {
                                if ($stateParams.id === 1) {
                                    return "<div>ONE - Hallo {{title}}</div>";
                                }
                                return "<div>TWO - Hallo {{title}}</div>";
                            },
                            resolve: {
                                loadController: ['$q', '$stateParams',
                                    function ($q, $stateParams)
                                    {
                                        // get the controller name === here as a path to Controller_Name.js
                                        // which is set in main.js path {}
                                        var controllerName = 'p' + controllerNameByParams($stateParams);
                                        
                                        var deferred = $q.defer();
                                        require([controllerName], function () { deferred.resolve(); });
                                        return deferred.promise;
                                    }]
                            },
                            controllerProvider: function($stateParams) {
                                return controllerNameByParams($stateParams);
                            }
                        },
                        'leftMenu': leftMenu
                    }
                }))

                .state('challenge', angularAMD.route({
                    url: '/challenge/{page}{subpage:(?:/[^/]+)?}',
                    views: {
                        'mainView@': {
                            templateUrl: function($stateParams) {
                                return 'views/' + $stateParams.page + '.html';
                            },
                            resolve: {
                                loadController: ['$q', '$stateParams',
                                    function ($q, $stateParams)
                                    {
                                        var page = $stateParams.page.substr(0,1).toUpperCase() + $stateParams.page.substr(1);
                                        var controllerName =  'sample/controllers/' + page + 'Controller';
                                        
                                        var deferred = $q.defer();
                                        require([controllerName], function () { deferred.resolve(); });
                                        return deferred.promise;
                                    }]
                            },
                            controllerProvider: function($stateParams) {
                                var page = $stateParams.page.substr(0,1).toUpperCase() + $stateParams.page.substr(1);
                                var controllerName =  page + 'Controller';
                                return controllerName;
                            }
                        },
                        'subpage_area@challenge': { 
                            templateUrl: function ($stateParams){
                                if ($stateParams.subpage!=='') {
                                return 'views/challenge1/' + $stateParams.subpage + '.html';
                                }
                            },
                        },
                        'leftMenu': leftMenu,
                        'challenge2_page1@challenge': { 
                            templateUrl: 'views/challenge2/page1.html',
                            resolve: {
                                loadController: ['$q', '$stateParams',
                                    function ($q, $stateParams)
                                    {
                                        var controllerName =  'sample/controllers/challenge2/Page1Controller';
                                        
                                        var deferred = $q.defer();
                                        require([controllerName], function () { deferred.resolve(); });
                                        return deferred.promise;
                                    }]
                            },
                            controller: 'Challenge2Page1Controller'
                        },
                        'challenge2_page2@challenge': { 
                            templateUrl: 'views/challenge2/page2.html',
                            resolve: {
                                loadController: ['$q', '$stateParams',
                                    function ($q, $stateParams)
                                    {
                                        var controllerName =  'sample/controllers/challenge2/Page2Controller';
                                        
                                        var deferred = $q.defer();
                                        require([controllerName], function () { deferred.resolve(); });
                                        return deferred.promise;
                                    }]
                            },
                            controller: 'Challenge2Page2Controller'
                        }
                    }
                }));

            $urlRouterProvider.otherwise("/home");
        }
    ]);

    app.run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

    return angularAMD.bootstrap(app);
})