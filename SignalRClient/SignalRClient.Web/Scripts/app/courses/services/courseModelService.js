define([
    'jquery'
], function ($) {

    var defaultConfig = {
        serviceName: 'courseModelService'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function service() {

            var courseModel = undefined;

            function get() {
                return courseModel;
            }

            function set(course) {
                courseModel = course;
            }

            return {
                get: get,
                set: set
            };

        }

        app.service(config.serviceName, service);
        service.$inject = ['$http', 'servicesUrl'];

    }

});