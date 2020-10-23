const express = require('express');


const app = express();

const port = process.env.Port || "8000";


app.get('/', (req, res) => { res.status(200).send('Hello world from Node js') });


app.listen(port, () => {
    console.log('server is up and runing');
})