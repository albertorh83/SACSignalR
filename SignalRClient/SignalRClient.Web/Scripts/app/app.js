define([
    'jquery',
    'angular',

    './courses/services/coursesService',
    './courses/services/courseModelService',
    './courses/controllers/coursesController',
    './courses/controllers/courseController',

    './students/services/studentsService',

    'ngRoute'
], function (
    $,
    angular,
    coursesService,
    courseModelService,
    coursesController,
    courseController,
    studentsService) {

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
        courseModelService(module, opts.courseModelServiceOptions || {});
        coursesController(module, opts.coursesControllerOptions || {});
        courseController(module, opts.courseControllerOptions || {});

        studentsService(module, opts.studentsServiceOptions || {});

        return module;

    }

});