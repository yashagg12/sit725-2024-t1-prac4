const express1 = require('express');
var express = require("express")  
const path = require('path');

const app1 = express();
const PORT = process.env.PORT || 3000;

// // Serve static files from the current directory
app1.use(express.static(__dirname));

app1.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const cardList = [
  {
    title : "WEEK-4",
    image : "week3.jpeg",
    link : "read more",
    description : "demo"
  },
  {
    title : "WEEK-5",
    image : "week5.jpeg",
    link : "read more",
    description : "demo"
  }
]
var express = require("express") 
const { MongoClient, ServerApiVersion } = require('mongodb'); 
var app = express() 
const uri = "mongodb+srv://yashagg00001:Yashgarg12@cluster0.pciiwdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 
var port = process.env.port || 3000; 
let collection; 
app.use(express.static(__dirname + '/public')) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
// Create a MongoClient with a MongoClientOptions object to set the 
//Stable API version 
const client = new MongoClient(uri, { 
    serverApi: { 
        version: ServerApiVersion.v1, 
        strict: true, 
        deprecationErrors: true, 
    } 
}); 
async function runDBConnection() { 
    try { 
        // Connect the client to the server (optional starting in v4.7) 
        await client.connect(); 
        console.log("chl re");
        collection = client.db().collection('Cat'); 
        console.log(collection); 
    } catch (ex) { 
        console.error(ex); 
    } 
} 
app.get('/', (req, res) => { 
    res.render('index.html'); 
}); 
app.get('/api/cards', (req, res) => { 
    getAllCats((err, result) => { 
        if (!err) { 
            res.json({ statusCode: 200, data: result, message: 'get all cards success' }); 
        } 
    }); 
}); 
runDBConnection();









// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/cards', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => console.log('Connected to MongoDB'));

// // Define schema and model for cards
// const cardSchema = new mongoose.Schema({
//     title: String,
//     color: String,
//     image: String,
//     description: String
// });
// const Card = mongoose.model('Card', cardSchema);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Handle form submission
app.post('/api/cards', async (req, res) => {
    try {
        const { title, color, image, description } = req.body;
        const newCard = new Card({ title, color, image, description });
        await newCard.save();
        res.status(201).json({ message: 'Card added successfully' });
    } catch (err) {
        console.error('Error adding card:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Handle GET request to fetch all cards
app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(Server running on port ${PORT}));