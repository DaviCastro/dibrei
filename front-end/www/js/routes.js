angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/menu-lateral',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.inicial', {
      url: '/inicial',
      views: {
        'side-menu21': {
          templateUrl: 'templates/inicial.html',
          controller: 'inicialCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.grupo', {
      url: '/grupo',
      views: {
        'side-menu21': {
          templateUrl: 'templates/grupo.html',
          controller: 'grupoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.dibreiro', {
      url: '/dibreiro',
      views: {
        'side-menu21': {
          templateUrl: 'templates/dibreiro.html',
          controller: 'dibreiroCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.listaGrupo', {
      url: '/grupoLista',
      views: {
        'side-menu21': {
          templateUrl: 'templates/listaGrupo.html',
          controller: 'listaGrupoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.pelada', {
      url: '/agendarPelada',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pelada.html',
          controller: 'peladaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.telaPeladaExecucao', {
      url: '/pelada',
      views: {
        'side-menu21': {
          templateUrl: 'templates/telaPeladaExecucao.html',
          controller: 'telaPeladaExecucaoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.listaPresenca', {
      url: '/page8',
      views: {
        'side-menu21': {
          templateUrl: 'templates/listaPresenca.html',
          controller: 'listaPresencaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.avulso', {
      url: '/avulso',
      views: {
        'side-menu21': {
          templateUrl: 'templates/avulso.html',
          controller: 'avulsoCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});