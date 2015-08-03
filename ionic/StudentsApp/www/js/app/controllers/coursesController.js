define([
    'jquery'
], function($) {

    var defaultConfig = {
        controllerName: 'CoursesController'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, coursesService) {

            $scope.courses = [];

            coursesService
                .getCourses()
                .then(function(courses) {
                    $scope.courses = courses;
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', 'coursesService'];

    }

});
