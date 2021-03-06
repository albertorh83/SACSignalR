﻿define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $location, servicesUrl, signalrHubProxyFactory, courseModelService, studentsService, studentModelService) {

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

            var studentsHubProxy = signalrHubProxyFactory(servicesUrl.signalrEndPoing, 'studentsUpdateHub');
            
            studentsHubProxy.on('refreshStudents', function (data) {
                refreshStudents();
            });

            studentsHubProxy.start({});

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$location', 'servicesUrl', 'signalrHubProxyFactory', 'courseModelService', 'studentsService', 'studentModelService'];

    }

});