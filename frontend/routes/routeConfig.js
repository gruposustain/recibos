angular.module("listaClientesReceitaFederal").config(function($routeProvider){
	$routeProvider.when("/clientes", {
		templateUrl: "views/clientes.html"
	});
});