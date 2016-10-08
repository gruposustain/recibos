angular.module("listaClientesReceitaFederal").controller("clientesControllerCtrl", function ($scope, $http) {

	$scope.titulo = "Cadastro de clientes";
	$scope.clientes = [];
	$scope.incluir = false;
	
	var carregarClientes = function () {
		$http.get("http://localhost:3000/cliente/listarCliente").success(function (data) {
			$scope.clientes = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};
	
	$scope.excluirClientes = function(clientes) {
		angular.forEach(clientes, function(value, key){
			if(value.selecionado){
				$http.delete("http://localhost:3000/cliente/excluirCliente/" + value.cpf)
					.then(function(response){
						carregarClientes();
					}, function(rejection){
						$scope.message = "Aconteceu um problema: " + rejection;
					});
			}
		});			
	};
	
	$scope.incluirCliente = function (cliente) {
			if ($scope.incluir){
				$http.post("http://localhost:3000/cliente/salvarCliente", cliente)
					.then(function(response){
						delete $scope.contato;
						carregarClientes();
					}, function(rejection){
						$scope.message = "Aconteceu um problema: " + rejection;
					});
			}
		
			$scope.incluir = !$scope.incluir;
	};
	
	$scope.isClienteSelecionado = function (clientes) {
		return clientes.some(function (cliente) {
			return cliente.selecionado;
		});
	};
	
	carregarClientes();
});