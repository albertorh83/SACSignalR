define(['jquery'], function ($) {

    var defaultConfig = {
        appSelector: '.jsApp'
    },
        config = {};

    function builder(app) {

        var $element = angular.element(config.appSelector);

        if ($element && $element.length > 0) {
            angular.bootstrap($element, [app.name]);
        }

    }

    function configure(opts) {

        var defer = $.Deferred();

        config = $.extend({}, defaultConfig, opts);
        defer.resolve(builder);

        return defer.promise();

    }

    return configure;

});