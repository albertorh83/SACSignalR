define([
    'jquery'
], function ($) {

    var defaultConfig = {
        serviceName: 'coursesService'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function service($q, $http) {

            function getCourses() {

                var defer = $q.defer();

                defer.resolve([
                    {
                        courseId: '1',
                        name: 'course name 1'
                    }, {
                        courseId: '2',
                        name: 'course name 2'
                    }, {
                        courseId: '3',
                        name: 'course name 3'
                    }
                ]);

                return defer.promise;

            }

            return {
                getCourses: getCourses
            };

        }

        app.service(config.serviceName, service);
        service.$inject = ['$q', '$http'];

    }

});