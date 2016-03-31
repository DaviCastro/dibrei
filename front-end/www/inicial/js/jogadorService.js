(function(){

    var app = angular.module('app.inicial');

    app.service('jogadorService', ['$localStorage',function($localStorage){

     this.getJogadores = function(){
             return $localStorage.jogadores || [];
     }

     this.setJogadores = function(jogadores){
            $localStorage.jogadores = jogadores;
     }

    this.getJogadoresPorTime = function() {

        return $localStorage.jogadoresPorTime || 0;
    }

    this.setJogadoresPorTime = function(numero) {
        $localStorage.jogadoresPorTime = numero;
    }
    
     this.getAvulsoMedio = function() {
        return $localStorage.avulsoMedio || false;
    }
    
    this.setAvulsoMedio= function(avulso){
        $localStorage.avulsoMedio = avulso;
    }

}]);    

})();

