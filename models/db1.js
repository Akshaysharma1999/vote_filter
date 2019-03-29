const Sequelize = require('sequelize')

const db = new Sequelize(
    'vote', // database name
    'vote_u', // username
    'vote_p',  // password
    {
        host: 'localhost',
        dialect:'mysql'
    }
)

const Voters = db.define('voters',{
    aadhaar:{
        type:Sequelize.STRING,
        unique: true,
        allowNull : false

    },
    voter_id:{
        type:Sequelize.STRING,
        unique: true,
        allowNull : false
    },
    name:{
        type:Sequelize.STRING,
        allowNull : false
    }
        
})

db.sync().then(console.log('database ready '))


exports = module.exports = {
    db,Voters
}