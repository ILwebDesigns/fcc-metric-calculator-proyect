/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const checkEntry = input => {
    const checkNum = new RegExp(/^((\d+[.]\d+[/]\d+)|(\d+[/]\d+)|(\d+[.]\d+)|(\d+))$/g);
    const checkUnit = new RegExp(/(km|kg|l|gal|lbs|mi)$/gi);

    var splitRaw = input.split(/([A-Za-z]+)$/).filter(n => n);

    const result = { num: "errorNum", unit: "errorUnit" };

    const num = splitRaw[0];
    const unit = splitRaw[1];

    num
    ? (num.match(checkNum)
      ? (result.num = eval(num))
      : null)
    : null;
    
    unit
    ? unit.match(checkUnit)
      ? (result.unit = unit)
      : null
    : num
      ? num.match(checkUnit)
        ? (result.unit = num)
        : null
      :null      

    return result;
  };

  this.getNum = function(input) {
    return checkEntry(input).num;
  };

  this.getUnit = function(input) {
    return checkEntry(input).unit;
  };

  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "km": {
        return "mi";
        break;
      }
      case "kg": {
        return "lbs";
        break;
      }
      case "lbs": {
        return "kg";
        break;
      }
      case "mi": {
        return "km";
        break;
      }
      case "l": {
        return "gal";
        break;
      }
      case "gal": {
        return "l";
        break;
      }
      case "KM": {
        return "mi";
        break;
      }
      case "KG": {
        return "lbs";
        break;
      }
      case "LBS": {
        return "kg";
        break;
      }
      case "MI": {
        return "km";
        break;
      }
      case "L": {
        return "gal";
        break;
      }
      case "GAL": {
        return "l";
        break;
      }
      default: {
        return " ERROR RETURNUNIT ";
      }
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case "km": {
        return " kilometers ";
        break;
      }
      case "kg": {
        return " kilograms ";
        break;
      }
      case "lbs": {
        return " pounds ";
        break;
      }
      case "mi": {
        return " miles ";
        break;
      }
      case "l": {
        return " liters ";
        break;
      }
      case "gal": {
        return " gallons ";
        break;
      }
      case "KM": {
        return " kilometers ";
        break;
      }
      case "KG": {
        return " kilograms ";
        break;
      }
      case "LBS": {
        return " pounds ";
        break;
      }
      case "Mi": {
        return " miles ";
        break;
      }
      case "L": {
        return " liters ";
        break;
      }
      case "GAL": {
        return " gallons ";
        break;
      }
      default: {
        return " ERROR SPELLOUT UNIT ";
      }
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = 0;
    const checkUnit = initUnit.toLowerCase();

    switch (checkUnit) {
      case "km": {
        result = initNum / miToKm;
        break;
      }
      case "kg": {
        result = initNum / lbsToKg;
        break;
      }
      case "lbs": {
        result = initNum * lbsToKg;
        break;
      }
      case "mi": {
        result = initNum * miToKm;
        break;
      }
      case "l": {
        result = initNum / galToL;
        break;
      }
      case "gal": {
        result = initNum * galToL;
        break;
      }
      default: {
        result = 0;
      }
    }

    return eval(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result =
      initNum +
      this.spellOutUnit(initUnit) +
      "converts to " +
      returnNum +
      this.spellOutUnit(returnUnit);

    return result;
  };
}

module.exports = ConvertHandler;
