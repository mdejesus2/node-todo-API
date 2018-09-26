const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const mongoose = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) =>{
    Todo.find().then((docs) =>{
        res.send({todos: docs})
    }, (e) => {
        res.status(400).send(e);    
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send('el id suministrado no es valido');
    } 
    Todo.findById(id).then((todos) => {
        if(!todos) {
           return res.status(404).send(`el id ${id} no fue encontrado en la collection`);
        }
        res.send({todos});
    }, (e) => {
        res.status(404).send()
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app}