/**
*
* Description
*/
(function(){
    var app = angular.module('app.ranks', []);

    app.controller('ranksCtrl', function ($state){

        var ctrl = this;

        ctrl.trocaStatus = function(state){
            $state.go(state, {reload:true});
        }

    });
    app.controller('golsCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();



    }]);
    

    app.controller('presencasCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();


        $scope.$watch(function() {
            return ctrl.jogadores;
        }, function(current, original) {
            if(current != original)
                jogadorService.setJogadores(ctrl.jogadores);
        },true);


    }]);

    app.controller('vitoriasCtrl', ['jogadorService','$scope',function (jogadorService,$scope){

        var ctrl = this;
        ctrl.jogadores=[];
        ctrl.constructor = function(){
            ctrl.jogadores = jogadorService.getJogadores();
        }

        ctrl.constructor();


        $scope.$watch(function() {
            return ctrl.jogadores;
        }, function(current, original) {
            if(current != original)
                jogadorService.setJogadores(ctrl.jogadores);
        },true);


    }]);
})();