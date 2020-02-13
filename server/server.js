const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const urlDB = 'mongodb+srv://user_admin:adminadmin@test-olza1.mongodb.net/test?retryWrites=true&w=majority'
const port = 3000;
mongoose.connect(urlDB,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw 'No se pudo conectar a la base, error : ' + err;
        console.log('Base de datos ONLINE');
    });

app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});