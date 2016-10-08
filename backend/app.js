var app = require('./config/app_config');
var db = require('./config/db_config');
var prestador = require('./routes/prestadorRouter');
var cliente = require('./routes/clienteRouter');
var recibo = require('./routes/reciboRouter');

app.get('/', function(req, res){
	res.end('Bem-vindo a API de cadastro de recibos na receita federal')
});

app.use('/prestador', prestador);

app.use('/cliente', cliente);

app.use('/recibo', recibo);