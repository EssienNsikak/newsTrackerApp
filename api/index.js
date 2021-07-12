require('dotenv').config();
const cors = require('cors');
const express = require('express');
const paginate = require('express-paginate');
const passport = require('passport');
const { connect } = require('mongoose');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(paginate.middleware(
    process.env.LIMIT, 
    process.env.MAX_LIMIT
));

const mongoDB = process.env.MONGO_URI;
const port = process.env.PORT;

const runApp = async () => {
    try {
        await connect(mongoDB, {
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(`App is successfully connected to ${mongoDB}`);
        app.listen(port, () => {
            console.log(`App is running on PORT: ${port}`);
        })
    } catch (err) {
        console.log(err);
    }
};

runApp();