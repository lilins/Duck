const Sequelize = require('sequelize')
const sequelize = new Sequelize('Duck', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const Academy = sequelize.define('academy', {
  academyName: {type: Sequelize.STRING},
  academyContent: {type: Sequelize.STRING},
})

const Painter = sequelize.define('painter', {
  painterName: {type: Sequelize.STRING},
  painterContent: {type: Sequelize.STRING},
})

const Paint = sequelize.define('paint', {
  paintName: {type: Sequelize.STRING},
  paintContent: {type: Sequelize.STRING},
})

Academy.hasMany(Painter)
Painter.hasMany(Paint)

// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// force: true will drop the table if it already exists
sequelize.sync().then(() => {
  // Table created
  // return User.create({
  //   firstName: 'Johns',
  //   lastName: 'Hancock'
  // });
});

// User.findAll().then(users => {
//   console.log(JSON.stringify(users))
// })