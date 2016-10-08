var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController.js');

router.get('/listarCliente', function(req, res){
	clienteController.list(function(resp){
		res.json(resp);
	});
});

router.post('/salvarCliente', function(req, res){

	var dataCadastro = new Date();
	
	var novoCliente = {
		nome: req.body.nome,
		cpf: req.body.cpf,
		dataCadastro: dataCadastro.toLocaleDateString(),
		dataAtualizacao: null,
		dataNascimento: req.body.dataNascimento
	}
	
	clienteController.save(novoCliente, function(resp){
		res.json(resp);
	});
});

router.post('/atualizarCliente', function(req, res){

	var dataAtualizacao = new Date();

	var novoCliente = {
		nome: req.body.nome,
		cpf: req.body.cpf,
		dataCadastro: null,
		dataAtualizacao: dataAtualizacao.toLocaleDateString(),
		dataNascimento: req.body.dataNascimento
	}
	
	clienteController.update(novoCliente, function(resp){
		res.json(resp);
	});
});

router.delete('/excluirCliente/:cpf', function(req, res){
	
	var cpf = req.params.cpf;
	
	clienteController.delete(cpf, function(resp){
		res.json(resp);
	});
});

module.exports = router;