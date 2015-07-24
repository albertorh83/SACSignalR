define([
    'jquery',
    'angular',

    './courses/services/coursesService',
    './courses/services/courseModelService',
    './courses/controllers/coursesController',
    './courses/controllers/courseController',

    './students/services/studentsService',
    './students/services/studentModelService',
    './students/controllers/studentController',
    './students/controllers/studentCreateController',
    './students/controllers/studentUpdateController',

    'ngRoute'
], function (
    $,
    angular,

    coursesService,
    courseModelService,
    coursesController,
    courseController,

    studentsService,
    studentModelService,
    studentController, 
    studentCreateController, 
    studentUpdateController) {

    var defaultConfig = {
        moduleName: 'SignalRClient'
    };

    return function (opts) {

        var config = $.extend({}, defaultConfig, opts);
        var module = angular.module(config.moduleName, ['ngRoute']);

        coursesService(module, opts.coursesServiceOptions || {});
        courseModelService(module, opts.courseModelServiceOptions || {});
        coursesController(module, opts.coursesControllerOptions || {});
        courseController(module, opts.courseControllerOptions || {});

        studentsService(module, opts.studentsServiceOptions || {});
        studentModelService(module, opts.studentModelServiceOptions || {});
        studentController(module, opts.studentControllerOptions || {});
        studentCreateController(module, opts.studentCreateControllerOptions || {});
        studentUpdateController(module, opts.studentUpdateControllerOptison || {});

        return module;

    }

});