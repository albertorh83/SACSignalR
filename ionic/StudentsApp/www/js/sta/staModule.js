define([
    'jquery',
    'ionic.angular',
    './signalr/signalrModule'
], function (
    $, 
    angular, 
    signalrModuleBuilder) {

    var defaultConfig = {
        moduleName: 'staModule',
        servicesUrl: {
            webApiEndPoint: 'http://localhost:55150/',
            // webApiEndPoint: 'http://signalrapi.sergioacortes.com/',
            signalrEndPoint: 'http://localhost:55150/',
            // signalrEndPoing: 'http://signalrapi.sergioacortes.com/'
        }
    };

    return function(opts) {

        var config = $.extend({}, defaultConfig, opts);

        var signalrModule = signalrModuleBuilder(config.signalrModuleBuilderConfig || {});

        var app = angular.module(config.moduleName, [
            signalrModule.name
        ]);

        app.constant('servicesUrl', config.servicesUrl);

        return app;

    }

});