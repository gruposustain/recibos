var Recibo = require('../models/Recibo');
var alterarPropriedades = require('../modulos/generic');

exports.list = function(callback){
	Recibo.find({}, function(error, recibo){
		if(error){
			callback({Error: 'não foi possivel fazer a pesquisa de recibos'});
		}else{
			callback(recibo);
		}
	});
}

exports.search = function(cpfCliente, callback){
	Recibo.find({'cpfCliente': cpfCliente}, function(error, recibo){
		if(error){
			callback({Error: 'ocorreu um erro ao fazer a pesquisa de recibos'});
		}else{
			callback(recibo);
		}
	});
}

exports.save = function(novoRecibo, callback){
	new Recibo({
		'cpfPrestador': novoRecibo.cpfPrestador,
		'cpfCliente': novoRecibo.cpfCliente,
		'data': novoRecibo.data,
		'servico': novoRecibo.servico,
		'valor': novoRecibo.valor
	}).save(function(error, recibos){
		if(error){
			callback({Error: 'não foi possivel salvar o recibo'});
		}else{
			callback(recibos);
		}
	});
}