define([
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

            return {
                getStudentsFromCourse: getStudentsFromCourse
            };

        }

        app.service(config.serviceName, service);
        service.$inject = ['$http', 'servicesUrl'];

    }

});