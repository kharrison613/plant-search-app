import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import User from './models/user.js';
import Plant from './models/plant.js';
import CareTip from './models/careTip.js';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Plant.deleteMany({});
    await CareTip.deleteMany({});

    // Insert sample users
    const users = await User.insertMany([
        { name: 'Amaya', email: 'amaya@example.com', password: 'password123' },
        { name: 'Bob', email: 'bob@example.com', password: 'password123' },
        { name: 'Charlie', email: 'charlie@example.com', password: 'password123' },
        { name: 'David', email: 'david@example.com', password: 'password123' },
        { name: 'Eve', email: 'eve@example.com', password: 'password123' }
      ]);
  
      // Insert sample plants
      const plants = await Plant.insertMany([
        { name: 'Fern', species: 'Nephrolepis exaltata', waterFrequency: 'Weekly', sunlight: 'Indirect', user: users[0]._id },
        { name: 'Cactus', species: 'Opuntia', waterFrequency: 'Monthly', sunlight: 'Direct', user: users[1]._id },
        { name: 'Bamboo', species: 'Bambusoideae', waterFrequency: 'Bi-weekly', sunlight: 'Low', user: users[2]._id },
        { name: 'Orchid', species: 'Orchidaceae', waterFrequency: 'Weekly', sunlight: 'Indirect', user: users[3]._id },
        { name: 'Succulent', species: 'Aloe Vera', waterFrequency: 'Bi-monthly', sunlight: 'Direct', user: users[4]._id }
      ]);
  
      // Insert sample care tips
      await CareTip.insertMany([
        { plant: plants[0]._id, tip: 'Water when soil is dry' },
        { plant: plants[1]._id, tip: 'Do not overwater' },
        { plant: plants[2]._id, tip: 'Prefers shaded areas' },
        { plant: plants[3]._id, tip: 'Mist leaves occasionally' },
        { plant: plants[4]._id, tip: 'Needs bright light' }
      ]);
  
      console.log('Database seeded successfully');
      mongoose.connection.close();
    } catch (err) {
      console.error('Error seeding database:', err);
      mongoose.connection.close();
    }
  };
  
  seedDatabase();
