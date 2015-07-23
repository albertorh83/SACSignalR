define([
    'jquery',
    'signalr.hubs'
], function ($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, servicesUrl, courseModelService, studentsService, studentModelService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.courseModel = courseModelService.get();
            vm.courseTitle = vm.courseModel.name;

            vm.returnToList = function () {
                $location.path('/');
            }

            vm.createStudent = function() {
                $location.path('/' + vm.courseModel.courseId + '/Students/Create');
            }

            vm.setSelectedStudent = function(student) {
                studentModelService.set(student);
            }

            function refreshStudents() {
                studentsService
                    .getStudentsFromCourse(vm.courseModel.courseId)
                    .then(function (students) {
                        vm.students = students;
                    });
            }

            refreshStudents();

            $.connection.hub.url = servicesUrl.signalRAPIUrl + 'signalr';
            var myHub = $.connection.studentsUpdateHub;

            myHub.client.refreshStudents = function () {
                refreshStudents();
            }

            $.connection
                .hub
                .start()
                .done(function () {
                    console.log('connection stablished');
                })
                .fail(function(error) {
                    console.log(error.message);
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'servicesUrl', 'courseModelService', 'studentsService', 'studentModelService'];

    }

});