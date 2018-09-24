const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    
//    db.collection('Todos').deleteMany({completed:false}).then((result)=> {
//     console.log(result);
//    })
    // db.collection('Todos').deleteOne({completed:true}).then((result)=> {
    //     console.log(result);
    // })
    db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
        console.log(result);
    })
    db.close();
});