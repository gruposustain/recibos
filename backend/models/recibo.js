var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reciboSchema = new Schema ({
	cpfPrestador: String,
	cpfCliente: String,
	data: Date,
	servico: String,
	valor: Number
});

module.exports = mongoose.model('Recibo', reciboSchema);