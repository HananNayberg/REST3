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
    //running the find() method with a function that compares the params id to an id within the array obeject
    let book = books.find(c => c.id === req.params.id);
    //in case no book is found
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
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

app.put('/books/:id', (req,res)=> {
    //running the find() method with a function that compares the params id to an id within the array obeject
    let book = books.find(c => c.id === req.params.id);
    //in case no book is found
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');


    book.title = req.body.title;
    book.author = req.body.author;
    return res.send(book);
});

app.delete('/books/:id', (req,res)=>{
    //using the filter() method to create a new array without the book
    let result = books.filter(c => c.id !== req.params.id);
    //the 'books' array gets the value of the result array 
    books = result; 
    return res.send(books); 
});



const port = 3000;
app.listen(port, ()=> {
    console.log(`app is runing on port ${port} `);
});
