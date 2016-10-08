exports.retornarObjeto = function(objetoNovo, objetoAntigo){
	for (propriedade in objetoNovo){
		for (propriedade2 in objetoAntigo){
				propriedade2 = propriedade;
				objetoAntigo[propriedade2] = objetoNovo[propriedade];
		}
	}
	
	return objetoAntigo;
}