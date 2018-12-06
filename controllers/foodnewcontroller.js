var Food = require('../models/food');


function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

exports.food_list_get = function(req, res) {
  Food.find().exec(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get the food Details.");
    } else {
      res.status(200).json(docs);
    }
  });
};

exports.food_add =  function(req, res) {
  var newFood = req.body;
  
  var food = new Food(
	{
		name: req.body.name,
		date: req.body.date,
		expiry: req.body.expiry,
		left_overs: req.body.left_overs,
		quantity: req.body.quantity
	}
  );  
  Food.create(food, function(err, create) {
      if (err) {
        handleError(res, err.message, "Failed to create a new food Details.");
      } else {
        res.status(201).json(create);
      }
    });
};

exports.food_get = function(req, res) {
  Food.find({_id: req.params.id}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get the food Details");
    } else {
      res.status(200).json(doc);
    }
  });
};

exports.food_update =  function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;
  Food.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, email: req.body.email,expiry: req.body.expiry, left_overs: req.body.left_overs,quantity: req.body.quantity}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update the food Details");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
};

exports.food_delete =  function(req, res) {
	
  Food.findOneAndDelete({_id: req.params.id}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete the food Details");
    } else {
      res.status(200).json(req.params.id);
    }
  });
};