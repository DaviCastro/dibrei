/**
*
* Description
*/
(function(){
var app = angular.module('app.pelada', []);

app.controller('peladaCtrl', [function() {

}]);
   
app.controller('peladaExecucaoCtrl', [function() {

}]);
   
app.controller('listaPresencaCtrl', [function($ionicPopup) {

	var ctrl = this;

	ctrl.removerDibreiro = function() {
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

	 ctrl.confirmarDibreiro = function() {
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
}]);

})();
