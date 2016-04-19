(function(){
	var app = angular.module('app.inicial', []);


	app.controller('inicialCtrl', function ($state){

        var ctrl = this;

        ctrl.trocaStatus = function(state){
            $state.go(state, {reload:true});
        }

    });

    app.controller('jogadorCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();

        ctrl.addJogador= function (){
            ctrl.jogadores.push(new Jogador("","1",null,0,true));
        }


        ctrl.removerJogador = function(jogador) {

            var index = ctrl.jogadores.indexOf(jogador);
            if (index > -1) {
                this.jogadores.splice(index, 1);
            }

        }

         ctrl.desabilitarJogador = function(jogador) {

           jogador.ativo = jogador.ativo === true? false:true;   

        }

        $scope.$watch(function() {
            return ctrl.jogadores;
        }, function(current, original) {
            if(current != original)
            jogadorService.setJogadores(ctrl.jogadores);
        },true);


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

        $scope.$watch(function() {
            return ctrl.jogadoresPorTime;
        }, function(current, original) {
            if(current!=original)
            jogadorService.setJogadoresPorTime(ctrl.jogadoresPorTime);
        });


        $scope.$watch(function() {
            return ctrl.avulsoMedio;
        }, function(current, original) {
            if(current!=original)
            jogadorService.setAvulsoMedio(ctrl.avulsoMedio);
        });


    }]);



    app.controller('timesCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;

        ctrl.jogadoresPorTime;
        ctrl.avulsoMedio;
        ctrl.jogadores;

        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadoresAtivos();
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

        ctrl.adicionarVitoria = function(time){
           time.vitorias ++;
        }
        ctrl.adicionarDerrota = function(time){
           time.vitorias --;
        }
        ctrl.adicionaAvulsos = function(){

            var notaAvulso = ctrl.calcularMediaAvulso();
            var totalFaltantes = 0;


            if (ctrl.jogadores.length % ctrl.jogadoresPorTime != 0) {
                totalFaltantes = ctrl.jogadoresPorTime - (ctrl.jogadores.length % ctrl.jogadoresPorTime);
            }


            for (var index = 0; index < totalFaltantes; index++) {
                ctrl.jogadores.push(new Jogador("NovoJogador " + (index + 1), notaAvulso, 0,0,true));
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

            this.times.push(new Time(index,jogadores.filter(function(x){return x.time===index}), 0));
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


ctrl.getNotaTotal = function(time){
   return time.jogadores.reduce(function(memo, jogador){
    return memo + parseInt(jogador.nota);
}, 0);
};




}]);


    app.controller('peladaECtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();

        ctrl.marcarGol= function(jogador){
            jogador.gols=isNaN(jogador.gols)?1:jogador.gols+1;
            jogadorService.setJogadores(ctrl.jogadores)
        }



        ctrl.retirarGol= function(jogador){
            jogador.gols=isNaN(jogador.gols)?0:jogador.gols-1;
            jogadorService.setJogadores(ctrl.jogadores)
        }



        ctrl.timerRunning = true;
        ctrl.startTimer = function (){

            if(!ctrl.timerRunning){
                $scope.$broadcast('timer-resume');   
            }else{
                $scope.$broadcast('timer-start');
            }
            ctrl.timerRunning = true;

        };
        ctrl.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            ctrl.timerRunning = false;
        };
        $scope.$on('timer-stopped', function (event, data){
            console.log('Timer Stopped - data = ', data);
        });

        ctrl.resetTimer = function(){
          $scope.$broadcast('timer-reset');
      }




  }]);





})();