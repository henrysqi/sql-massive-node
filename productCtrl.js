var app = require('./server.js');
var db = app.get('db');


module.exports = {
	Create: function(req,res,next){
		console.log(req.body)
		if (req.body.Name && req.body.Description && req.body.Price && req.body.Imageurl){
			db.create_product([req.body.Name, req.body.Description, req.body.Price, req.body.Imageurl], function(err, result){
				if (err){
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			})
		} else {
			res.send("check body")
		}
	},
	GetAll: function(req, res, next){
		db.read_products(function(err, result){
			if (err){
				res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},
	GetOne: function(req, res, next){
		db.read_product([req.params.productId], function(err, result){
			if (err){
				res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},
	Update: function(req, res, next){
		db.update_product([req.params.productId, req.query.desc], function(err, result){
			if (err){
				res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},
	Delete: function(req, res, next){
		db.delete_product([req.params.productId], function(err, result){
			if (err){
				res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	}
}