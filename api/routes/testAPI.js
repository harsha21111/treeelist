var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var parsedData =require("./data3.js");
    console.log(parsedData);
    res.send(`[{
      'lineItemDescription': 'NET INCOME',
      'rowItemId': 653581,
      'rowSeq': 1001,
      'jsonTableId': 101200,
      'parentRowId': 0,
      'tag': null,
      'cTag': null,
      'blockName': null,
      'dimension': null,
      'quantum': 'Million',
      'currencyName': 'USD',
      'colItemIds': null,
      '2019Q3': '90.9',
      '2018Q3': '437.8',
      '2019M9': '229.6',
      '2018M9': '518.6',
      '2019Q3_parsedDataId': '816389',
      '2018Q3_parsedDataId': '816390',
      '2019M9_parsedDataId': '816391',
      '2018M9_parsedDataId': '816392'
    }]`);

});

module.exports = router;