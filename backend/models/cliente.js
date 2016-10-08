var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema ({
	nome: String,
	cpf: String,
	dataCadastro: Date,
	dataAtualizacao: Date,
	dataNascimento: Date
});

module.exports = mongoose.model('Cliente', clienteSchema);