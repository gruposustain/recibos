var Cliente = require('../models/cliente');
var alterarPropriedades = require('../modulos/generic');


exports.list = function(callback){
	Cliente.find({}, function(error, cliente){
		if (error){
			callback({Error:'Não foi possível fazer a leitura'});
		}else{
			callback(cliente);
		}
	});	
}

exports.save = function(novoCliente, callback){
	Cliente.findOne({'cpf': novoCliente.cpf}, function(error, cliente){
		if(error){
			callback({Error: 'ocorreu um erro ao pesquisar o cliente'});
		}else if(cliente != null){
			callback({Error: 'o cliente já está cadastrado'});
		}else{
			new Cliente({
				'nome': novoCliente.nome,
				'cpf': novoCliente.cpf,
				'dataCadastro': novoCliente.dataCadastro,
				'dataNascimento': novoCliente.dataNascimento
			}).save(function(error, clientes){
				if(error){
					callback({Error: 'ocorreu um erro ao tentar incluir o cliente'});
				}else{
					callback(clientes);
				}
			});
		}
	});
}

exports.update = function(clienteAtualizado, callback){
	Cliente.findOne({'cpf': clienteAtualizado.cpf}, function(error, cliente){
		if(error){
			callback({Error: 'ocorreu um erro ao pesquisar o cliente'});
		}else if (cliente != null){
			clienteAtualizado.dataCadastro = cliente.dataCadastro;
			alterarPropriedades.retornarObjeto(clienteAtualizado, cliente);
			cliente.save();
			callback(cliente);
		}else{
			callback({Error: 'cliente já está cadastrado'});
		}
	});
}

exports.delete = function(cpf, callback){
	Cliente.findOne({'cpf': cpf}, function(error, cliente){
		if(error) {
			callback({Error: 'ocorreu um erro ao pesquisar o cpf do cliente'});
		}else if(cliente != null){
			cliente.remove(function(error){
				if(error){
					callback({Error: 'ocorreu erro ao excluir o cliente'});
				}else{
					callback({Resposta: 'o cliente foi excluido com sucesso'});
				}
			});
		}else{
			callback({Error: 'não foi encontrado nenhum cliente com o cpf informado'});
		}
	});
}