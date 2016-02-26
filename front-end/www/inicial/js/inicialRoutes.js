(function(){

	var app = angular.module('app.routes');

	app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('menu.inicial', {
			url: '/inicial',
			cache: false,
			views: {
				'side-menu21': {
					templateUrl: 'inicial/html/inicial.html',
					controller: 'inicialCtrl',
					controllerAs: 'ctrl'
				}
			}
		});

	});


	


	})();


