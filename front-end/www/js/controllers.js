angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
      
.controller('inicialCtrl', function($scope) {

})
   
.controller('grupoCtrl', function($scope) {

})
   
.controller('dibreiroCtrl', function($scope) {
var s = this;
})
   
.controller('listaGrupoCtrl', function($scope) {

})
   
.controller('peladaCtrl', function($scope) {

})
   
.controller('telaPeladaExecucaoCtrl', function($scope) {

})
   
.controller('listaPresencaCtrl', function($scope, $ionicPopup, $timeout) {
	$scope.removerDibreiro = function() {
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Remover Dibrei',
	     template: 'Você tem certeza que deseja desconfirmar esse dibreiro?',
	     cancelText: 'Não',
	     okText: 'Sim'
	   });

	   confirmPopup.then(function(res) {
	     if(res) {
	       console.log('Remover');
	     }
	   });
	 };

	 $scope.confirmarDibreiro = function() {
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Confirmar Dibreiro',
	     template: 'Você tem certeza que deseja confirmar esse dibreiro?',
	     cancelText: 'Não',
	     okText: 'Sim'
	   });

	   confirmPopup.then(function(res) {
	     if(res) {
	       console.log('Adicionar');
	     }
	   });
	 };
})
   
.controller('avulsoCtrl', function($scope) {

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
}]);
 