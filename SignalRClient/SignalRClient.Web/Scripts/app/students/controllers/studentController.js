define([
    'jquery'
], function ($) {

    var defaultConfig = {
        controllerName: 'StudentController'
    };

    return function (app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function controller($scope, studentsService) {

            var vm = this;

            vm.title = 'SignalR - Sample application';
            vm.secondTitle = 'Student detail';

            vm.studentModel = studentsService.get();

        }

        app.controller(config.controllerName, controller);
        controller.$inject = ['$scope', 'studentsService'];

    }

});