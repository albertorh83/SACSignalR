define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'CoursesController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, coursesService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.coursesTitle = 'Courses';

            coursesService
                .getCourses()
                .then(function (courses) {
                    vm.courses = courses;
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', 'coursesService'];

    }

});