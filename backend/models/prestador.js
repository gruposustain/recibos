var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prestadorSchema = new Schema ({
	nome: String,
	cpf: String,
	enderecos: [{
		logradouro: String,
		numero: String,
		complemento: String,
		bairro: String,
		cidade: String,
		estado: String
	}],
	telefones: [{
		ddd: Number,
		telefone: String,
		tipo: String
	}]
});

module.exports = mongoose.model('Prestador', prestadorSchema);