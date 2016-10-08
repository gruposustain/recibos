var express = require('express');
var router = express.Router();
var reciboController = require('../controllers/reciboController.js');

router.get('/listarRecibo', function(req, res){
	reciboController.list(function(resp){
		res.json(resp);
	});
});

router.get('/pesquisarReciboCliente/:cpfCliente', function(req, res){
	var cpfCliente = req.params.cpfCliente;
	//var cpfCliente = req.body.cpfCliente;
	
	reciboController.search(cpfCliente, function(resp){
		res.json(resp);
	});
});


router.post('/salvarRecibo', function(req, res){

	var dataEmissaoRecibo = new Date();
	
	var novoRecivo = {
		cpfPrestador: req.body.cpfPrestador,
		cpfCliente: req.body.cpfCliente,
		data: dataEmissaoRecibo.toLocaleDateString(),
		servico: req.body.servico,
		valor: req.body.valor
	}
	
	reciboController.save(novoRecivo, function(resp){
		res.json(resp);
	});
});

module.exports = router;