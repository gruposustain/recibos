var express = require('express');
var router = express.Router();
var prestadorController = require('../controllers/prestadorController.js');


router.get('/listarPrestador', function(req, res){
	prestadorController.list(function(resp){
		res.json(resp);
	});
});

router.post('/salvarPerstador', function(req, res){
	
	var novoPrestador = {
		nome: req.body.nome,
		cpf: req.body.cpf,
		enderecos: [{
			logradouro: req.body.logradouro,
			numero: req.body.numero,
			complemento: req.body.complemento,
			bairro: req.body.bairro,
			cidade: req.body.cidade,
			estado: req.body.estado
		}],
		telefones: [{
			ddd: req.body.ddd,
			telefone: req.body.telefone,
			tipo: req.body.tipo			
		}]
	}

	prestadorController.save(novoPrestador, function(resp){
		res.json(resp);
	});
});

router.post('/atualizaPrestador', function(req, res){

	var novoPrestador = {
		nome: req.body.nome,
		cpf: req.body.cpf,
		enderecos: [{
			logradouro: req.body.logradouro,
			numero: req.body.numero,
			complemento: req.body.complemento,
			bairro: req.body.bairro,
			cidade: req.body.cidade,
			estado: req.body.estado
		}],
		telefones: [{
			ddd: req.body.ddd,
			telefone: req.body.telefone,
			tipo: req.body.tipo			
		}]
	}

	prestadorController.update(novoPrestador, function(resp){
		res.json(resp);
	});
});

router.delete('/excluirPrestador', function(req, res){
	
	var cpf = req.body.cpf;
	
	prestadorController.delete(cpf, function(resp){
		res.json(resp);
	});
});

module.exports = router;