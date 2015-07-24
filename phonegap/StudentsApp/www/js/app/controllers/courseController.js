define([
    'jquery'
], function($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $stateParams, studentsService) {

            var courseId = $stateParams.courseId;

            $scope.students = [];

            studentsService
                .getStudentsFromCourse(courseId)
                .then(function(students) {
                    $scope.students = students;
                });

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$stateParams', 'studentsService'];

    }

});
