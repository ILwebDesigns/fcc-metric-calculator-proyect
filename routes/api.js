/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     
      
      let checkError = 0;
      initNum == "errorNum" ? checkError+=1 : null;
      initUnit == "errorUnit" ? checkError+=2 : null;
      
      switch(checkError){
        case 1:
          res.json('invalid number');
          break;
        case 2:
          res.json('invalid unit')
          break;
        case 3:
          res.json('invalid number and unit')
          break;
      default:
        res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      }
  });
    
};
