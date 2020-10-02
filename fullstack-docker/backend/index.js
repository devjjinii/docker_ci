import express from 'express'
// import bodyParser from 'body-parser'
import cors from 'cors'
import pool from './db.js'

const app = express();

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// create table
pool.query('CREATE TABLE tb_lists (id SERIAL PRIMARY KEY, value VARCHAR(400))',
    (err,results) => {
        console.log('results' , results)
    })


// db
app.get('/api/values', (req, res) => {
    pool.query('SELECT * FROM tb_lists', 
    (err, results) => {
        if(err)
            return res.status(500).send(err)
        else
            return res.json(results)
    })
})

app.post('/api/value', (req,res) => {
    pool.query('INSERT INTO tb_lists (value) VALUES ($1)',
    (err, results) => {
        if(err)
            return res.status(500).send(err)
        else
            return res.json({ success : true, value : results.rows[0]})
    })
})

app.listen(5000, () => {
    console.log('server start >>>> 5000')
})
