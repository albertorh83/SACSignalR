define([
    'jquery',
    'angular',

    './courses/services/coursesService',
    './courses/controllers/coursesController',

    'ngRoute'
], function (
    $,
    angular,
    coursesService,
    coursesController) {

    var defaultConfig = {
        moduleName: 'SignalRClient'
    };

    return function (opts) {

        var config = $.extend({}, defaultConfig, opts);
        var module = angular.module(config.moduleName, ['ngRoute']);

        module.constant('servicesUrl', {
            signalRAPIUrl: 'http://signalrapi.sergioacortes.com/'
        });

        coursesService(module, opts.coursesServiceOptions || {});
        coursesController(module, opts.coursesControllerOptions || {});

        return module;

    }

});