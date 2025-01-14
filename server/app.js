var express = require('express');
var path = require('path');
var expressLayout = require('express-ejs-layouts');
var mysql = require('mysql');
var port = 8000;
var jobsRouter = require('./routes/jobs');
var app = express();

app.use('/jobs', jobsRouter);

app.set('views', path.resolve(__dirname, '../web/views'));
app.use(express.static('../web/public'));
app.set('view engine', 'ejs');

app.get('/',function(req, res){
  res.render('index');
})
app.get('/user_register',function(req, res){
  res.render('user_register');
})
app.get('/dashboard',function(req, res){
  res.render('dashboard');
})
app.get('/admin-login',function(req, res){
  res.render('admin-login');
})
app.get('/take-appointment',function(req, res){
  res.render('take-appointment');
})
app.get('/book-vehicle',function(req, res){
  res.render('registerVehicle');
})
app.get('/feedback',function(req, res){
  res.render('feedBack');
})
app.get('/add-employee',function(req, res){
  res.render('add-employee');
})
app.get('/adminDashboard',function(req, res){
  res.render('adminDashboard');
})


app.listen(port,function(){
    console.log("Server listening on http://localhost:8000");
})

module.exports = app;