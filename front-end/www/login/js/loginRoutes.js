/**
*  Module
*
* Description
*/

(function(){


var app = angular.module('app.routes');

app.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login/html/login.html',
      controller: 'loginCtrl',
      controllerAs:'ctrl'
    });

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');


}

})();
