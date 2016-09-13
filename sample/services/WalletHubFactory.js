define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.factory('WalletHubFactory', function ($http, $q) {
        return {
            getMenu: function() {
                return $http.get('./data/menu.json')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // reports an error
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // reports an error
                        return $q.reject(response.data);
                    });
            },
            getStates: function() {
                return $http.get('./data/us_states.json')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // reports an error
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // reports an error
                        return $q.reject(response.data);
                    });
            }            
        };
    })
    .factory('ShareDataFactory', function() {
        var shared = {
            stringValue: "",
            setString: function(value) {
                shared.stringValue = value;
            }
        };
        return shared; 
    });
});