var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */


router.get('/:rollNumbers', function(req, res, next) {
  var roll = req.params.rollNumbers
  roll = roll.split(',');
  var arr = new Array();
  arr.length=0
  async function show() {
          for(var i=0;i<roll.length;i++){
              var r = await fetch("http://proedge.me/test.php?rollnumber=" + roll[i]);
              var result = await r.text()
              arr.push({ "rollno": roll[i], "result": result });
          }
          res.json({
            data: arr
          })
  }
  show();
});


module.exports = router;
