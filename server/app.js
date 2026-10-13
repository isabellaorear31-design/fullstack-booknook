import 'dotenv/config';
import express from 'express';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// MongoDB Atlas Connection Setup
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

let collection;

async function run() {
  try {
    await client.connect();
    const db = client.db('booknook');       // Your database name
    collection = db.collection('items'); // Your collection name
    
    await db.command({ ping: 1 });
    console.log('🏓 pinged MongoDB. connected!');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
run();

// Serve static frontend landing page
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'index.html'));
});

// ==========================================
// HOTEL REST & CRUD API ENDPOINTS
// ==========================================

// 1. SEED & CLEAR (Changed to app.get so you can visit it directly in your browser)
app.get('/api/dev/seed', async (req, res) => {
  try {
    const seedData = [
      { 
        id: 1, title: "Twilight", author: "Stephenie Meyer", series: "The Twilight Saga", year: 2005, 
        stars: "⭐⭐⭐⭐⭐",  
        description: "“The classic tale of a girl and her sparkling protector.”<br><br>Bella Swan moves to Forks and encounters Edward Cullen, a mysterious boy who reveals himself to be a vampire.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1700522826i/41865.jpg"
      },
      { 
        id: 2, title: "New Moon", author: "Stephenie Meyer", series: "The Twilight Saga", year: 2006, 
        stars: "⭐⭐⭐⭐", 
        description: "“When the sun sets, the shadows take over.”<br><br>Edward leaves Forks to protect Bella, leading her into a deep depression and a growing friendship with Jacob Black.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1630592760i/49041.jpg"
      },
      { 
        id: 3, title: "The Duke and I", author: "Julia Quinn", series: "Bridgerton", year: 2000, 
        stars: "⭐⭐⭐⭐⭐", 
        description: "“A fake courtship that set the Ton on fire.”<br><br>Daphne Bridgerton and Simon Basset, the Duke of Hastings, form a plan to keep matchmakers away, only to find real sparks.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1379594717i/110391.jpg"
      },
      { 
        id: 4, title: "The Viscount Who Loved Me", author: "Julia Quinn", series: "Bridgerton", year: 2000, 
        stars: "⭐⭐⭐⭐⭐", 
        description: "“He met his match in the woman he tried to avoid.”<br><br>Anthony Bridgerton has chosen a wife, but her older sister Kate Sheffield is determined to stop the marriage.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1379594308i/861326.jpg"
      },
      { 
        id: 5, title: "Icebreaker", author: "Hannah Grace", series: "Maple Hills", year: 2022, 
        stars: "⭐⭐", 
        description: "“A hockey romance that proves the coldest hearts can melt on the ice.”<br><br>Anastasia is a competitive figure skater and Nate is a hockey captain. They are forced to share a rink and a lot more.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659045816i/61767292.jpg"
      },
      { 
        id: 6, title: "Book Lovers", author: "Emily Henry", series: "Standalone", year: 2022, 
        stars: "⭐⭐⭐", 
        description: "“Two rivals, one small town, and a story neither expected.”<br><br>Nora is a cutthroat literary agent who keeps bumping into Charlie, a grumpy editor, while on vacation in a small town.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg"
      }
    ];

    await collection.deleteMany({});
    const result = await collection.insertMany(seedData);
    res.json({ message: "Database successfully seeded with your original books!", result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to seed data' });
  }
});

app.delete('/api/dev/clear', async (req, res) => {
  try {
    const result = await collection.deleteMany({});
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear data' });
  }
});

// 2. GET ALL / FILTERED ITEMS
app.get('/api/items', async (req, res) => {
  try {
    const category = req.query.category;
    const filter = category ? { category } : {};
    const records = await collection.find(filter).toArray();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// 3. GET ONE ITEM BY ID
app.get('/api/items/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const record = await collection.findOne({ _id: id });
    if (!record) return res.status(404).json({ error: 'Item not found' });
    res.json(record);
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

// 4. POST / CREATE ITEM
app.post('/api/items', async (req, res) => {
  try {
    const newItem = req.body;
    const result = await collection.insertOne(newItem);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// 5. PATCH / UPDATE ITEM
app.patch('/api/items/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const changes = req.body;
    const result = await collection.updateOne({ _id: id }, { $set: changes });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update item' });
  }
});

// 6. DELETE ITEM
app.delete('/api/items/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await collection.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:3000`));