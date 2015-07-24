define([
    'jquery',
    'ionic.angular'
], function($, angular) {

    var defaultConfig = {
            elementSelector: '.jsApp'
        },
        config = {};

    function appRunner(app) {

        var $element = angular.element(config.elementSelector);

        if ($element && $element.length > 0) {
        	angular.bootstrap($element, [app.name]);
        }

    }

    return function(opts) {

        var deferred = $.Deferred();

        config = $.extend({}, defaultConfig, opts);
        deferred.resolve(appRunner);

        return deferred.promise();

    }

});
