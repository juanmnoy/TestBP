const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,

)

app.get('/DevOps', (req, res) => {
    res.send({
        error: 'ERROR',
    })
  });

app.post('/DevOps/:id', (req, res) => {
    const {id} = req.params;
    const {message} = req.body;
    const {to} = req.body;
    const {from} = req.body;

    /* if (!vol){
        res.status(418).send({message:'we need a logo!'})
    } */

    res.send({
        message: `hello ${to} your message will be send`,
    }); 
  });