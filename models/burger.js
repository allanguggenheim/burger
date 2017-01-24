var orm = require('../config/orm.js');
var dateFormat = require('dateformat');

//get the date right now
var now = new Date();
//we need to format the date to: %d/%m/%Y %H:%i:%s
dateFormat(now, "dd/mm/yyyy h:MM:ss");