(function(){

/**
*  Module
*
* Description
*/
var app = angular.module('app.config', []);

app.factory('config', [function(){
	return  {
		 baseUrl:'http://129.222.72.112:8080/Belbin/rest'
		//baseUrl:'http://localhost:8080/Belbin/rest'
	};
}]);



})();