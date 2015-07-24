﻿define([
    'jquery'
], function($) {

    var defaultConfig = {
            appSelector: '.jsApp'
        },
        config = {};

    function builder(app) {

        var deferred = $.Deferred();

        require([
            'sta/staModule'
        ], function(staModuleBuilder) {

            var staModule = staModuleBuilder(config.staModuleConfig || {});
            var $element = angular.element(config.appSelector);

            if ($element && $element.length > 0) {
                angular.bootstrap($element, [
                    app.name,
                    staModule.name
                ]);
                deferred.resolve(app);
            } else {
                deferred.reject('There is no application container, add the jsApp class to an application container');
            }

        });

        return deferred.promise();

    }

    function configure(opts) {

        var defer = $.Deferred();

        config = $.extend({}, defaultConfig, opts);
        defer.resolve(builder);

        return defer.promise();

    }

    return configure;

});