define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'StudentUpdateController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, studentsService, studentModelService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.secondTitle = 'Update student';

            vm.studentModel = studentModelService.get();

            vm.updateStudent = function () {
                studentsService
                    .updateStudent(vm.studentModel)
                    .then(function() {
                        $location.path('/' + vm.studentModel.courseId + '/Students/' + vm.studentModel.studentId);
                    });
            }

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'studentsService', 'studentModelService'];

    }

});