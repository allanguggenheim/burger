var orm = require('../config/orm.js');
var dateFormat = require('dateformat');

////////////TESTS:

//get the date right now
// var now = new Date();
// //we need to format the date to: %d/%m/%Y %H:%i:%s
// now = dateFormat(now, "dd/mm/yyyy h:MM:ss");

// console.log(now);

// orm.selectAll(function(response){
// 	console.log(response);
// });
// orm.insertOne("Pizza-like", 1, now, function(response){
// 	console.log(response);
// });
// orm.updateOne("Pizza-like", 0, function(response){
// 	console.log(response);
// });

////////////END TESTS.


var burgerModel = {

    selectAll: function(controllerCallback){
        orm.selectAll(function(response){
            controllerCallback(response);
        });
    },

    insertOne: function(INPUT_burger_name, modelCallback){
    	var now = new Date();
		//we need to format the date to: %d/%m/%Y %H:%i:%s
		now = dateFormat(now, "dd/mm/yyyy h:MM:ss");
    	orm.insertOne(INPUT_burger_name, 0, now, function(response){
    		controllerCallback(response);
        });
    },

    updateOne: function(INPUT_burger_name, INPUT_devoured_bool, modelCallback){
    	orm.updateOne(INPUT_burger_name, INPUT_devoured_bool, function(response){
    		controllerCallback(response);
        });
    }

};

module.exports = burgerModel;
