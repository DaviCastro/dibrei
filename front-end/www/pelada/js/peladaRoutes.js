/**
*  Module
*
* Description
*/

(function(){ 


	var app = angular.module('app.routes');

	app.config(function($stateProvider) {

		$stateProvider.state('menu.pelada', {
			url: '/agendarPelada',
			views: {
				'side-menu21': {
					templateUrl: 'pelada/html/pelada.html',
					controller: 'peladaCtrl',
					controllerAs: 'ctrl'
				}
			}
		})

		.state('menu.telaPeladaExecucao', {
			url: '/pelada',
			views: {
				'side-menu21': {
					templateUrl: 'pelada/html/telaPeladaExecucao.html',
					controller: 'peladaExecucaoCtrl',
					controllerAs: 'ctrl'
				}
			}
		})
		.state('menu.listaPresenca', {
			url: '/page8',
			views: {
				'side-menu21': {
					templateUrl: 'pelada/html/listaPresenca.html',
					controller: 'listaPresencaCtrl',
					controllerAs: 'ctrl'
				}
			}
		});

	})

})();
