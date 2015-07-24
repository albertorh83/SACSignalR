define([
    'jquery',
    'angular',
    './signalrHubProxyService'
], function (
    $, 
    angular, 
    signalrHubProxyService) {

    var defaultConfig = {
        moduleName: 'signalrModule'
    };

    return function(opts) {

        var config = $.extend({}, defaultConfig, opts);
        var app = angular.module(config.moduleName, []);

        signalrHubProxyService(app, config.signalrHubProxyServiceConfig || {});

        return app;

    }

});