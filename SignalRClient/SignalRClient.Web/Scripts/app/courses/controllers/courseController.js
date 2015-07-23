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

            var studentsUpdateHub = $.connection.studentsUpdateHub;

            studentsUpdateHub.client.refreshStudents = function () {
                refreshStudents();
            }

            $.connection.hub.start({
                transport: 'auto'
            }, function() {
                alert('Connection started');
            });

            // var connection = $.hubConnection(servicesUrl.signalRAPIUrl + 'signalr', { useDefaultPath: false });
            // var studentsUpdateHub = connection.createHubProxy('StudentsUpdateHub');

            //studentsUpdateHub.on('refreshStudents', function () {
            //    refreshStudents();
            //});

            //connection
            //    .start({
            //        jsonp: true,
            //        withCredentials: false
            //    })
            //    .done(function() {
            //        alert('connection started');
            //    });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'servicesUrl', 'courseModelService', 'studentsService', 'studentModelService'];

    }

});