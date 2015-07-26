app.controller('mMainCtrl', ['$scope', 'BuscaService', function($scope, busca) {
  console.log('Teste');
  $scope.txtBusca = undefined;

  $scope.buscar = function(){
    console.log($scope.txtBusca);
    busca.buscar($scope.txtBusca).success(function(retorno){
      console.log(retorno);
    }).error(function(erro){
      console.error(erro);
    });
  };
}]);
