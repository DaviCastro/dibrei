(function(){
	var app = angular.module('app.inicial', []);


	app.controller('inicialCtrl', function ($timeout, ionicMaterialInk, ionicMaterialMotion){
		

    });


    app.controller('jogadorCtrl', ['jogadorService',function (jogadorService){

        var ctrl = this;
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();

        ctrl.addJogador= function (){
            ctrl.jogadores.push(new Jogador("","",""));
        }


        ctrl.removerJogador = function(jogador) {

            var index = this.jogadores.indexOf(jogador);
            if (index > -1) {
                this.jogadores.splice(index, 1);
            }

        }

    }]);


    app.controller('timesCtrl', function (){


    });


    app.controller('configCtrl', function (){


    });







})();