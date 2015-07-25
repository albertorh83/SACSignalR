define([
    'jquery',
    'ionic.angular',
    './coursesService',
    './studentsService',
    './chatsService'
], function(
    $, 
    angular,
    coursesService,
    studentsService,
    chatsService) {

    var defaultConfig = {
        moduleName: 'starter.services'
    };

    return function(opts) {

        var config = $.extend({}, defaultConfig, opts);
        var app = angular.module(defaultConfig.moduleName, []);

        coursesService(app, config.coursesServiceConfig || {});
        studentsService(app, config.studentsServiceConfig || {});
        chatsService(app, config.chatsServiceConfig || {});

        return app;

    }

});
