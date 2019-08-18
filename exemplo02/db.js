const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true })
.then(con => {
    global.connection = con.db('aula02')
}).catch(err => {
    console.log(err)
})  

// MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true }
// ,(error,con) => {
//     if(error) console.log('erro de conexao')

//     global.database = con.db('aula02')
// })

function findClients(calback) {
    global.connection.collection('clients')
    .find()
    .toArray(calback)
}

module.exports = {
    findClients
}