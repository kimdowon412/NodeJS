const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv').config()

//Sequelize로 데이터베이스 연결
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_UESR, process.env.DB_PASSWORD {
    host : 호스트
    dialect : 'mysql',
    timezone : '+09:00',
    operatorsAliases : Sequelize.Op,
    pool : {
        max : 5,
        min : 0,
        idle : 10000
    }
})

let db = []

fs.readdirSync(__dirname)
.filter(file=>{
    return file.indexOf('.js')&& file !== 'index.js'
})
.forEach(file=>{
    let model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})

Object.keys(db).forEach(moduleName=> {
    if("associate" in db[moduleName]) {
        db[moduleName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db