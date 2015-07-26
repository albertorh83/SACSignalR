define([
    'jquery'
], function($) {

    var defaultConfig = {
        controllerName: 'CourseController'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, $stateParams, servicesUrl, signalrHubProxyFactory, studentsService) {

            var courseId = $stateParams.courseId;

            $scope.students = [];

			function refreshStudents() {
				
				studentsService
					.getStudentsFromCourse(courseId)
					.then(function(students) {
						$scope.students = students;
					});
	
			}
			
			refreshStudents();
			
			
			var studentsHubProxy = signalrHubProxyFactory(servicesUrl.signalrEndPoing, 'studentsUpdateHub');
            
            studentsHubProxy.on('refreshStudents', function (data) {
				$scope.students = [];
                refreshStudents();
            });

            studentsHubProxy.start({});
				
        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', '$stateParams', 'servicesUrl', 'signalrHubProxyFactory', 'studentsService'];

    }

});
