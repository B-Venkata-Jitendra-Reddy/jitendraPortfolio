const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


// const mongo_url = "mongodb://127.0.0.1:27017/venkatjitendrareddy"
const mongoDB = process.env.MONGO_URI;
main().then( () => {
    console.log("Successfully Connected TO DataBase")
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongoDB);
};

// Import Routes
const pageRoutes = require('./routes/page');
const contactRoutes = require('./routes/contact');


// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', pageRoutes);
app.use('/api', contactRoutes); // Your form action will be /api/contact

app.listen(2580, () => {
  console.log('Server is running on port 2580');
});

