/**
*  Module
*
* Description
*/
(function(){
	var app = angular.module('app.routes');

	app.config(function($stateProvider) {

		$stateProvider.state('menu.ranks', {
			url: '/ranks',
			cache:false,
			views: {
				'side-menu21': {
					templateUrl: 'ranks/html/ranks.html',
					controller: 'ranksCtrl',
					controllerAs:'ctrl'
				}
			}
		})
		.state('menu.ranks.gols', {
			url: '/gols',
			cache:false,
			views: {
				'tab5': {
					templateUrl: 'ranks/html/gols.html',
					controller: 'golsCtrl',
					controllerAs:'ctrl'
				}
			}
		})
		.state('menu.ranks.vitorias', {
			url: '/vitorias',
			views: {
				'tab6': {
					templateUrl: 'ranks/html/vitorias.html',
					controller: 'vitoriasCtrl',
					controllerAs:'ctrl'
				}
			}
		})
		.state('menu.ranks.presencas', {
			url: '/presencas',
			views: {
				'tab7': {
					templateUrl: 'ranks/html/presencas.html',
					controller: 'presencasCtrl',
					controllerAs:'ctrl'
				}
			}
		})
		;
	})


})();
