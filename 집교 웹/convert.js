var express = require('express');
var multer = require('multer');
var router = express.Router();

router.route('/').get(function(req,res){
    res.render('start.html');
});
router.route('/select1').get(function(req,res){
    res.render('select1.html');
});
router.route('/calender').get(function(req,res){
    res.render('calender.html');
});
router.route('/help').get(function(req,res){
    res.render('help.html');
});
router.route('/select1/amusementpark').get(function(req,res){
    res.render('amusementpark.html');
});
router.route('/select1/amusementpark/everland').get(function(req,res){
    res.render('everlandfee.html');
});
router.route('/select1/amusementpark/lotteworld').get(function(req,res){
    res.render('lotteworldfee.html');
});

module.exports = router;