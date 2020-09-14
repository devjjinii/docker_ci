import express from 'express'
import redis from 'redis'

const client = redis.createClient({
    host: "redis-server",
    port: 6379
})

const app = express();

client.set("number", 0);
app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        client.set("number", parseInt(number) + 1);
        res.send(number);
    })
})

app.listen(8000);
console.log('Server Port : 8000')