const express =require('express')

const PORT = 8000;

const app = express();
app.get('/', (req,res) => {
    res.send("hello world")
});

app.listen(PORT);
console.log(`server port : ${PORT}`)