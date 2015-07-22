define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, courseModelService, studentsService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.courseModel = courseModelService.get();
            vm.courseTitle = vm.courseModel.name;

            studentsService
                .getStudentsFromCourse(vm.courseModel.courseId)
                .then(function(students) {
                    vm.students = students;
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', 'courseModelService', 'studentsService'];

    }

});