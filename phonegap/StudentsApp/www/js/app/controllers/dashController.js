define([
    'jquery'
], function($) {

    var defaultConfig = {
        controllerName: 'DashCtrl'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope) {

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope'];

    }

});
