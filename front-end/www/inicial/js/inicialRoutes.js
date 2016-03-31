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
		})

		.state('menu.inicial.jogador', {
			url: '/jogador',
			views: {
				'tab1': {
					templateUrl: 'inicial/html/jogador.html',
					controller: 'jogadorCtrl',
					controllerAs: 'jogadorCtrl'
				}
			}
		})

		.state('menu.inicial.config', {
			url: '/configuracoes',
			views: {
				'tab2': {
					templateUrl: 'inicial/html/configuraEs.html',
					controller: 'configCtrl',
					controllerAs: 'ctrl'
				}
			}
		})

		.state('menu.inicial.times', {
			url: '/times',
			views: {
				'tab3': {
					templateUrl: 'inicial/html/times.html',
					controller: 'timesCtrl',
					controllerAs: 'ctrl'
				}
			}
		})

	});


	


})();


