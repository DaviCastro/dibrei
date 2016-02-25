/**
*  Module
*
* Description
*/

(function(){


var app = angular.module('app.routes');

app.config(function($stateProvider) {

 $stateProvider.state('menu', {
      url: '/menu-lateral',
      abstract:true,
      templateUrl: 'menu/html/menu.html',
      controller:'menuCtrl',
      controllerAs:'ctrl'
    });
      


})

})();
