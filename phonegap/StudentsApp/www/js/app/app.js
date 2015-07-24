define([
    'jquery',
    'ionic.angular', 
    './controllers/controllersModule', 
    './services/servicesModule'
], function(
    $,
    angular,
    controllersModuleBuilder, 
    servicesModuleBuilder) {

    var defaultConfig = {
        moduleName: 'started'
    };

    return function(opts) {

        var config = $.extend({}, defaultConfig, opts);
        var controllersModule = controllersModuleBuilder(opts.controllersModuleConfig || {});
        var servicesModule = servicesModuleBuilder(opts.servicesModuleConfig || {});

        var app = angular.module(config.moduleName, [
            'ionic',
            controllersModule.name, 
            servicesModule.name
        ])

        .run(function($ionicPlatform) {

            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
            });
            
        })

        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
            // setup an abstract state for the tabs directive
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.courses', {
                    url: '/courses',
                    views: {
                        'tab-courses': {
                            templateUrl: 'templates/tab-courses.html',
                            controller: 'CoursesController'
                        }
                    }
                })
                .state('tab.course-detail', {
                    url: '/courses/:courseId',
                    views: {
                        'tab-courses': {
                            templateUrl: 'templates/course-detail.html',
                            controller: 'CourseController'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/courses');

        });

        return app;

    }

});
