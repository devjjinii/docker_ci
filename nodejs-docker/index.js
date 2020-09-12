const express =require('express')

const PORT = 8000;

const app = express();
app.get('/', (req,res) => {
    res.send("hello world @~~ 변경12345~")
});

app.listen(PORT);
console.log(`server port : ${PORT}`)