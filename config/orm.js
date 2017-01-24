var db = require('./connection.js');

//test select statement
    // db.query('SELECT * from burgers', function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    // });

//test insert statement
    // db.query('INSERT INTO burgers (\`burger_name\`, \`devoured\`, \`date\` ) VALUES (\'Melty\', 1, STR_TO_DATE( \'17/07/2013 18:33:55\', \'%d/%m/%Y %H:%i:%s\'));', function(err, result) {
    //   if (err) throw err;
    // });
    
//test update statement
    // db.query('UPDATE burgers SET devoured=1 where burger_name=\'Melty\';', function(err, result) {
    //   if (err) throw err;
    // });

function orm.selectAll(){
    db.query('SELECT * from burgers', function(err, result) {
      if (err) throw err;
      // console.log(result);
      return result;
    });
}

function orm.insertOne(INPUT_burger_name, INPUT_devoured, INPUT_formatted_date){
    db.query('INSERT INTO burgers (\`burger_name\`, \`devoured\`, \`date\` ) VALUES (\''+INPUT_burger_name+'\', '+INPUT_devoured+', STR_TO_DATE( \''+INPUT_formatted_date+'\', \'%d/%m/%Y %H:%i:%s\'));', function(err, result) {
      if (err) throw err;
      return result;
    });
}

function orm.updateOne(INPUT_burger_name, INPUT_devoured_bool){
    db.query('UPDATE burgers SET devoured='+INPUT_devoured_bool+' where burger_name=\''+INPUT_burger_name+'\';', function(err, result) {
      if (err) throw err;
      return result;
    });
}

module.exports = orm;