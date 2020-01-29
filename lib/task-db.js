const mongoose = require('mongoose');
const config = require('./conf-db')

const {db: {host,port, user, pass, database}} = config;
// var user = "heroku_4m3km28x"
// var pwd = "rmrm93njviet46a4caul3svj4p"
// var url = "ds225078.mlab.com:25078"
// var banco = "mongodb://127.0.0.1:27017/markdb"//"heroku_4m3km28x"

const mongoStrConn = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

//const mongoStrConn ="mongodb://heroku_4m3km28x:rmrm93njviet46a4caul3svj4p:ds225078.mlab.com:25078:mongodb://127.0.0.1:27017/markdb";
mongoose.connect('mongodb://127.0.0.1:27017/markdb')
const TaskSchema = new mongoose.Schema({
    title: String,
    dueDate: Date,
    done: Boolean,
    tags: Array,
    createdBy: String
});

const Task = mongoose.model('tasks', TaskSchema)

module.exports = {
    addTask: task => new Task(task).save(),
    deleteByName: taskName => Task.remove({title:taskName})    
}