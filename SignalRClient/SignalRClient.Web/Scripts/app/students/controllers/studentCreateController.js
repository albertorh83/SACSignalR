define([
    'jquery',
    'common/guid'
], function ($, guid) {

    var defaultConfig = {
        controllerName: 'StudentCreateController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, studentsService, courseModelService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.secondTitle = 'Create student';
            vm.courseModel = courseModelService.get();

            vm.studentModel = {
                courseId: vm.courseModel.courseId,
                studentId: guid.newGuid(),
                firstName: 'First name',
                middleName: 'Middle name',
                lastName: 'Last name',
                alias: 'Alias'
            };

            vm.createStudent = function () {
                studentsService
                    .createStudent(vm.studentModel)
                    .then(function() {
                        $location.path('/' + vm.courseModel.courseId);
                    });
            }

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'studentsService', 'courseModelService'];

    }

});