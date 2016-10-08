var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/ReceitaFederal';

mongoose.connect(urlString, function(err, res){});