/**
*  Module
*
* Description
*/
(function(){
	var app = angular.module('app.routes');

	app.config(function($stateProvider) {

		$stateProvider.state('menu.dibreiro', {
			url: '/dibreiro',
			views: {
				'side-menu21': {
					templateUrl: 'dibreiro/html/dibreiro.html',
					controller: 'dibreiroCtrl',
					controllerAs:'ctrl'
				}
			}
		})
		.state('menu.avulso', {
			url: '/avulso',
			views: {
				'side-menu21': {
					templateUrl: 'dibreiro/html/avulso.html',
					controller: 'avulsoCtrl',
					controllerAs:'ctrl'
				}
			}
		});
	})


})();




