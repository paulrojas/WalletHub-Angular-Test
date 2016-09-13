require.config({

    //baseUrl: "js/scripts",
    baseUrl: "/WalletHub",

    // alias libraries paths
    paths: {
        "jquery" : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min",
        "jquery-ui" : "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min",        
        "angular": "vendors/scripts/angular",
        "ui-router": "vendors/scripts/angular-ui-router",
        "angularAMD": "vendors/scripts/angularAMD",
        "ngAnimate": "//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-animate.min",
        "lodash": "//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min",

        "pMenuController": "sample/controllers/MenuController"
    },

    shim: {
        "jquery-ui" : {
            deps : [ "jquery" ],
            exports : 'jQueryUI'
        },
        angular: {
            exports: 'angular'
        },
        'angularAMD': ['angular'],
        'ui-router': ['angular'],
        'ngAnimate': ['angular']
    },

    deps: ['sample/app']
});