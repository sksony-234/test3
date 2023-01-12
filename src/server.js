const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: '.env' });
const userRoute = require('./routes/userRoute.js');

const port = process.env.PORT || 5000;

//Database connection
require('./db/database.js');


//middlewares
app.use(express.json());
app.use(cors());


app.use('/api', userRoute);


app.get('/', (req, res) => {
    res.status(200).send("I am from back world the dark world");
});

app.listen(port, () => {
    console.log(`Your server is listening on http://localhost:${port}`);
})