define([
    'jquery',
    'ionic.angular', 
	'./staModule'
], function(
	$, 
	angular, 
	staModuleBuilder) {

    var defaultConfig = {
            elementSelector: '.jsApp'
        },
        config = {};

    function appRunner(app) {

		var deferred = $.Deferred();
        var $element = angular.element(config.elementSelector);

		if ($element && $element.length > 0) {

            var staModule = staModuleBuilder(config.staModuleConfig || {});

            angular.bootstrap($element, [
                app.name,
                staModule.name
            ]);

            deferred.resolve(app);

        } else {
            deferred.reject('There is no application container, add the jsApp class to an application container');
        }
		
		return deferred.promise();

    }

    return function(opts) {

        var deferred = $.Deferred();

        config = $.extend({}, defaultConfig, opts);
        deferred.resolve(appRunner);

        return deferred.promise();

    }

});
