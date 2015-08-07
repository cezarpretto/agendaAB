angular.module('starter.services', [])

.factory('Chats', function() {

})

.service('BuscaService', function($http, $ionicLoading, $ionicPopup){
  this.buscar = function(busca){
    return $http.get('http://planosassessoria.com.br/chupetao/file.php?busca=' + busca);
  };

  this.loading = function(attr){
    if(attr === 'show'){
      $ionicLoading.show({
        template: 'Carregando...'
      });
    }else if(attr === 'hide') {
      $ionicLoading.hide();
    }else{
      console.error('The function attribute must be show or hide.');
    }
  };

  this.alert = function(msg){
    var alertPopup = $ionicPopup.alert({
      title: 'Agenda AB',
      template: msg
    });
  }
});
