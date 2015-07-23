define([
    'jquery'
], function($) {

    var defaultConfig = {
        controllerName: 'StudentController'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, studentsService, studentModelService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.secondTitle = 'Student detail';

            vm.studentModel = studentModelService.get();

            vm.updateStudent = function () {
                $location.path('/' + vm.studentModel.courseId + '/Students/' + vm.studentModel.studentId + '/Update');
            }

            vm.returnToList = function() {
                $location.path('/' + vm.studentModel.courseId);
            }

            vm.deleteStudent = function() {
                studentsService
                    .deleteStudent(vm.studentModel.studentId)
                    .then(function() {
                        $location.path('/' + vm.studentModel.courseId);
                    });
            }

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'studentsService', 'studentModelService'];

    }

});