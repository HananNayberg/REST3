const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("welcome to the app");
});





const port = 3000;
app.listen(port, ()=> {
    console.log(`app is runing on port ${port} `);
})
