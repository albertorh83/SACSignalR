define([
    'jquery'
], function($) {

    var defaultConfig = {
        serviceName: 'coursesService'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function service($http, servicesUrl) {

            function getCourses() {

                return $http.get(servicesUrl.signalRAPIUrl + 'api/courses')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        return error;
                    });

            }

            return {
                getCourses: getCourses
            };

        }

        app.factory(config.serviceName, service);
        service.$inject = ['$http', 'servicesUrl'];

    };

});
