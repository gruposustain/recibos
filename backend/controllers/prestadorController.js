var Prestador = require('../models/Prestador');
var alterarPropriedades = require('../modulos/generic');


exports.list = function(callback){
	Prestador.find({}, function(error, prestador){
		if (error){
			callback({Error:'Não foi possível fazer a leitura'});
		}else{
			callback(prestador);
		}
	});	
}

exports.save = function(novoPrestador, callback){
	Prestador.findOne({'cpf': novoPrestador.cpf}, function(error, prestadores){
		if(error){
			callback({Error: 'Ocorreu um erro'});
		}else if (prestadores != null){
			callback({Error: 'O prestador informado já está cadastrado'});
		}else{
			new Prestador({
				'nome': novoPrestador.nome,
				'cpf': novoPrestador.cpf,
				enderecos: [{
					'logradouro': novoPrestador.logradouro,
					'numero': novoPrestador.numero,
					'complemento': novoPrestador.complemento,
					'bairro': novoPrestador.bairro,
					'cidade': novoPrestador.cidade,
					'estado': novoPrestador.estado
				}],
				telefones: [{
					'ddd': novoPrestador.ddd,
					'telefone': novoPrestador.telefone,
					'tipo': novoPrestador.tipo
				}]
			}).save(function(error, prestador){
				if(error){
					callback({Error: 'ocorreu um erro ou incluir'});
				}else{
					callback(prestador);
				}
			});
		}
	});
}

exports.update = function(novoPrestador, callback){
	Prestador.findOne({'cpf': novoPrestador.cpf}, function(error, prestador){
		if(error){
			callback({Error: 'ocorreu erro ao procurar o cpf'});
		}else if(prestador != null){
			alterarPropriedades.retornarObjeto(novoPrestador, prestador);
			prestador.save();
			callback(prestador);
		}else {
			callback({Error: 'não existe nenhum cpf com esse numero'});
		}
	});
}

exports.delete = function(cpf, callback){
	Prestador.findOne({'cpf': cpf}, function(error, prestador){
		if(error){
			callback({Error: 'ocorreu um erro ao procurar pelo prestador'});
		}else if(prestador != null){
			prestador.remove(function(error){
				if(error){
					callback({Error: 'ocorreu um erro ao tentar excluir o prestador'});
				}else{
					callback({resposta: 'o prestador foi excluido com sucesso'});
				}
			});
		}else{
			callback({Error: 'nenhum prestador foi encontrado'});
		}
	});
}