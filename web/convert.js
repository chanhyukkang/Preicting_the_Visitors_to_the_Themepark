var express = require('express');
var multer = require('multer');
var router = express.Router();
var {PythonShell} =  require('python-shell');
var date;
var realresults;

var mysql = require('mysql');

var connection = mysql.createConnection({
    //connectionLimit: 10,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'tkfka123',
    database: 'mysqltest',
    debug: false
});

router.route('/').get(function(req,res){
    res.render('start.html');
});
router.route('/select1').get(function(req,res){
    res.render('select1.html');
});
router.route('/calender').get(function(req,res){
    res.render('calender3.html');
});
router.route('/help').get(function(req,res){
    res.render('help.html');
});
router.route('/amusementpark').get(function(req,res){
    res.render('amusementpark.html');
});
router.route('/pastinfo').get(function(req,res){
    res.render('pastinfo.html');
});

router.route('/everland').get(function(req,res){
    res.render('everlandfee.html');
});
router.route('/lotteworld').get(function(req,res){
    res.render('lotteworldfee.html');
});
router.route('/eworld').get(function(req,res){
    res.render('eworldfee.html');
});
router.route('/weather').get(function(req,res){
    res.render('weatherrealtime.html');
});
router.route('/date').get(function(req,res){
    res.render('selectDate.html');
});
router.route('/complete').get(function(req,res){
    res.render('complete.html');
});
router.route('/datareceive').get(function(req,res){
    res.render('complete.html');
});
router.get('/send_data', function(req, res, next){
    res.render('selectDate.html', { title: '' });
});


router.post('/complete', function(req, res, next){
  date = req.body.date;   
  console.log(req.body.date);
  var options = {
    mode: 'text',
    pythonPath: 'C:\\Users\\kwakms123\\Anaconda3\\python.exe',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '',
    args: [date]
};
 
PythonShell.run('pythonfile.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('%j', results);
    realresults = results;
    console.log(realresults);
    res.render('complete.html', {realresults : realresults});
});
    console.log(realresults);
    
    console.log(realresults);
});
/*
router.route('/pastinfores').get(function(req,res){
    res.render('pastinfores.html');
});

connection.query('select * from visitor', function(err, rows, field){
    for(var i=0; i<rows.length;i++){
        if(!err){
            if(y1==rows[i].year&&m1==row[i].month){
                console.log(rows[i].peopleNum);
            }
        }
        else{
            console.log('error');
        }
    }
});*/
module.exports = router;