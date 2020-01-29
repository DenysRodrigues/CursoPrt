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
const UserSchema = new mongoose.Schema({
    _id: String,
    profile: {
        name: String,
        email: String
    }
});

const User = mongoose.model('users', UserSchema)

module.exports = {
    getByEmail: userEmail => User.findOne({'profile.email': userEmail})
}