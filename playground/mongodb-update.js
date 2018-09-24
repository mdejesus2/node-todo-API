const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    
db.collection('Users').findOneAndUpdate({name:'Michael'}, 
    {
        $set: {name: 'Michael'}, $inc: {age: 1}

    }, {returnOriginal: false})

.then((result)=> {
    console.log(result);
})
    db.close();
});