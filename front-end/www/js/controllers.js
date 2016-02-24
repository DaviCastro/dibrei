angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
      
.controller('inicialCtrl', function($scope) {

})
   
.controller('grupoCtrl', function($scope) {

})
   
.controller('dibreiroCtrl', function($scope) {

})
   
.controller('listaGrupoCtrl', function($scope) {

})
   
.controller('peladaCtrl', function($scope) {

})
   
.controller('telaPeladaExecucaoCtrl', function($scope) {

})
   
.controller('listaPresencaCtrl', function($scope) {
	this.aba = 1;
	var mudarAba = function(abaEscolhida) {
		this.aba = abaEscolhida;
	}
	var mostrarAba = function(abaAtual) {
		return this.aba === abaAtual;
	}
})
   
.controller('avulsoCtrl', function($scope) {

})
 