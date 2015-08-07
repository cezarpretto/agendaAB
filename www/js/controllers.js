angular.module('starter.controllers', [])

.controller('MainCtrl', ['$scope', 'BuscaService', '$compile', '$ionicActionSheet', '$timeout', function($scope, busca, $ionicActionSheet, $timeout) {
  $scope.listaResultados = [];
  $scope.txtBusca = {text: undefined};

  $scope.buscar = function(){
    if($scope.txtBusca.text != undefined){
      busca.loading('show');
      busca.buscar($scope.txtBusca.text).success(function(retorno){
        $scope.listaResultados = retorno;
        $scope.txtBusca.text = undefined;
        busca.loading('hide');
      }).error(function(erro){
        $scope.txtBusca.text = undefined;
        busca.loading('hide');
        busca.alert('A pesquisa não retornou nenhum resultado!');
      });
    }
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
