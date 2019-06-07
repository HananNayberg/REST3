const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("welcome to the app");
});

let books = [
    {id: 1, name: "The Hobbit", author: "J.RR Tolkien"},
    {id: 2, name: "1984", Author: "George Orwell"}
];

app.get('/books', (req,res) => {
    return res.send(books);
});

app.get('/books/:id', (req,res)=> {
    let book = books[req.params.id]; 
    return res.send(book);
});

app.post('/books', (req,res)=>{
    let id = uuidv4();
    let book = {
        id : id,
        title: req.body.title,
        author: req.body.author 
    };
    books.push(book);
    return res.send(books);
});



const port = 3000;
app.listen(port, ()=> {
    console.log(`app is runing on port ${port} `);
});
