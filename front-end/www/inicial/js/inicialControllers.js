(function(){
	var app = angular.module('app.inicial', []);


	app.controller('inicialCtrl', function ($timeout, ionicMaterialInk, ionicMaterialMotion){
		

    });


    app.controller('jogadorCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores().slice(0);
        }

        ctrl.constructor();

        ctrl.addJogador= function (){
            ctrl.jogadores.push(new Jogador("","",""));
        }


        ctrl.removerJogador = function(jogador) {

            var index = ctrl.jogadores.indexOf(jogador);
            if (index > -1) {
                this.jogadores.splice(index, 1);
            }

        }

        $scope.$on('$ionicView.beforeLeave', function(){
            jogadorService.setJogadores(ctrl.jogadores);
        });

    }]);


    app.controller('configCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;

        ctrl.jogadoresPorTime;
        ctrl.avulsoMedio;

        ctrl.constructor = function(){
            ctrl.jogadoresPorTime = jogadorService.getJogadoresPorTime();
            ctrl.avulsoMedio = jogadorService.getAvulsoMedio();
        }

        ctrl.constructor();


        $scope.$on('$ionicView.beforeLeave', function(){
            jogadorService.setJogadoresPorTime(ctrl.jogadoresPorTime);
            jogadorService.setAvulsoMedio(ctrl.avulsoMedio);
        });


    }]);



    app.controller('timesCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;

        ctrl.jogadoresPorTime;
        ctrl.avulsoMedio;
        ctrl.jogadores;

        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores().slice(0);
            ctrl.jogadoresPorTime = jogadorService.getJogadoresPorTime();
            ctrl.avulsoMedio = jogadorService.getAvulsoMedio();
            ctrl.times = [];
        }

        ctrl.constructor();

        ctrl.construirTimes = function(){
            ctrl.constructor();
            ctrl.adicionaAvulsos();
            ctrl.ordenaJogadores();
            ctrl.numeroTimes = ctrl.jogadores.length / ctrl.jogadoresPorTime;
            ctrl.sortearTimes(ctrl.numeroTimes);
            ctrl.criarTimes(ctrl.numeroTimes,ctrl.jogadores);
        }

        ctrl.adicionaAvulsos = function(){

            var notaAvulso = ctrl.calcularMediaAvulso();
            var totalFaltantes = 0;


            if (ctrl.jogadores.length % ctrl.jogadoresPorTime != 0) {
                totalFaltantes = ctrl.jogadoresPorTime - (ctrl.jogadores.length % ctrl.jogadoresPorTime);
            }


            for (var index = 0; index < totalFaltantes; index++) {
                ctrl.jogadores.push(new Jogador("NovoJogador " + (index + 1), notaAvulso, 0));
            }



        }

        ctrl.calcularMediaAvulso = function(){
            var mediaNota = 0

            if(ctrl.avulsoMedio){
                var totalNota = ctrl.jogadores.reduce(function(previousValue, currentValue, index, array){
                    return parseInt(previousValue) + parseInt(currentValue.nota);
                },0);

                mediaNota = Math.floor(totalNota / this.jogadores.length);
            }

            return mediaNota;
        }


        ctrl.ordenaJogadores = function(){

         ctrl.jogadores.sort(function(a,b){
            if (a.nota === b.nota) {
                return Boolean(Math.round(Math.random())) ? 1 : -1;
            }
            return a.nota > b.nota ? -1 : 1;
        });

     }

     ctrl.sortearTimes = function(numeroTimes){

        this.jogadores.forEach(function(jogador){
            jogador.time = null;
        });

        for (var i = 0; i < ctrl.jogadoresPorTime; i++) {

            for (var j = 0; j < numeroTimes; j++) {
                var min = i * numeroTimes;
                var max = min + numeroTimes - 1;

                while (ctrl.faltamJogadoresNoPote(min, max)) {
                    var aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

                    if (ctrl.jogadores[aleatorio].time === null) {
                        ctrl.atribuirTime(j, ctrl.jogadores[aleatorio]);
                        break;
                    }

                }

            }

        }

    }


     ctrl.criarTimes= function(numeroTimes,jogadores){
            
            this.times = [];
            
            for(var index = 0; index < numeroTimes; index++) {
                
                this.times.push(new Time(index,jogadores.filter(function(x){return x.time===index})));
                
            }

       
    }


    ctrl.faltamJogadoresNoPote = function(min, max){

         for (var u = min; u <= max; u++) {

            if (this.jogadores[u].time === null) {
                return true;
            }
        }
        return false;

    }


    ctrl.atribuirTime = function(time,jogador){
             jogador.time = time;
    }

}]);





})();