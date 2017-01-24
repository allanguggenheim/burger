var connection = require('./connection.js');

////////////TESTS:

//test select statement
    // db.query('SELECT * from burgers', function(err, data) {
    //   if (err) throw err;
    //   console.log(data);
    // });

//test insert statement
    // db.query('INSERT INTO burgers (\`burger_name\`, \`devoured\`, \`date\` ) VALUES (\'Melty\', 1, STR_TO_DATE( \'17/07/2013 18:33:55\', \'%d/%m/%Y %H:%i:%s\'));', function(err, data) {
    //   if (err) throw err;
    // });
    
//test update statement
    // db.query('UPDATE burgers SET devoured=1 where burger_name=\'Melty\';', function(err, data) {
    //   if (err) throw err;
    // });

////////////END TESTS.

var orm = {

    selectAll: function(modelCallback){
        var sqlQuery = "SELECT * from burgers";
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    },

    insertOne: function(INPUT_burger_name, INPUT_devoured, INPUT_formatted_date, modelCallback){
        var sqlQuery = 'INSERT INTO burgers (\`burger_name\`, \`devoured\`, \`date\` ) VALUES (\''+INPUT_burger_name+'\', '+INPUT_devoured+', STR_TO_DATE( \''+INPUT_formatted_date+'\', \'%d/%m/%Y %H:%i:%s\'));';
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    },

    updateOne: function(INPUT_burger_name, INPUT_devoured_bool, modelCallback){
        var sqlQuery = 'UPDATE burgers SET devoured='+INPUT_devoured_bool+' where burger_name=\''+INPUT_burger_name+'\';';
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    }

};

module.exports = orm;



