angular.module('starter.controllers', [])

.controller('MainCtrl', ['$scope', 'BuscaService', '$compile', '$ionicActionSheet', '$timeout', function($scope, busca, $ionicActionSheet, $timeout) {
  $scope.listaResultados = [];
  $scope.txtBusca = {text: undefined};

  $scope.buscar = function(){
    console.log($scope.txtBusca.text);
    busca.buscar($scope.txtBusca.text).success(function(retorno){
      console.log(retorno);
      $scope.listaResultados = retorno;
      $scope.txtBusca.text = undefined;
    }).error(function(erro){
      console.error(erro);
      $scope.txtBusca.text = undefined;
    });
  };
}])

.controller('ChatsCtrl', function($scope) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
