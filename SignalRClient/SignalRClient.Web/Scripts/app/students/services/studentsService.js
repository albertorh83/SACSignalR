﻿define([
    'jquery'
], function ($) {

    var defaultConfig = {
        serviceName: 'studentsService'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function service($http, servicesUrl) {

            function getStudentsFromCourse(courseId) {

                return $http.get(servicesUrl.signalRAPIUrl + 'api/students/courses/' + courseId)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error;
                    });

            }

            function createStudent(student) {
                return $http.post(servicesUrl.signalRAPIUrl + 'api/students', student)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error;
                    });
            }

            function updateStudent(student) {
                return $http.put(servicesUrl.signalRAPIUrl + 'api/students/' + student.studentId, student)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error;
                    });
            }

            function deleteStudent(studentId) {
                return $http.delete(servicesUrl.signalRAPIUrl + 'api/students/' + studentId)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error;
                    });
            }

            return {
                getStudentsFromCourse: getStudentsFromCourse,
                createStudent: createStudent,
                updateStudent: updateStudent,
                deleteStudent: deleteStudent
            };

        }

        app.service(config.serviceName, service);
        service.$inject = ['$http', 'servicesUrl'];

    }

});