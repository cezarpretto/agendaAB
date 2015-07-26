angular.module('starter.services', [])

.factory('Chats', function() {

})

.service('BuscaService', function($http){
  this.buscar = function(busca){
    return $http.get('http://planosassessoria.com.br/chupetao/file.php?busca=' + busca);
  };
});
