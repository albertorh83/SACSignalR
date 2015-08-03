define([
    'jquery',
    'signalr.core'
], function ($) {

    var defaultConfig = {
        serviceName: 'signalrHubProxyFactory'
    };

    return function(app, opts) {

        var config = $.extend({}, defaultConfig, opts);

        function service($rootScope) {

            function signalrHubFactory(signalrUrl, hubName) {

                var connection = $.hubConnection(signalrUrl);
                var proxy = connection.createHubProxy(hubName);

                return {
                    start: function (startOptions) {

                        connection
                            .start(startOptions)
                            .done(function() {
                                console.log('connection started');
                            })
                            .fail(function(error) {
                                console.log('connection refused: ' + error.message);
                            });

                    },
                    on: function (eventName, callback) {
                        proxy.on(eventName, function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    },
                    off: function (eventName, callback) {
                        proxy.off(eventName, function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    },
                    invoke: function (methodName, callback) {
                        proxy.invoke(methodName)
                            .done(function (result) {
                                $rootScope.$apply(function () {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                    }
                };

            }

            return signalrHubFactory;

        }

        app.factory(config.serviceName, service);
        service.$inject = ['$rootScope'];

    }

});