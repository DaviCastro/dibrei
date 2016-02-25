/**
*  Module
*
* Description
*/

(function(){


var app = angular.module('app.routes');

app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('menu.liga', {
      url: '/liga',
      views: {
        'side-menu21': {
          templateUrl: 'liga/html/liga.html',
          controller: 'ligaCtrl',
          controllerAs: 'ctrl'
        }
      }
    })



    .state('menu.listaLiga', {
      url: '/listaLiga',
      views: {
        'side-menu21': {
          templateUrl: 'liga/html/listaLiga.html',
          controller: 'listaLigaCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

}

})();
