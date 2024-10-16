import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define Mongoose Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  waterFrequency: String,
  sunlight: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const careTipSchema = new mongoose.Schema({
  plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
  tip: String,
});

const User = mongoose.model('User', userSchema);
const Plant = mongoose.model('Plant', plantSchema);
const CareTip = mongoose.model('CareTip', careTipSchema);

// User Registration Route
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({ name, email, password: hashedPassword });
  
  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

// User Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'User not found' });
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password' });
  
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// CRUD Operations for Plants
// Create Plant
app.post('/api/plants', async (req, res) => {
  const { name, species, waterFrequency, sunlight, userId } = req.body;
  
  const newPlant = new Plant({ name, species, waterFrequency, sunlight, user: userId });
  
  try {
    await newPlant.save();
    res.status(201).json({ message: 'Plant added successfully', plant: newPlant });
  } catch (error) {
    res.status(400).json({ error: 'Error adding plant' });
  }
});

// Read Plants
app.get('/api/plants', async (req, res) => {
  try {
    const plants = await Plant.find().populate('user', 'name email');
    res.json(plants);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching plants' });
  }
});

// Update Plant
app.put('/api/plants/:id', async (req, res) => {
  const { id } = req.params;
  const { name, species, waterFrequency, sunlight } = req.body;
  
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(id, { name, species, waterFrequency, sunlight }, { new: true });
    res.json({ message: 'Plant updated successfully', plant: updatedPlant });
  } catch (error) {
    res.status(400).json({ error: 'Error updating plant' });
  }
});

// Delete Plant
app.delete('/api/plants/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await Plant.findByIdAndDelete(id);
    res.json({ message: 'Plant deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting plant' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
