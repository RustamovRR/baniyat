const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://RustamovRR:riskiddin98@cluster0.895v8.mongodb.net/Baniyat?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(console.log('mongodbga ulandi...'))

let PORT = 5000

app.get('/', (req, res) => res.send('hello'))
app.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title
    })
    const saved = await blog.save()
    res.send(saved)
})

app.listen(PORT, () => console.log('object'))