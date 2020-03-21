/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
    
    
    this.checkEntry = (input) => {
    //this.error = 0;
    const validEntry = {num:'', unit:''};       
    
    const checkNum = new RegExp(/[A-Za-z]+/g);
    const checkUnit = new RegExp(/(\d+[.]\d+|\d+[.]\d+[/]\d+|\d+)/)
    
    
    const num = input.split(checkNum).filter(n => n)[0];
    const unit = input.split(checkUnit).filter(n=>n)[1];
    
    checkNum.test(num) ? validEntry.num=num : this.error=+1;
    checkUnit.test(unit) ? validEntry.unit=unit : this.error=+2;
      
    console.log(num, unit, this.error)
    return validEntry;     
  }
  
  this.getNum = function(input) {
    return eval(this.checkEntry(input).num);
  };
  
  this.getUnit = function(input) {    
    return this.checkEntry(input).unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    switch (initUnit){
      case 'km':{
        return 'mi';
        break;
      }
      case 'kg':{
        return 'lbs';
        break;
      }
      case 'lbs':{
        return 'kg';
        break;
      }
      case 'mi':{
        return 'km';
        break;
      }
      case 'l':{
        return 'gal';
        break;
      }
      case 'gal':{
        return 'L'
        break;
      }
      default: {
        return '1'
      }
    };    
    
  };

  this.spellOutUnit = function(unit) {
    switch (unit){
      case 'km':{
        return ' kilometers ';
        break;
      }
      case 'kg':{
        return ' kilograms ';
        break;
      }
      case 'lbs':{
        return ' pounds ';
        break;
      }
      case 'mi':{
        return ' miles ';
        break;
      }
      case 'l':{
        return ' liters ';
        break;
      }
      case 'gal':{
        return ' gallons '
        break;
      }
      default: {
        return '1'
      }
    };
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit){
      case 'km':{
        return (initNum / miToKm).toFixed(5);        
        break;
      }
      case 'kg':{
        return (initNum / lbsToKg).toFixed(5);
        break;
      }
      case 'lbs':{
        return (initNum * lbsToKg).toFixed(5);
        break;
      }
      case 'mi':{
        return (initNum * miToKm).toFixed(5);        
        break;
      }
      case 'l':{
        return (initNum / galToL).toFixed(5);
        break;
      }
      case 'gal':{
        return (initNum * galToL).toFixed(5);
        break;
      }
      default: {
        return '1'
      }
    };
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + this.spellOutUnit(initUnit) + 'converts to ' + returnNum + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
