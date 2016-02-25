/**
* login Module
* Lembrar ao Criar o service o modulo app.login já existe entao não é necessario passar o segundo paramentro que e [] pois
* isto iria sobrescerver o modulo
* Description
*/
(function(){
	var app = angular.module('app.login');
	
	app.factory('loginResource', ['$resource','config', function($resource,config){

		var urlUsuario= config.baseUrl+'/login/';

		return $resource(urlUsuario,{},{
			login:{method:'POST',params:{senha:"@senhaUsuario",nome:"@nomeUsuario"}}
		});
	}]);


})();




      