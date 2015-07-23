angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CoursesController', function($scope, coursesService) {

	$scope.courses = [];

	coursesService
		.getCourses()
		.then(function (courses){
			$scope.courses = courses;
		});

})

.controller('CourseController', function($scope, $stateParams, studentsService) {
  // $scope.chat = Chats.get($stateParams.chatId);
  var courseId = $stateParams.courseId;
  
  $scope.students = [];
  
  studentsService
	.getStudentsFromCourse(courseId)
	.then(function (students){
		$scope.students = students;
	});
    
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
