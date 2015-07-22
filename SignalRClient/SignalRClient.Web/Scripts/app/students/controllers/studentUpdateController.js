define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'StudentUpdateController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, studentModelService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.secondTitle = 'Update student';

            vm.studentModel = studentModelService.get();

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', 'studentModelService'];

    }

});