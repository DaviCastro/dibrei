(function(){
	var app = angular.module('app.inicial', []);


	app.controller('inicialCtrl', function ($timeout, ionicMaterialInk, ionicMaterialMotion){
		

	 // Delay expansion
    $timeout(function() {
        
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

	});

})();