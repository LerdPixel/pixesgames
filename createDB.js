var MongoClient = require('mongodb').MongoClient
const _ = require("underscore")
const name = "peta"
let names = []
MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
    if(err)
        throw err
    const db = client.db("pixesgames")
    const myCollection = db.collection('users')
    myCollection.find().each((err, row) => {

        if (row == null) {
            console.log(names);
            client.close()
        } else {
            names.push(row.name)
        }
    })
//    myCollection.distinct("name", (err, row) => {console.log(row);})
//    myCollection.countDocuments({age: 16}, (err, row) => {console.log(row);})
//    myCollection.updateMany({age: 15}, {$set:{age: 16}})
/*    myCollection.find({"name": name}).each((err, row) => {
        if(row == null) {
            myCollection.insertOne({"name": name, "pass": "afjoak", "age": 17})
            client.close()
        } else {
            client.close()
        }
    })*/
})
