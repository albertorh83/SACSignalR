define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, courseModelService, studentsService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.courseModel = courseModelService.get();
            vm.courseTitle = vm.courseModel.name;

            vm.createStudent = function() {
                $location.path('/' + vm.courseModel.courseId + '/Students/Create');
            }

            studentsService
                .getStudentsFromCourse(vm.courseModel.courseId)
                .then(function(students) {
                    vm.students = students;
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'courseModelService', 'studentsService'];

    }

});