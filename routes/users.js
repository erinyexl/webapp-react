var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        username: "/users"
    }, {
        id: 2,
        username: "/users"
    }]);
});

router.get('/todoType', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        connection.query('SELECT * FROM todoType', [], function(err, result) {
            res.json(result);
            connection.release();
        });
    });
});

// 添加用户
router.get('/addUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function(err, result) {
            if(result) {
                result = {
                    code: 200,
                    msg:'增加成功'
                };
            }

            // 以json形式，把操作结果返回给前台页面
            res.json(result);

            // 释放连接
            connection.release();

        });
    });
});

router.post('/login', function(req, res, next){
    pool.getConnection(function(err, connection) {
        var param = req.body || req.params;
        var selectSQL = "select * from login where username = '"+param.username+"' and password = '"+param.password+"'";
        connection.query(selectSQL, [param.username, param.password], function(err, result) {
            let data;
            if(result.length) {
                data = {
                    code: 200,
                    msg:'登录成功'
                };
            }else{
                data = {
                    code: 100,
                    msg:'用户名或密码错误'
                }
            }

            res.json(data);
            connection.release();
        });
    });
});

router.post('/register', function(req, res, next){
    pool.getConnection(function(err, connection) {
        var param = req.body || req.params;
        var selectSQL = 'INSERT INTO login(username,password) VALUES(?,?)';
        connection.query(selectSQL, [param.username,param.password], function(err, result) {
            if(result) {
                result = {
                    code: 200,
                    msg:'注册成功'
                };
            }
            res.json(result);
            connection.release();
        });
    });
});

// TodoList
router.get('/todolist', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        connection.query('SELECT * FROM todolist', [], function(err, result) {
            res.json(result);
            connection.release();
        });
    });
});

router.post('/addNewList', function(req, res, next){
    pool.getConnection(function(err, connection) {
        var param = req.body || req.params;
        connection.query('INSERT INTO todolist(type,state,title,des,created) VALUES(?,?,?,?,?)', [param.type,param.state,param.title,param.des,param.created], function(err, result) {
            if(result) {
                result = {
                    code: 200,
                    msg:'todo增加成功'
                };
            }
            res.json(result);
            connection.release();
        });
    });
});

module.exports = router;