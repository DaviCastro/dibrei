(function(){

    var app = angular.module('app.inicial');

    app.service('jogadorService', ['$localStorage',function($localStorage){

       this.getJogadores = function(){

        var temporario=[];
        if($localStorage.jogadores!==undefined){
            $localStorage.jogadores.forEach(function(jogador){
                temporario.push(new Jogador(jogador._nome, jogador._nota, jogador._time,jogador._gols));
            });
        }

       temporario.sort(function(a,b){
            
            return a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : -1;
        });
        return temporario;
    }

    this.setJogadores = function(jogadores){
        $localStorage.jogadores = jogadores;
    }

    this.getJogadoresPorTime = function() {

        return $localStorage.jogadoresPorTime || 1;
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

