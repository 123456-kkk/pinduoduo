var express = require('express');
var router = express.Router();
var conn=require('../db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/swiper',function(req,res,next){
  let sql = "select * from swiper";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})

router.get('/icon',function(req,res,next){
  let sql = "select * from icon";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
router.get('/homeShopList',function(req,res,next){
  let sql = "select * from ShopList";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
router.get('/recommendedList',function(req,res,next){
  let sql = "select * from recommendedList";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
module.exports = router;
