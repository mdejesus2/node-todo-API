const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongoDB');
    db.collection('Todos').insertOne({
        text: 'some text',
        completed: false
    }, (err,result) => {
        if (err) {
            return ('Unable to insert document', err);
        }
        console.log('Domument inserted correctly', JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({name: 'Michael', age: 42, location: 'ñuñoa'});
    db.close();
});