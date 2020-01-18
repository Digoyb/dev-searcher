const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://DIGOYB:5927RTyb@cluster0-ff5tx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);

// métodos http: get, post, put, delete

// tipos de parâmetros:
// query params: request.query (filtros, paginação, ordenação, ...)
// route params: request.params () 
// body: request.body

//mongodb (Não-relacional)


app.listen(3333);